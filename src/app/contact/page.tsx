"use client";

import {
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Box,
  Flex,
  Image,
  IconButton,
  HStack,
} from "@chakra-ui/react";
import { FaTwitter, FaDiscord } from "react-icons/fa";
import { useState } from "react";

function ContactForm() {
  const [captchaValue, setCaptchaValue] = useState("");
  const num1 = Math.floor(Math.random() * 10);
  const num2 = Math.floor(Math.random() * 10);
  const expectedResult = num1 + num2;

  const handleSubmit = () => {
    if (parseInt(captchaValue) === expectedResult) {
      alert("Form submitted successfully!");
    } else {
      alert("Captcha failed. Please try again.");
    }
  };

  return (
    <Box width={{ base: "100%", md: "50%" }} p={4}>
      <Heading textAlign="center" mb={6}>
        Contact Us
      </Heading>
      <Flex justifyContent="center" gap={4} mb={4}>
        <IconButton
          aria-label="Twitter"
          icon={<FaTwitter />}
          as="a"
          href="#"
          size="lg"
        />
        <IconButton
          aria-label="Discord"
          icon={<FaDiscord />}
          as="a"
          href="#"
          size="lg"
        />
      </Flex>
      <FormControl id="name" isRequired mb={4}>
        <FormLabel>Name</FormLabel>
        <Input type="text" />
      </FormControl>
      <FormControl id="email" isRequired mb={4}>
        <FormLabel>Email address</FormLabel>
        <Input type="email" />
      </FormControl>
      <FormControl id="message" isRequired mb={4}>
        <FormLabel>Message</FormLabel>
        <Textarea rows={4} />
      </FormControl>
      <FormControl id="captcha" isRequired mb={4}>
        <HStack>
          <FormLabel>
            What is {num1} + {num2}?
          </FormLabel>
          <Input
            type="number"
            value={captchaValue}
            onChange={(e) => setCaptchaValue(e.target.value)}
            width="40%"
          />
        </HStack>
      </FormControl>
      <Button mt={4} colorScheme="teal" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Box>
  );
}

export default function Contact() {
  return (
    <Flex
      width="100%"
      height="100vh"
      mx="auto"
      direction={{ base: "column", md: "row" }}
      alignItems="center"
      justifyContent="center"
    maxWidth="80vw"
    >
      <ContactForm />
      <Box
        width={{ base: "100%", md: "50%" }}
        p={4}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Image
          src="/images/slider1.jpg"
          alt="Contact Image"
          borderRadius="md"
          boxSize="400px"
          objectFit="cover"
        />
      </Box>
    </Flex>
  );
}