"use client";

import {
  Box,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Button,
  SimpleGrid,
  Avatar,
  VStack,
  Container,
} from "@chakra-ui/react";

export default function AboutUs() {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        position="relative"
        width="100%"
        height="60vh"
        backgroundImage="url('/images/aboutHero.jpg')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      >
        <Flex
          width="100%"
          height="100%"
          alignItems="center"
          justifyContent="center"
          background="linear-gradient(90deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3))"
        >
          <Heading color="white" size="3xl">
            About Us
          </Heading>
        </Flex>
      </Box>

      {/* Mission Statement */}
      <Container maxW="container.lg" mt="10" mb="10">
        <Stack spacing="6" textAlign="center">
          <Heading size="xl">Our Mission</Heading>
          <Text fontSize="lg">
            At Polygodz, our mission is to create an exciting and engaging NFT
            marketplace where users can explore, trade, and collect unique digital assets.
            We are committed to fostering a vibrant community of creators and collectors.
          </Text>
        </Stack>
      </Container>

      {/* Team Section */}
      <Container maxW="container.lg" mt="10" mb="10">
        <Heading textAlign="center" size="xl" mb="6">
          Meet Our Team
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Box textAlign="center">
            <Avatar size="2xl" src="/images/teamMember1.jpg" mb="4" />
            <Heading size="md">John Doe</Heading>
            <Text fontSize="sm" color="gray.500">
              CEO
            </Text>
            <Text mt="3">
              John is the visionary behind Polygodz, with over a decade of experience
              in the tech industry.
            </Text>
          </Box>
          <Box textAlign="center">
            <Avatar size="2xl" src="/images/teamMember2.jpg" mb="4" />
            <Heading size="md">Jane Smith</Heading>
            <Text fontSize="sm" color="gray.500">
              CTO
            </Text>
            <Text mt="3">
              Jane leads our technology team, ensuring the platform is secure and scalable.
            </Text>
          </Box>
          <Box textAlign="center">
            <Avatar size="2xl" src="/images/teamMember3.jpg" mb="4" />
            <Heading size="md">Mike Johnson</Heading>
            <Text fontSize="sm" color="gray.500">
              Head of Marketing
            </Text>
            <Text mt="3">
              Mike drives our marketing efforts, helping us reach a global audience.
            </Text>
          </Box>
        </SimpleGrid>
      </Container>

      {/* Call to Action Section */}
      <Box
        bg="blue.600"
        color="white"
        py="10"
        textAlign="center"
      >
        <Heading size="xl" mb="4">
          Join Our Community
        </Heading>
        <Text fontSize="lg" mb="6">
          Ready to explore the world of NFTs? Join us today and become part of our vibrant community.
        </Text>
        <Button
          size="lg"
          colorScheme="whiteAlpha"
          variant="outline"
          onClick={() => (window.location.href = "/signup")}
        >
          Get Started
        </Button>
      </Box>
    </Box>
  );
}
