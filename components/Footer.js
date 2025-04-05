import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  HStack,
  VStack,
  Icon,
  Link,
  useColorModeValue,
  Divider,
} from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
      borderTopWidth={1}
      borderStyle={'solid'}
      borderColor={useColorModeValue('gray.200', 'gray.700')}
    >
      <Container maxW="6xl" py={10}>
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          spacing={{ base: 8, md: 12 }}
          justify="space-between"
          align={{ base: 'center', lg: 'flex-start' }}
        >
          {/* Logo and Description */}
          <VStack align={{ base: 'center', lg: 'flex-start' }} spacing={4}>
            <Image
              src="/images/s3-logo.png"
              alt="S3 Gaushala Logo"
              height="60px"
              objectFit="contain"
            />
            <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>
              A sanctuary dedicated to protecting and nurturing over 200 desi cows, the largest such sanctuary in America.
            </Text>
          </VStack>

          {/* Navigation Links */}
          <Stack spacing={4} align={{ base: 'center', lg: 'flex-start' }}>
            <Text fontWeight="600" fontSize="lg" mb={2}>Navigation</Text>
            <Link href="/" color={useColorModeValue('gray.600', 'gray.400')} _hover={{ color: useColorModeValue('orange.500', 'orange.300') }}>Home</Link>
            <Link href="/about" color={useColorModeValue('gray.600', 'gray.400')} _hover={{ color: useColorModeValue('orange.500', 'orange.300') }}>About Us</Link>
            <Link href="/shop" color={useColorModeValue('gray.600', 'gray.400')} _hover={{ color: useColorModeValue('orange.500', 'orange.300') }}>Shop</Link>
            <Link href="/support-us" color={useColorModeValue('gray.600', 'gray.400')} _hover={{ color: useColorModeValue('orange.500', 'orange.300') }}>Support Us</Link>
          </Stack>

          {/* Contact Info */}
          <Stack spacing={4} align={{ base: 'center', lg: 'flex-start' }}>
            <Text fontWeight="600" fontSize="lg" mb={2}>Contact Info</Text>
            <Text>Memphis, TN</Text>
            <Link href="tel:+19012420047">+1 (901) 242-0047</Link>
            <Link href="mailto:gaushalausa@gmail.com">gaushalausa@gmail.com</Link>
            <HStack spacing={4} mt={2}>
              <Link href="https://facebook.com" isExternal>
                <Icon as={FaFacebook} boxSize={6} color="orange.500" />
              </Link>
              <Link href="https://instagram.com" isExternal>
                <Icon as={FaInstagram} boxSize={6} color="orange.500" />
              </Link>
              <Link href="https://twitter.com" isExternal>
                <Icon as={FaTwitter} boxSize={6} color="orange.500" />
              </Link>
              <Link href="mailto:gaushalausa@gmail.com">
                <Icon as={MdEmail} boxSize={6} color="orange.500" />
              </Link>
            </HStack>
          </Stack>
        </Stack>

        <Divider my={8} />

        <Text pt={2} fontSize="sm" textAlign="center">
          © {new Date().getFullYear()} S3 Gaushala. All rights reserved
        </Text>
      </Container>
    </Box>
  );
} 