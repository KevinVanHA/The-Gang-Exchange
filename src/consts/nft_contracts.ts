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

  {
    address: "0xa6BE79E99fF0ADE7d0948881eae8f9dD95679100",
    chain: polygon,
    title: "Cyber Punkz",
    thumbnailUrl:
      "/images/cyberpunk.jpg",
    type: "ERC721",
  },

  {
    address: "0xF89AC2AF2D0F6D24a99C7C83281050A13615c210",
    chain: polygon,
    title: "GhoulBusterz",
    thumbnailUrl:
      "/images/ghoulbusterz.png",
    type: "ERC721",
  },
  {
    address: "0x209E65fc2b4eF549d9B84fC8f8c7708f6aFb01b7",
    chain: polygon,
    title: "Legacy Skullz",
    thumbnailUrl:
      "/images/legacyskullz.png",
    type: "ERC721",
  },
  
  
];
