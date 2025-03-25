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
 * GOR: 0x472e70799aD12Ad07cEa1E2D7f377Ffe3AAecCFc
 * GOA: 0x929c9655421bE3398522F2c9acE9F371c5E26233
 * GOP: 0xD433ED2a7ea66073fA33C57D76847D1f0Ff4e2B7
 * GOE: 0x911A2e32F4f7f1fDf36B2c5B6b322354C2627c1D
 * Ghoulbusterz: 0xF89AC2AF2D0F6D24a99C7C83281050A13615c210
 * Cyberpunk: 0xa6BE79E99fF0ADE7d0948881eae8f9dD95679100
 * SPA: 0x35C99B9F55f87c1cbf7fAD6E0A04C8C2a98a8Cd6
 * Xenoz: 0x5b3ca43cff0e5953315F6ACf723eD2C4ed44A0a9
 * Elementalz: 0xaeEdE9cE7Bf1830958738D845C2A9b0Aa0B1bc68
 */
export const NFT_CONTRACTS: NftContract[] = [
  {
    address: "0xf1360565FC9d0De609581762D4ea45981a28cB7a",
    chain: polygon,
    title: "Gangskullz",
    thumbnailUrl:
      "/collections/Gangskullz.webp",
    type: "ERC721",
  },
  {
    address: "0x6AC938836576792adBe8e166Eb8627bFd93351F4",
    chain: polygon,
    title: "Gangskullz Certified OG's",
    thumbnailUrl:
      "/collections/GangskullzCO.webp",
    type: "ERC721",
  },

  {
    address: "0x547d68CB905A4e78d9692E586a7d5445339DE76F",
    chain: polygon,
    title: "Mischief Mythology",
    description: "",
    thumbnailUrl:
      "/collections/MisschiefMythology.webp",
    type: "ERC721",
  },
  {
    address: "0x4df6e0E7d1c460075099d233F4B361e5B80307a7",
    chain: polygon,
    title: "Sick Skull Gang: Omega",
    thumbnailUrl:
      "/collections/SickSkullGangOmega.webp",
    slug: "gorobot",
    type: "ERC721",
  },
  {
    address: "0x2953399124F0cBB46d2CbACD8A89cF0599974963",
    chain: polygon,
    title: "Sick Ape Antisocial Group",
    thumbnailUrl:
      "https://258c828e8cc853bf5e0efd001055fb39.ipfscdn.io/ipfs/bafybeidec7x6bptqmrxgptaedd7wfwxbsccqfogzwfsd4a7duxn4sdmnxy/0.png",
    type: "ERC1155",
  },

];
