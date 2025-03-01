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
