import {
  Box,
  Container,
  Heading,
  Text,
  Input,
  Button,
  Checkbox,
  VStack,
  Image,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const Newsletter = () => {
  return (
    <Box py={20} position="relative" overflow="hidden">
      {/* Newsletter Section */}
      <Container maxW="6xl" position="relative" zIndex={1}>
        <Box
          position="relative"
          borderRadius="3xl"
          overflow="hidden"
          boxShadow="2xl"
          _before={{
            content: '""',
            position: 'absolute',
            inset: '0',
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4))',
            zIndex: 1
          }}
        >
          {/* Background Image */}
          <Image
            src="/images/newsletter-background.jpg"
            alt="Newsletter background"
            position="absolute"
            top={0}
            left={0}
            w="full"
            h="full"
            objectFit="cover"
            filter="brightness(0.9)"
          />

          {/* Content */}
          <Box
            position="relative"
            zIndex={2}
            p={{ base: 8, md: 16 }}
          >
            <VStack
              spacing={6}
              maxW="2xl"
              mx="auto"
              textAlign="center"
            >
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Heading
                  color="white"
                  size="2xl"
                  mb={4}
                  textShadow="2px 2px 4px rgba(0,0,0,0.4)"
                  fontFamily="Montserrat"
                  letterSpacing="wide"
                >
                  Stay Connected with Our Sacred Mission
                </Heading>
                <Text
                  color="white"
                  fontSize="lg"
                  mb={8}
                  textShadow="1px 1px 2px rgba(0,0,0,0.4)"
                  opacity={0.9}
                >
                  Join our newsletter to receive updates about our Gaushala, upcoming events, and spiritual insights
                </Text>
              </MotionBox>

              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
                w="full"
                maxW="md"
              >
                <VStack spacing={4} w="full">
                  <Input
                    placeholder="Enter your name"
                    size="lg"
                    bg="whiteAlpha.900"
                    border="none"
                    _placeholder={{ color: 'gray.500' }}
                    _hover={{ bg: 'white' }}
                    _focus={{ bg: 'white', boxShadow: 'outline' }}
                    borderRadius="full"
                  />
                  <Input
                    placeholder="Enter your email"
                    size="lg"
                    bg="whiteAlpha.900"
                    border="none"
                    _placeholder={{ color: 'gray.500' }}
                    _hover={{ bg: 'white' }}
                    _focus={{ bg: 'white', boxShadow: 'outline' }}
                    borderRadius="full"
                  />
                  <Box w="full" textAlign="left">
                    <Checkbox
                      colorScheme="orange"
                      spacing={3}
                    >
                      <Text color="white" fontSize="sm">
                        I agree to the terms and conditions
                      </Text>
                    </Checkbox>
                  </Box>
                  <Button
                    size="lg"
                    colorScheme="orange"
                    borderRadius="full"
                    px={8}
                    w="full"
                    bgGradient="linear(to-r, orange.400, yellow.400)"
                    _hover={{
                      bgGradient: "linear(to-r, orange.500, yellow.500)",
                      transform: 'translateY(-2px)',
                      boxShadow: 'lg',
                    }}
                    _active={{
                      transform: 'translateY(0)',
                    }}
                  >
                    Subscribe
                  </Button>
                </VStack>
              </MotionBox>
            </VStack>
          </Box>

          {/* Corner Decorations */}
          {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map((corner) => (
            <Box
              key={corner}
              position="absolute"
              width="100px"
              height="100px"
              {...{
                'top-left': { top: 0, left: 0 },
                'top-right': { top: 0, right: 0 },
                'bottom-left': { bottom: 0, left: 0 },
                'bottom-right': { bottom: 0, right: 0 },
              }[corner]}
              zIndex={4}
              pointerEvents="none"
              background={`radial-gradient(circle at ${corner.includes('right') ? '0%' : '100%'} ${corner.includes('bottom') ? '0%' : '100%'}, 
                rgba(255,215,0,0.3) 0%,
                transparent 70%)`}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Newsletter; 