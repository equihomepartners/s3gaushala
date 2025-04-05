import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
  useColorModeValue,
  Input,
  FormControl,
  FormLabel,
  useToast,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MotionBox = motion(Box);

export default function Shop() {
  const [email, setEmail] = useState('');
  const toast = useToast();
  const bgGradient = useColorModeValue(
    'linear(to-br, orange.50, purple.50)',
    'linear(to-br, gray.900, purple.900)'
  );
  const textColor = useColorModeValue('gray.800', 'white');
  const subTextColor = useColorModeValue('gray.600', 'gray.300');

  const handleNotify = (e) => {
    e.preventDefault();
    if (!email) return;

    // Here you would typically integrate with your email service
    toast({
      title: "You're on the list!",
      description: "We'll notify you when our shop launches.",
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
    setEmail('');
  };

  return (
    <Box minH="100vh" position="relative">
      <Navbar />
      
      {/* Background Animation */}
      <MotionBox
        position="fixed"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bgGradient={bgGradient}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        zIndex={-1}
      />

      {/* Main Content */}
      <Container maxW="4xl" pt={{ base: '32', md: '40' }} pb="20">
        <VStack spacing={8} textAlign="center">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>
            <Heading
              as="h1"
              size="4xl"
              bgGradient="linear(to-r, orange.400, purple.500)"
              bgClip="text"
              letterSpacing="tight"
              lineHeight="1.2"
              mb={4}>
              Coming Soon
            </Heading>
            <Text
              fontSize="2xl"
              color={textColor}
              fontWeight="medium"
              mb={6}>
              Our Sacred Shop
            </Text>
            <Text
              fontSize="lg"
              color={subTextColor}
              maxW="2xl"
              mx="auto"
              lineHeight="tall">
              We're crafting a unique shopping experience featuring authentic products 
              that celebrate our cultural heritage and support our Gaushala's mission. 
              Sign up to be notified when we launch.
            </Text>
          </MotionBox>

          {/* Notification Form */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            w="full"
            maxW="md"
            mt={12}>
            <form onSubmit={handleNotify}>
              <VStack spacing={6}>
                <FormControl>
                  <FormLabel srOnly>Email address</FormLabel>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    size="lg"
                    bg={useColorModeValue('white', 'gray.800')}
                    borderRadius="full"
                    borderWidth={2}
                    _focus={{
                      borderColor: 'purple.500',
                      boxShadow: 'outline',
                    }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>
                <Button
                  type="submit"
                  size="lg"
                  w="full"
                  colorScheme="purple"
                  borderRadius="full"
                  bgGradient="linear(to-r, orange.400, purple.500)"
                  _hover={{
                    bgGradient: "linear(to-r, orange.500, purple.600)",
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg',
                  }}
                  transition="all 0.3s">
                  Notify Me
                </Button>
              </VStack>
            </form>
          </MotionBox>

          {/* Features Preview */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            mt={16}>
            <Text
              fontSize="lg"
              fontWeight="semibold"
              color={textColor}
              mb={4}>
              Coming Soon Features
            </Text>
            <VStack
              spacing={4}
              color={subTextColor}
              fontSize="md">
              <Text>🛍️ Authentic Gaushala Products</Text>
              <Text>🎁 Sacred Items & Gifts</Text>
              <Text>📿 Traditional Artifacts</Text>
              <Text>🌿 Natural Cow Products</Text>
            </VStack>
          </MotionBox>
        </VStack>
      </Container>

      <Footer />
    </Box>
  );
} 