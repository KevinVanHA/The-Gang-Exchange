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
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}
