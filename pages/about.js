import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Badge,
  Divider,
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

      {/* Sacred Heritage Section */}
      <Box py={20} bg="gray.50">
        <Container maxW="6xl">
          <VStack spacing={12} align="stretch">
            <VStack spacing={6} textAlign="center">
              <Badge colorScheme="orange" p={2} fontSize="md">Divine Connection</Badge>
              <Heading size="xl">Gau Mata: The Eternal Nurturer</Heading>
              <Text fontSize="lg" color="gray.600" maxW="3xl" mx="auto" lineHeight="tall">
                Since ancient times, the cow has been at the heart of Sanatana Dharma.
                The Rigveda calls her a gift from the Gods.
                The Atharvaveda reveals she carries 33 crore Devi-Devtas.
                She is worshipped as Kamadhenu, the wish-fulfilling divine mother.
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              <Box>
                <VStack align="start" spacing={6}>
                  <Heading size="lg">Sacred Heritage</Heading>
                  <Text fontSize="lg" color="gray.600" lineHeight="tall">
                    Just as the human spine has 33 vertebrae, she carries 33 crore divine energies, one reflects the other.
                    The Charaka Samhita calls her touch a medicine.
                    The Mahabharata promises her service washes away sins.
                    The Garuda Purana says serving her brings peace and liberation.
                  </Text>
                </VStack>
              </Box>
              <Box position="relative" height="400px">
                <NextImage
                  src="/images/Gaushala_May15_2019-0557.jpg"
                  alt="Divine Connection"
                  fill
                  style={{ objectFit: 'cover' }}
                  quality={90}
                />
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