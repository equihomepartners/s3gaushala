import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Badge,
  Divider,
  HStack,
  Flex,
  Circle,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NextImage from 'next/image';

const MotionBox = motion(Box);

export default function About() {
  return (
    <Box>
      <Navbar />
      
      {/* Hero Section */}
      <Box 
        position="relative" 
        height={{ base: "60vh", md: "70vh" }}
        overflow="hidden"
      >
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bgImage="url('/images/BBFarmsArialPics-11.jpg')"
          bgPosition="center"
          bgSize="cover"
          _before={{
            content: '""',
            position: 'absolute',
            inset: 0,
            bg: 'blackAlpha.600',
            backdropFilter: 'blur(1px)',
          }}
        />
        <Container maxW="6xl" height="full" position="relative">
          <VStack
            justify="center"
            align="center"
            height="full"
            spacing={6}
            color="white"
            textAlign="center"
          >
            <Heading 
              as="h1" 
              size="3xl"
              bgGradient="linear(to-r, orange.400, yellow.400)"
              bgClip="text"
              fontWeight="extrabold"
            >
              S3 FOUNDATION
            </Heading>
            <Text fontSize="xl" maxW="3xl" lineHeight="tall">
              Founded in 2005, S3 Foundation exists to uplift society through individual development.
              Through Seva, Sadhana, and Satsang, we create positive change in the world.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Our Story Section */}
      <Box py={20}>
        <Container maxW="6xl">
          <VStack spacing={12} align="stretch">
            <VStack spacing={6} textAlign="center">
              <Badge colorScheme="purple" p={2} fontSize="md">Our Story</Badge>
              <Heading size="xl">The S3 Gaushala Journey</Heading>
              <Text fontSize="lg" color="gray.600" maxW="3xl" mx="auto" lineHeight="tall">
                Born from S3 Foundation, our Gaushala was founded by Purushotam Tandu,
                with the blessings of Himalayan Masters and spiritual luminaries.
                S3 is more than a shelter - it is a spiritually charged space
                where Maha Yagnas and Gau Seva uplift and purify the land.
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
              <Box bg="white" p={6} borderRadius="lg" boxShadow="md">
                <VStack align="start" spacing={4}>
                  <Heading size="md" color="orange.500">Spiritual Heritage</Heading>
                  <Text color="gray.600">
                    Sanctified by revered saints including Somnath Maharshi, 
                    Pandit Shri Rama Sharma, Ganapati Sachidanand Swamy Ji, 
                    and JSS Swamy Ji from Suttur Math, Mysore.
                  </Text>
                </VStack>
              </Box>
              <Box bg="white" p={6} borderRadius="lg" boxShadow="md">
                <VStack align="start" spacing={4}>
                  <Heading size="md" color="purple.500">Sacred Practices</Heading>
                  <Text color="gray.600">
                    Daily rituals include Laksha Chandi Yagna, Pratyangira Chandi Yagna,
                    Maha Mrityunjaya Homas, and Sahasra Gayatri Homas.
                  </Text>
                </VStack>
              </Box>
              <Box bg="white" p={6} borderRadius="lg" boxShadow="md">
                <VStack align="start" spacing={4}>
                  <Heading size="md" color="green.500">Our Mission</Heading>
                  <Text color="gray.600">
                    Home to 200+ Gir cows, roaming freely, untouched by harm,
                    with their well-being as the priority. Most of their milk is for their calves
                    because true service is about giving, not taking.
                  </Text>
                </VStack>
              </Box>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* What is S3 Foundation Section */}
      <Box py={20} bg="gray.50">
        <Container maxW="6xl">
          <VStack spacing={12} align="stretch">
            <Box textAlign="center">
              <Text
                fontSize="lg"
                color="gray.600"
                mb={4}
              >
                S3 Foundation is a nonprofit organization founded by University of Memphis students in 2005
              </Text>
              <Heading
                size="2xl"
                mb={8}
                color="gray.800"
              >
                What is the S3 Foundation?
              </Heading>
              <Text
                fontSize="xl"
                color="gray.700"
                maxW="3xl"
                mx="auto"
                mb={12}
              >
                S3 Foundation exists to uplift society through individual development.
              </Text>
            </Box>

            <Box>
              <Text
                fontSize="xl"
                color="gray.700"
                mb={8}
              >
                As Sanatana Dharma explains:
              </Text>

              <Box position="relative" mb={16}>
                <Flex justify="space-between" align="center" maxW="4xl" mx="auto">
                  <Box
                    bg="purple.500"
                    color="white"
                    p={4}
                    borderRadius="lg"
                    textAlign="center"
                    width="200px"
                  >
                    <Text fontSize="xl" fontWeight="bold">Vyakthi Nirman</Text>
                    <Text fontSize="md">(Individual Growth)</Text>
                  </Box>

                  <Flex align="center" flex="1" maxW="150px" position="relative">
                    <Box
                      position="absolute"
                      top="50%"
                      left={0}
                      right={0}
                      height="2px"
                      bg="gray.300"
                      transform="translateY(-50%)"
                    />
                    <Circle
                      size="32px"
                      bg="gray.300"
                      color="gray.600"
                      position="absolute"
                      left="50%"
                      transform="translateX(-50%)"
                    >
                      →
                    </Circle>
                  </Flex>

                  <Box
                    bg="purple.500"
                    color="white"
                    p={4}
                    borderRadius="lg"
                    textAlign="center"
                    width="200px"
                  >
                    <Text fontSize="xl" fontWeight="bold">Kutumb Nirman</Text>
                    <Text fontSize="md">(Family Growth)</Text>
                  </Box>

                  <Flex align="center" flex="1" maxW="150px" position="relative">
                    <Box
                      position="absolute"
                      top="50%"
                      left={0}
                      right={0}
                      height="2px"
                      bg="gray.300"
                      transform="translateY(-50%)"
                    />
                    <Circle
                      size="32px"
                      bg="gray.300"
                      color="gray.600"
                      position="absolute"
                      left="50%"
                      transform="translateX(-50%)"
                    >
                      →
                    </Circle>
                  </Flex>

                  <Box
                    bg="purple.500"
                    color="white"
                    p={4}
                    borderRadius="lg"
                    textAlign="center"
                    width="200px"
                  >
                    <Text fontSize="xl" fontWeight="bold">Samaj Nirman</Text>
                    <Text fontSize="md">(Societal Growth)</Text>
                  </Box>
                </Flex>
              </Box>

              <Box textAlign="center">
                <Heading size="xl" mb={8} color="gray.800">
                  How do we achieve this?
                </Heading>
                <VStack spacing={4} align="center" maxW="md" mx="auto">
                  <HStack spacing={3}>
                    <Circle size="3" bg="orange.400" />
                    <Text fontSize="lg" color="gray.700">Seva (Volunteering)</Text>
                  </HStack>
                  <HStack spacing={3}>
                    <Circle size="3" bg="orange.400" />
                    <Text fontSize="lg" color="gray.700">Sadhana (Spiritual Practice)</Text>
                  </HStack>
                  <HStack spacing={3}>
                    <Circle size="3" bg="orange.400" />
                    <Text fontSize="lg" color="gray.700">Satsang (Spiritual Discussion)</Text>
                  </HStack>
                </VStack>
              </Box>
            </Box>
          </VStack>
        </Container>
      </Box>

      {/* Mission Section */}
      <Box py={20} bg="gray.50">
        <Container maxW="6xl">
          <VStack spacing={12} align="stretch">
            <VStack spacing={6} textAlign="center">
              <Heading size="xl">The Mission of S3 Foundation</Heading>
              <Text fontSize="lg" color="gray.600" maxW="3xl" mx="auto" lineHeight="tall">
                To emphasize and guide people worldwide into a spiritual synergistic relationship with Body, Mind and Soul.
              </Text>
              <Text fontSize="lg" color="gray.600" maxW="3xl" mx="auto" lineHeight="tall">
                All our activities follow the Sanathana principles of Dharma, Adhibhouthika, Adhyvika and Adhyatmika.
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              <Box position="relative" height="400px">
                <NextImage
                  src="/images/Gaushala_May15_2019-0557.jpg"
                  alt="Mission Image"
                  fill
                  style={{ objectFit: 'cover', borderRadius: '50%' }}
                  quality={90}
                />
                <Box
                  position="absolute"
                  top="-20px"
                  right="-20px"
                  width="80px"
                  height="80px"
                >
                  <svg viewBox="0 0 100 100">
                    <path
                      d="M 50 0 L 60 40 L 100 50 L 60 60 L 50 100 L 40 60 L 0 50 L 40 40 Z"
                      fill="orange.400"
                    />
                  </svg>
                </Box>
              </Box>
              <Box>
                <VStack align="start" spacing={8}>
                  <Heading size="lg">Our Current Projects:</Heading>
                  <VStack align="start" spacing={4}>
                    <HStack spacing={3}>
                      <Box as="span" color="orange.400" fontSize="xl">▶</Box>
                      <Text fontSize="lg" color="gray.700">Gaushala (Cow Sanctuary)</Text>
                    </HStack>
                    <HStack spacing={3}>
                      <Box as="span" color="orange.400" fontSize="xl">▶</Box>
                      <Text fontSize="lg" color="gray.700">Vedic Farming</Text>
                    </HStack>
                    <HStack spacing={3}>
                      <Box as="span" color="orange.400" fontSize="xl">▶</Box>
                      <Text fontSize="lg" color="gray.700">Divya Jananam (Divine Birth)</Text>
                    </HStack>
                  </VStack>
                </VStack>
              </Box>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Why Gauseva Section */}
      <Box py={20}>
        <Container maxW="6xl">
          <VStack spacing={12} align="stretch">
            <VStack spacing={6} textAlign="center">
              <Badge colorScheme="green" p={2} fontSize="md">Why Gauseva?</Badge>
              <Heading size="xl">Cultural and Spiritual Significance</Heading>
              <Text fontSize="lg" color="gray.600" maxW="3xl" mx="auto" lineHeight="tall">
                In Indian culture, the cow (Gau Mata) is revered as a symbol of motherhood,
                compassion, and selfless giving. Ancient scriptures highlight the importance
                of cows for maintaining Dharma and Srishti.
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              <VStack align="start" spacing={6}>
                <Heading size="lg">Preservation of Heritage</Heading>
                <Text fontSize="lg" color="gray.600" lineHeight="tall">
                  Indigenous cow breeds like Gir, Sahiwal, and Tharparkar are not just
                  animals — they are a living part of India's agricultural, spiritual,
                  and medicinal heritage. By running a Gaushala, we preserve and protect
                  ancient breeds that are naturally adapted to the Indian ecosystem.
                </Text>
                <Heading size="lg" mt={6}>Environmental Impact</Heading>
                <Text fontSize="lg" color="gray.600" lineHeight="tall">
                  Cow dung and urine have been used for thousands of years in organic
                  farming, making soil fertile without chemicals. Our Gaushala promotes
                  sustainable, Gau-Adharit Krishi (cow-based natural farming), which is
                  healthier for people and the planet.
                </Text>
              </VStack>
              <Box position="relative" height="600px">
                <NextImage
                  src="/images/Gaushala_May15_2019-0583.jpg"
                  alt="Heritage Preservation"
                  fill
                  style={{ objectFit: 'cover' }}
                  quality={90}
                />
              </Box>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
} 