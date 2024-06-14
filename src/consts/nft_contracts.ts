import type { Chain } from "thirdweb";
import { polygon } from "./chains";

export type NftContract = {
  address: string;
  chain: Chain;
  type: "ERC1155" | "ERC721";

  title?: string;
  description?: string;
  thumbnailUrl?: string;
  slug?: string;
};

/**
 * Below is a list of all NFT contracts supported by your marketplace(s)
 * This is of course hard-coded for demo purpose
 *
 * In reality, the list should be dynamically fetched from your own data source
 */
export const NFT_CONTRACTS: NftContract[] = [
  {
    address: "0x911A2e32F4f7f1fDf36B2c5B6b322354C2627c1D",
    chain: polygon,
    title: "Godz of Egypt",
    thumbnailUrl:
      "/images/godz.jpg",
    type: "ERC721",
  },
  {
    address: "0xaeEdE9cE7Bf1830958738D845C2A9b0Aa0B1bc68",
    chain: polygon,
    title: "Elementalz",
    thumbnailUrl:
      "/images/elementalz.jpg",
    type: "ERC721",
  },
  {
    address: "0x5b3ca43cff0e5953315F6ACf723eD2C4ed44A0a9",
    chain: polygon,
    title: "Xenoz",
    thumbnailUrl:
      "/images/xenoz.png",
    type: "ERC721",
  },

];
