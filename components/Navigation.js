import { Box, Flex, Link, Stack } from '@chakra-ui/react';
import NextLink from 'next/link';

export default function Navigation({ items }) {
  return (
    <Box as="nav" bg="white" boxShadow="sm" position="sticky" top={0} zIndex={10}>
      <Flex maxW="container.xl" mx="auto" px={4} py={4} align="center" justify="space-between">
        <Link as={NextLink} href="/" fontSize="xl" fontWeight="bold">
          S3 Gaushala
        </Link>
        <Stack direction="row" spacing={8}>
          {items.map((item) => (
            <Link
              key={item.href}
              as={NextLink}
              href={item.href}
              color="gray.600"
              _hover={{ color: 'gray.900' }}
            >
              {item.text}
            </Link>
          ))}
        </Stack>
      </Flex>
    </Box>
  );
} 