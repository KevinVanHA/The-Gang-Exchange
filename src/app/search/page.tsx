import { Suspense } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import SearchResults from '@/components/search/SearchResults'; // Import the new client component

// Main Page Component (Server Component) - Wraps the client part in Suspense
export default function SearchPage() {
  return (
    // Provide a fallback UI while the client component loads/suspends
    <Suspense fallback={<Box p={8}><Heading>Loading search results...</Heading></Box>}>
      <SearchResults />
    </Suspense>
  );
}