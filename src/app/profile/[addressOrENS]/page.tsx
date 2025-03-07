"use client";

import { ProfileSection } from "@/components/profile-page/Profile";
import { useResolveENSAddress } from "@/hooks/useResolveENSAddress";
import { Box, Text } from "@chakra-ui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { isAddress } from "thirdweb/utils";

export default function PublicProfilePage() {
  // Use useSearchParams to get the address from the URL
  const searchParams = useSearchParams();
  const addressOrENS = searchParams.get("address") || searchParams.get("ens") || "";
  
  // Alternatively, if using dynamic routes like `/profile/[address]`:
  // const params = useParams();
  // const addressOrENS = params.address || "";

  const isValidEvmAddress = isAddress(addressOrENS);
  const { data: resolvedAddress, isLoading } = useResolveENSAddress({
    text: addressOrENS,
    enabled: !isValidEvmAddress,
  });

  const [address, setAddress] = useState<string | null>(null);

  useEffect(() => {
    if (isLoading) return;

    if (!isValidEvmAddress && !resolvedAddress) {
      // Handle not found (e.g., redirect or show error)
      // Since this is a client component, you can't use notFound()
      // Instead, show an error UI or navigate to 404:
      // const router = useRouter();
      // router.replace("/404");
      return;
    }

    const resolvedAddressFinal = isValidEvmAddress 
      ? addressOrENS 
      : resolvedAddress!;
    setAddress(resolvedAddressFinal);
  }, [isLoading, isValidEvmAddress, resolvedAddress, addressOrENS]);

  if (!address) {
    return (
      <Box>
        {isLoading ? <Text>Loading...</Text> : <Text>Invalid address/ENS</Text>}
      </Box>
    );
  }
}
