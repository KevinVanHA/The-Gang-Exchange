import { client } from "@/consts/client";
import { useMarketplaceContext } from "@/hooks/useMarketplaceContext";
import { Button, useToast } from "@chakra-ui/react";
import { sendTransaction, waitForReceipt } from "thirdweb";
import {
  buyFromListing,
  type DirectListing,
} from "thirdweb/extensions/marketplace";
import {
  useActiveWalletChain,
  useSwitchActiveWalletChain,
} from "thirdweb/react";
import type { Account } from "thirdweb/wallets";
import { useState } from "react";

type Props = {
  listing: DirectListing;
  account: Account;
};

export default function BuyFromListingButton(props: Props) {
  const { account, listing } = props;
  const { marketplaceContract, refetchAllListings, nftContract } =
    useMarketplaceContext();
  const switchChain = useSwitchActiveWalletChain();
  const activeChain = useActiveWalletChain();
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Button
      isLoading={isLoading}
      loadingText="Processing..."
      onClick={async () => {
        setIsLoading(true);
        if (activeChain?.id !== nftContract.chain.id) {
          await switchChain(nftContract.chain);
        }
        try {
          const transaction = buyFromListing({
            contract: marketplaceContract,
            listingId: listing.id,
            quantity: listing.quantity,
            recipient: account.address,
          });
          const receipt = await sendTransaction({
            transaction,
            account,
          });
          await waitForReceipt({
            transactionHash: receipt.transactionHash,
            client,
            chain: nftContract.chain,
          });
          toast({
            title: "Purchase completed! The asset(s) should arrive in your account shortly",
            status: "success",
            duration: 4000,
            isClosable: true,
          });
          refetchAllListings();
        } catch (err) {
          console.error(err);
          const errorMessage = (err as Error).message;
          if (errorMessage.startsWith("insufficient funds for gas") || errorMessage.includes("!BAL20")) {
            toast({
              title: "You don't have enough funds for this purchase.",
              description: `Make sure you have enough gas for the transaction + ${listing.currencyValuePerToken.displayValue} ${listing.currencyValuePerToken.symbol}`,
              status: "error",
              isClosable: true,
              duration: 7000,
            });
          } else {
            toast({
              title: "Transaction failed",
              description: errorMessage,
              status: "error",
              isClosable: true,
              duration: 7000,
            });
          }
        } finally {
          setIsLoading(false);
        }
      }}
    >
      Buy
    </Button>
  );
}