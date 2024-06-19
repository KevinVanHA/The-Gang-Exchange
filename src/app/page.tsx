"use client";

import { NFT_CONTRACTS } from "@/consts/nft_contracts";
import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <Box>
      {/* Hero Section with Background Image */}
      <Box
        position="relative"
        width="100%"
        height="95vh" // Adjust height as needed
        backgroundImage="url('/images/polygodzHero.jpg')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      >
        <Flex width="100%" height="100%">
          {/* Left Column */}
          <Box width={{ base: "100%", md: "50%" }} />
          {/* Right Column */}
          <Box
            width={{ base: "100%", md: "50%" }}
            display="flex"
            justifyContent="center"
            alignItems="center"
            background="linear-gradient(90deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))"
            color="white"
            padding="20px"
          >
            <Stack spacing="6" textAlign="center">
              <Heading size="2xl">Welcome to Polygodz</Heading>
              <Text fontSize="xl">
                Explore the most exciting NFT collections in the Battle Arena.
                <br />Join now and be a part of the adventure!
              </Text>
              <Box display="flex" justifyContent="center">
                <ButtonGroup spacing="4">
                  <Button variant="solid" colorScheme="blue">
                    Get Started
                  </Button>
                  <Button variant="outline" colorScheme="blue">
                    Learn More
                  </Button>
                </ButtonGroup>
              </Box>
            </Stack>
          </Box>
        </Flex>
      </Box>

      {/* Trending Collections Section */}
      <Box mt="44px" m="auto">
        <Flex direction="column" gap="4">
          <Heading mx="auto" mt="20px">
            Battle Arena Collections
          </Heading>
          <Flex
            direction="row"
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
                href={`/collection/${item.chain.id.toString()}/${item.address}`}
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <Image src={item.thumbnailUrl} />
                <Text textAlign="center" fontSize="lg" mt="10px">
                  {item.title}
                </Text>
              </Link>
            ))}
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}
