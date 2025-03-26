"use client"; // Mark this as a Client Component

import { useSearchParams } from 'next/navigation';
import { Box, Heading, Text, SimpleGrid, VStack, Image, Link as ChakraLink } from '@chakra-ui/react';
import { NFT_CONTRACTS } from '@/consts/nft_contracts'; // Import the collections data
import Link from 'next/link'; // Import NextLink for navigation

// Client Component to handle search logic and display results
export default function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q');

  // Filter collections based on the query (case-insensitive)
  const filteredCollections = query
    ? NFT_CONTRACTS.filter(contract =>
        contract.title && contract.title.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <Box p={8}>
      <Heading mb={4}>Search Results</Heading>
      {query ? (
        <>
          <Text mb={6}>Showing results for: "{query}"</Text>

          {/* Display Collection Results */}
          <Heading size="lg" mb={4}>Matching Collections</Heading>
          {filteredCollections.length > 0 ? (
            <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={6}>
              {filteredCollections.map((item) => (
                <Link
                  key={item.address}
                  href={
                    item.chain
                      ? `/collection/${item.chain.id.toString()}/${item.address}`
                      : `/collection/undefined/${item.address}` // Consider how to handle undefined chain
                  }
                  passHref
                >
                  <ChakraLink _hover={{ textDecoration: 'none' }}>
                    <VStack
                      borderWidth="1px"
                      borderRadius="lg"
                      overflow="hidden"
                      p={4}
                      align="stretch"
                      spacing={3}
                      _hover={{ shadow: 'md', transform: 'translateY(-2px)', transition: 'all 0.2s' }}
                      h="100%" // Ensure cards have equal height
                    >
                      <Image
                        src={item.thumbnailUrl || '/images/placeholder.png'} // Add a placeholder image if needed
                        alt={`${item.title || 'Collection'} thumbnail`} // Fallback for alt text
                        objectFit="cover"
                        height="200px" // Fixed height for images
                        borderRadius="md"
                      />
                      <Text fontWeight="semibold" textAlign="center" noOfLines={2}>
                        {item.title || 'Untitled Collection'} {/* Fallback for title display */}
                      </Text>
                    </VStack>
                  </ChakraLink>
                </Link>
              ))}
            </SimpleGrid>
          ) : (
            <Text>No matching collections found.</Text>
          )}

          {/* Placeholder for Individual NFT Results */}
          <Heading size="lg" mt={10} mb={4}>Matching Individual NFTs</Heading>
          <Text fontStyle="italic">
            (Individual NFT search not yet implemented. Please specify the data source.)
          </Text>
        </>
      ) : (
        <Text>Please enter a search term in the navigation bar.</Text>
      )}
    </Box>
  );
}