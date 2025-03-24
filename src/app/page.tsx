"use client";
import { NFT_CONTRACTS } from "@/consts/nft_contracts";
import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  Button,
  VStack,
  HStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const images = [
    "/images/slider1.jpg",
    "/images/slider2.jpg", 
    "/images/slider3.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(handleNextImage, 5000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
    exit: { opacity: 0, scale: 1.1, transition: { duration: 0.7 } }
  };

  const responsiveWidth = useBreakpointValue({ 
    base: "100%", 
    md: "80%", 
    lg: "70%" 
  });

  return (
    <Flex direction="column" align="center" width="full">
      <Box position="relative" width={responsiveWidth} height={["250px", "400px", "500px"]} overflow="hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%'
            }}
          >
            <Image
              src={images[currentImageIndex]}
              alt={`Slider image ${currentImageIndex + 1}`}
              objectFit="cover"
              width="full"
              height="full"
              borderRadius="xl"
              boxShadow="2xl"
            />
          </motion.div>
        </AnimatePresence>

        <HStack 
          position="absolute" 
          bottom="4" 
          left="50%" 
          transform="translateX(-50%)"
          spacing="2"
        >
          {images.map((_, index) => (
            <Box 
              key={index} 
              width="10px" 
              height="10px" 
              borderRadius="full" 
              bg={index === currentImageIndex ? "white" : "whiteAlpha.500"}
              cursor="pointer"
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </HStack>

        <Button 
          position="absolute" 
          left="4" 
          top="50%" 
          transform="translateY(-50%)"
          onClick={handlePrevImage}
          variant="ghost"
          colorScheme="white"
        >
          ←
        </Button>
        <Button 
          position="absolute" 
          right="4" 
          top="50%" 
          transform="translateY(-50%)"
          onClick={handleNextImage}
          variant="ghost"
          colorScheme="white"
        >
          →
        </Button>
      </Box>

      <VStack width="full" mt="12" spacing="8">
        <Heading textAlign="center" mt="40px">
          Our Battle Arena Collections
        </Heading>
        <Flex
          direction="row"
          width="full"
          wrap="wrap"
          justifyContent="center"
          gap={["4", "6", "8"]}
          px={["4", "8", "12"]}
        >
          {NFT_CONTRACTS.map((item) => (
            <Link
              key={item.address}
              href={
                item.chain
                  ? `/collection/${item.chain.id.toString()}/${item.address}`
                  : `/collection/undefined/${item.address}`
              }
              _hover={{ transform: "scale(1.05)", transition: "transform 0.3s" }}
            >
              <VStack 
                w={["150px", "250px", "300px"]} 
                h={["250px", "350px", "400px"]} 
                p="4"
                borderRadius="xl"
                boxShadow="md"
                bg="purple"
                position="relative"
                overflow="hidden"
              >
                <Image 
                  src={item.thumbnailUrl} 
                  objectFit="cover"
                  width="full"
                  height="70%"
                  borderRadius="lg"
                />
                <Text 
                  fontSize={["sm", "md", "large"]} 
                  mt="10px" 
                  textAlign="center"
                  fontWeight="semibold"
                >
                  {item.title}
                </Text>
              </VStack>
            </Link>
          ))}
        </Flex>
      </VStack>
    </Flex>
  );
}