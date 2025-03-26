"use client";

import { NFT_CONTRACTS } from "@/consts/nft_contracts";
import ImageSlider from "@/components/shared/ImageSlider";
import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

export default function Home() {
  const images = [
    "/images/slider1.jpg",
    "/images/slider2.jpg",
    "/images/slider3.jpg",
  ];

  return (
    <Flex>
      <Box mt="24px" m="auto" width="100%">
        <Flex direction="column" gap="4" justifyContent="center">
          <ImageSlider images={images} mx="auto" mt="2" maxW="100vw" />
          <Box alignItems="center" width="80%" mx="auto">
            <Heading textAlign="center" mt="40px">
              Trending collections
            </Heading>
            <Flex
              direction="row"
              width="80vw"
              wrap="wrap"
              mt="20px"
              gap="5"
              justifyContent="space-evenly"
            >
              {NFT_CONTRACTS.map((item) => (
                <Link
                  _hover={{ textDecoration: "none" }}
                  w={300}
                  h={400}
                  key={item.address}
                  href={item.chain
                    ? `/collection/${item.chain.id.toString()}/${item.address}`
                    : `/collection/undefined/${item.address}`}
                >
                  <Image src={item.thumbnailUrl} />
                  <Text fontSize="large" mt="10px" textAlign="center">
                    {item.title}
                  </Text>
                </Link>
              ))}
            </Flex>
          <Box width="80%" mx="auto" mt="40px">
            <Heading textAlign="center" mb="20px">
              FAQ
            </Heading>
            <Accordion allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      What is an NFT?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  NFT stands for Non-Fungible Token. It's a unique digital identifier recorded on a blockchain, used to certify ownership and authenticity of digital or physical assets. Unlike cryptocurrencies (which are fungible, meaning interchangeable), each NFT is unique.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      How do NFTs work?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  NFTs are typically created (or "minted") on a blockchain like Ethereum. The blockchain acts as a distributed public ledger, recording the NFT's metadata (like who created it, who owns it, and its transaction history) in a secure and transparent way. This ensures the NFT's uniqueness and provenance.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      What gives NFTs value?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  An NFT's value is determined by market demand, similar to physical collectibles. Factors influencing value include uniqueness, rarity, the creator's reputation, historical significance, community interest, and the utility or perks associated with owning the NFT.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Can I copy an NFT's image? Does that mean I own it?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  You can easily copy the digital file (like a JPEG) associated with an NFT, just like you can take a photo of a famous painting. However, copying the file doesn't give you ownership of the NFT itself. Ownership is proven by the record on the blockchain, which cannot be easily duplicated or faked. The NFT represents the authentic, original item.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}
