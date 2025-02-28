import type { Chain } from "thirdweb";
import { polygon } from "./chains";

export type Token = {
  tokenAddress: string;
  symbol: string;
  icon: string;
};

export type SupportedTokens = {
  chain: Chain;
  tokens: Token[];
};

/**
 * By default you create listings with the payment currency in the native token of the network (eth, avax, matic etc.)
 *
 * If you want to allow users to transact using different ERC20 tokens, you can add them to the config below
 * Keep in mind this is for front-end usage. Make sure your marketplace v3 contracts accept the ERC20s
 * check that in https://thirdweb.com/<chain-id>/<marketplace-v3-address>/permissions -> Asset
 * By default the Marketplace V3 contract supports any asset (token)
 */
export const SUPPORTED_TOKENS: SupportedTokens[] = [
    {
    chain: polygon,
    tokens: [
      {
        tokenAddress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
        symbol: "USDC",
        icon: "/erc20-icons/usdc.png",
      },
      {
        tokenAddress: "0x455e53cbb86018ac2b8092fdcd39d8444affc3f6",
        symbol: "POL",
        icon: "/erc20-icons/usdt.png",
      },
    ],
  },
];

export const NATIVE_TOKEN_ICON_MAP: { [key in Chain["id"]]: string } = {
  1: "/native-token-icons/eth.png",
  [polygon.id]: "/native-token-icons/eth.png",
};
