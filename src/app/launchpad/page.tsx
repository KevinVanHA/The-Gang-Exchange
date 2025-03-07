"use client";

import {
  Box,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  IconButton,
  Grid,
  GridItem,
  Image,
  Text,
  HStack,
  Avatar,
  Spacer,
  Select,
  useColorModeValue,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

import Link from "next/link";
import { useState } from "react";

interface GenericNFTCardProps {
  projectName: string;
  projectLink: string;
  marketCap: string;
  replies: number;
  createdBy: string;
  imageSrc: string;
}

const GenericNFTCard = ({
  projectName,
  projectLink,
  marketCap,
  replies,
  createdBy,
  imageSrc,
}: GenericNFTCardProps) => {
  const cardBg = useColorModeValue("gray.100", "gray.700");
  const textColor = useColorModeValue("gray.700", "gray.300");

  return (
    <Box
      bg={cardBg}
      borderRadius="xl"
      p={4}
    >
      <Image
        src={imageSrc}
        alt="NFT Image"
        borderRadius="md"
        mb={2}
        boxSize="100%"
        objectFit="cover"
      />
      <Heading size="md" mb={2} color={textColor}>
        {projectName}
      </Heading>
      <HStack justify="space-between" mb={2}>
        <Text fontSize="sm" color={textColor}>
          Market Cap: {marketCap}
        </Text>
        <Text fontSize="sm" color={textColor}>
          Replies: {replies}
        </Text>
      </HStack>
      <HStack align="center">
        <Avatar size="xs" name={createdBy} src="" />
        <Text fontSize="xs" color={textColor}>
          Created By {createdBy}
        </Text>
        <Spacer />
        <Link href={projectLink}>
          <Text fontSize="sm" color={textColor} fontWeight="bold">
            Explore →
          </Text>
        </Link>
      </HStack>
    </Box>
  );
};

interface LaunchpadProjectCardProps {
  projectName: string;
  projectLink: string;
  marketCap: string;
  replies: number;
  createdBy: string;
  imageSrc: string;
}

const LaunchpadProjectCard = ({
  projectName,
  projectLink,
  marketCap,
  replies,
  createdBy,
  imageSrc,
}: LaunchpadProjectCardProps) => {
  const cardBg = useColorModeValue("gray.100", "gray.700");
  const textColor = useColorModeValue("gray.700", "gray.300");

  return (
    <Box
      bg={cardBg}
      borderRadius="xl"
      p={4}
      sx={{
        boxShadow: "0 0 10px rgba(123, 31, 162, 0.5)",
        border: "2px solid",
        borderColor: "linear-gradient(to right, #6a1b9a, #9c27b0)",
        backgroundClip: "padding-box",
        backgroundColor: "transparent",
        "&:hover": {
          transform: "scale(1.05)",
        },
        transition: "transform 0.2s ease-in-out",
      }}
    >
      <Image
        src={imageSrc}
        alt="NFT Image"
        borderRadius="md"
        mb={2}
        boxSize="100%"
        objectFit="cover"
      />
      <Heading size="md" mb={2} color={textColor}>
        {projectName}
      </Heading>
      <HStack justify="space-between" mb={2}>
        <Text fontSize="sm" color={textColor}>
          Market Cap: {marketCap}
        </Text>
        <Text fontSize="sm" color={textColor}>
          Replies: {replies}
        </Text>
      </HStack>
      <HStack align="center">
        <Avatar size="xs" name={createdBy} src="" />
        <Text fontSize="xs" color={textColor}>
          Created By {createdBy}
        </Text>
        <Spacer />
        <Link href={projectLink}>
          <Text fontSize="sm" color={textColor} fontWeight="bold">
            Explore →
          </Text>
        </Link>
      </HStack>
    </Box>
  );
};

export default function Launchpad() {
  const inputBg = useColorModeValue("white", "gray.600");
  const textColor = useColorModeValue("gray.700", "gray.300");
  const [searchTerm, setSearchTerm] = useState("");

  const projects = [
    {
      projectName: "ROACH",
      projectLink: "/roach",
      marketCap: "$11.25K",
      replies: 8,
      createdBy: "7cNYup",
      imageSrc: "/images/slider1.jpg",
    },
    {
      projectName: "Another Project",
      projectLink: "/another-project",
      marketCap: "$5.00K",
      replies: 12,
      createdBy: "SomeUser",
      imageSrc: "/images/slider2.jpg",
    },
  ];

  const filteredProjects = projects.filter((project) =>
    project.projectName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box p={4} width="100%" mx="auto">
      <Box textAlign="center" mb={8}>
        <Heading size="2xl" fontWeight="bold" color={textColor}>
          Support new projects and artists!
        </Heading>
        <Text mt={2} fontSize="xl" color={textColor}>
          A direct way to fund projects and get in at the ground floor!
        </Text>
      </Box>

      <Flex justify="space-between" align="center" mb={4}>
        <HStack width="100%">
          <Select width="30%" placeholder="Featured" color={textColor}>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
          <InputGroup size="sm" width="30%">
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="gray.500" />}
            />
            <Input
              type="text"
              placeholder="Search Projects"
              bg={inputBg}
              color={textColor}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </InputGroup>
        </HStack>
       </Flex>

      <Grid templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }} gap={6}>
        {filteredProjects.map((project) => (
          <GridItem key={project.projectName}>
            <LaunchpadProjectCard
              projectName={project.projectName}
              projectLink={project.projectLink}
              marketCap={project.marketCap}
              replies={project.replies}
              createdBy={project.createdBy}
              imageSrc={project.imageSrc}
            />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}