import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  Circle,
  Flex,
  Image,
  Button,
  HStack,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaLongArrowAltRight } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const GrowthStep = ({ title, description, isLast, direction = 'right' }) => (
  <Box position="relative">
    <Box
      bg="purple.500"
      color="white"
      px={6}
      py={3}
      borderRadius="lg"
      position="relative"
      _hover={{ transform: 'translateY(-2px)', transition: 'all 0.3s ease' }}
    >
      <Text fontWeight="bold">{title}</Text>
      <Text fontSize="sm" opacity={0.9}>({description})</Text>
    </Box>
    {!isLast && direction === 'right' && (
      <Box position="absolute" top="50%" right="-2rem" transform="translateY(-50%)" color="purple.500" fontSize="2xl">
        <FaLongArrowAltRight />
      </Box>
    )}
    {!isLast && direction === 'down' && (
      <Box 
        position="absolute" 
        bottom="-3.5rem" 
        left="50%" 
        transform="translateX(-50%)" 
        color="purple.500" 
        fontSize="2xl"
      >
        <Box transform="rotate(90deg)">
          <FaLongArrowAltRight />
        </Box>
      </Box>
    )}
  </Box>
);

export default function About() {
  return (
    <Box>
      <Navbar />
      <Box>
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
            <Flex
              direction="column"
              justify="center"
              align="center"
              height="full"
              textAlign="center"
              color="white"
            >
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Text
                  fontSize="xl"
                  fontWeight="semibold"
                  color="orange.300"
                  mb={4}
                  textTransform="uppercase"
                  letterSpacing="wider"
                >
                  About Us
                </Text>
                <Heading
                  fontSize={{ base: "4xl", md: "6xl" }}
                  mb={6}
                  textShadow="2px 2px 4px rgba(0,0,0,0.3)"
                >
                  S3 Foundation
                </Heading>
                <Text
                  fontSize={{ base: "xl", md: "2xl" }}
                  maxW="3xl"
                  mx="auto"
                  textShadow="1px 1px 2px rgba(0,0,0,0.3)"
                  fontWeight="medium"
                >
                  A nonprofit organization founded by University of Memphis students in 2005, dedicated to uplifting society through individual development.
                </Text>
              </MotionBox>
            </Flex>
          </Container>
        </Box>

        {/* Main Content */}
        <Box>
          {/* What is S3 Foundation Section */}
          <Box bg="white" py={24}>
            <Container maxW="6xl">
              <Heading
                textAlign="center"
                mb={16}
                size="xl"
                color="purple.700"
                position="relative"
                _after={{
                  content: '""',
                  position: 'absolute',
                  bottom: '-8px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '60px',
                  height: '4px',
                  bg: 'orange.400',
                  borderRadius: '2px',
                }}
              >
                What is the S3 Foundation?
              </Heading>
              
              <Flex 
                justify="space-between" 
                align="center" 
                direction={{ base: "column", lg: "row" }}
                gap={12}
              >
                <Box flex={1}>
                  <Image
                    src="/images/Gaushala_May15_2019-0557.jpg"
                    alt="S3 Foundation"
                    borderRadius="full"
                    boxSize={{ base: "300px", md: "400px" }}
                    objectFit="cover"
                    mx="auto"
                  />
                </Box>
                <Box flex={1} pl={{ base: 0, lg: 12 }}>
                  <Text fontSize="lg" mb={6}>
                    S3 Foundation exists to uplift society through individual development.
                  </Text>
                  <Text fontSize="lg" mb={6}>
                    As Sanatana Dharma explains:
                  </Text>
                  <Box mt={8}>
                    <Flex direction="column" align="center" gap={12}>
                      <Flex gap={16} align="center">
                        <GrowthStep
                          title="Vyakthi Nirman"
                          description="Individual Growth"
                        />
                        <GrowthStep
                          title="Kutumb Nirman"
                          description="Family Growth"
                          direction="down"
                        />
                      </Flex>
                      <GrowthStep
                        title="Samaj Nirman"
                        description="Societal Growth"
                        isLast
                      />
                    </Flex>
                  </Box>
                  
                  <Box mt={8}>
                    <Text fontSize="lg" fontWeight="bold" mb={4}>
                      How do we achieve this?
                    </Text>
                    <Stack spacing={3}>
                      <HStack>
                        <Circle size="8px" bg="orange.400" />
                        <Text>Seva (Volunteering)</Text>
                      </HStack>
                      <HStack>
                        <Circle size="8px" bg="orange.400" />
                        <Text>Sadhana (Spiritual Practice)</Text>
                      </HStack>
                      <HStack>
                        <Circle size="8px" bg="orange.400" />
                        <Text>Satsang (Spiritual Discussion)</Text>
                      </HStack>
                    </Stack>
                  </Box>
                </Box>
              </Flex>
            </Container>
          </Box>

          {/* Mission Section */}
          <Box bg="gray.50" py={24}>
            <Container maxW="6xl">
              <Heading
                textAlign="center"
                mb={16}
                size="xl"
                color="purple.700"
                position="relative"
                _after={{
                  content: '""',
                  position: 'absolute',
                  bottom: '-8px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '60px',
                  height: '4px',
                  bg: 'orange.400',
                  borderRadius: '2px',
                }}
              >
                The Mission of S3 Foundation
              </Heading>
              
              <Flex 
                justify="space-between" 
                align="center"
                direction={{ base: "column", lg: "row" }}
                gap={12}
              >
                <Box flex={1} pr={{ base: 0, lg: 12 }}>
                  <Text fontSize="lg" mb={6}>
                    To emphasize and guide people worldwide into a spiritual synergistic relationship with Body, Mind and Soul.
                  </Text>
                  <Text fontSize="lg">
                    All our activities follow the Sanathana principles of Dharma, Adhibhouthika, Adhyatmika and Adhyatmika.
                  </Text>
                </Box>
                <Box flex={1}>
                  <Image
                    src="/images/Gaushala_May15_2019-0583.jpg"
                    alt="Mission"
                    borderRadius="full"
                    boxSize={{ base: "300px", md: "400px" }}
                    objectFit="cover"
                    mx="auto"
                  />
                </Box>
              </Flex>
            </Container>
          </Box>

          {/* Current Projects Section */}
          <Box bg="white" py={24}>
            <Container maxW="6xl">
              <Heading
                textAlign="center"
                mb={16}
                size="xl"
                color="purple.700"
                position="relative"
                _after={{
                  content: '""',
                  position: 'absolute',
                  bottom: '-8px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '60px',
                  height: '4px',
                  bg: 'orange.400',
                  borderRadius: '2px',
                }}
              >
                Our Current Projects
              </Heading>
              
              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
                {[
                  {
                    title: "Gaushala",
                    description: "Our cow sanctuary where we protect and serve over 200 sacred Gir cows from India",
                    image: "/images/Gaushala_May15_2019-0557.jpg"
                  },
                  {
                    title: "Vedic Farming",
                    description: "Traditional agricultural practices that work in harmony with nature and cosmic energies",
                    image: "/images/BB_PreparedLand2.jpg"
                  },
                  {
                    title: "Divya Jananam",
                    description: "Divine Birth - A program focused on spiritual parenting and child development",
                    image: "/images/Gaushala_May15_2019-0583.jpg"
                  }
                ].map((project, index) => (
                  <MotionBox
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <Box
                      bg="white"
                      p={6}
                      borderRadius="lg"
                      boxShadow="lg"
                      _hover={{
                        transform: 'translateY(-4px)',
                        boxShadow: 'xl',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        borderRadius="lg"
                        mb={4}
                        height="200px"
                        width="100%"
                        objectFit="cover"
                      />
                      <Heading size="md" mb={3} color="purple.700">
                        {project.title}
                      </Heading>
                      <Text color="gray.600">
                        {project.description}
                      </Text>
                      <Button
                        mt={4}
                        colorScheme="purple"
                        variant="outline"
                        size="sm"
                        rightIcon={<FaLongArrowAltRight />}
                      >
                        Learn More
                      </Button>
                    </Box>
                  </MotionBox>
                ))}
              </SimpleGrid>
            </Container>
          </Box>

          {/* Spiritual Significance Section */}
          <Box bg="orange.50" py={24}>
            <Container maxW="6xl">
              <Stack spacing={20}>
                <Box>
                  <Heading
                    textAlign="center"
                    mb={16}
                    size="xl"
                    color="purple.700"
                    position="relative"
                    _after={{
                      content: '""',
                      position: 'absolute',
                      bottom: '-8px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '60px',
                      height: '4px',
                      bg: 'orange.400',
                      borderRadius: '2px',
                    }}
                  >
                    The Sacred Connection
                  </Heading>
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                    <Box>
                      <Stack spacing={6}>
                        <Text fontSize="lg" color="gray.700">
                          In Vedic tradition, the cow is revered as "Gau Mata" (Mother Cow), symbolizing the divine qualities of selfless giving, nurturing, and sustenance.
                        </Text>
                        <Text fontSize="lg" color="gray.700">
                          Just as a mother provides milk for her child, the cow provides for humanity through her Pancha Gavya - five sacred gifts: milk, curd, ghee, urine, and dung, all of which have profound spiritual and practical significance.
                        </Text>
                        <Text fontSize="lg" color="gray.700">
                          By serving and protecting cows, we not only preserve ancient Vedic traditions but also promote environmental sustainability, spiritual growth, and universal compassion.
                        </Text>
                      </Stack>
                    </Box>
                    <Box>
                      <Stack spacing={6}>
                        <Text fontSize="lg" color="gray.700" fontWeight="bold">
                          The Benefits of Cow Protection:
                        </Text>
                        <Stack spacing={4}>
                          <HStack align="start">
                            <Circle size="8px" bg="orange.400" mt={2} />
                            <Text color="gray.700">Promotes Sattvic (pure) living through organic farming and natural products</Text>
                          </HStack>
                          <HStack align="start">
                            <Circle size="8px" bg="orange.400" mt={2} />
                            <Text color="gray.700">Supports sustainable agriculture through natural fertilizers and pest control</Text>
                          </HStack>
                          <HStack align="start">
                            <Circle size="8px" bg="orange.400" mt={2} />
                            <Text color="gray.700">Preserves the sacred Gir cow breed, known for its A2 milk properties</Text>
                          </HStack>
                          <HStack align="start">
                            <Circle size="8px" bg="orange.400" mt={2} />
                            <Text color="gray.700">Creates opportunities for seva (selfless service) and spiritual advancement</Text>
                          </HStack>
                        </Stack>
                      </Stack>
                    </Box>
                  </SimpleGrid>
                </Box>

                <Box>
                  <Heading
                    textAlign="center"
                    mb={16}
                    size="xl"
                    color="purple.700"
                    position="relative"
                    _after={{
                      content: '""',
                      position: 'absolute',
                      bottom: '-8px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '60px',
                      height: '4px',
                      bg: 'orange.400',
                      borderRadius: '2px',
                    }}
                  >
                    Ways to Support Our Mission
                  </Heading>
                  <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
                    <MotionBox
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                    >
                      <Box
                        bg="white"
                        p={8}
                        borderRadius="xl"
                        boxShadow="xl"
                        height="full"
                        position="relative"
                        overflow="hidden"
                        _before={{
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          height: '4px',
                          bgGradient: 'linear(to-r, green.400, green.600)'
                        }}
                      >
                        <Heading size="lg" mb={4} color="green.600">
                          Volunteer
                        </Heading>
                        <Text fontSize="lg" color="gray.600" mb={6}>
                          Offer your time and skills in service of our cows. Volunteering activities include:
                        </Text>
                        <Stack spacing={4} mb={8}>
                          <HStack align="start">
                            <Circle size="8px" bg="green.400" mt={2} />
                            <Text color="gray.600">Daily cow feeding and care</Text>
                          </HStack>
                          <HStack align="start">
                            <Circle size="8px" bg="green.400" mt={2} />
                            <Text color="gray.600">Gaushala maintenance and cleaning</Text>
                          </HStack>
                          <HStack align="start">
                            <Circle size="8px" bg="green.400" mt={2} />
                            <Text color="gray.600">Event organization and support</Text>
                          </HStack>
                          <HStack align="start">
                            <Circle size="8px" bg="green.400" mt={2} />
                            <Text color="gray.600">Educational program assistance</Text>
                          </HStack>
                        </Stack>
                        <Button
                          colorScheme="green"
                          size="lg"
                          width="full"
                          rightIcon={<FaLongArrowAltRight />}
                        >
                          Become a Volunteer
                        </Button>
                      </Box>
                    </MotionBox>

                    <MotionBox
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      <Box
                        bg="white"
                        p={8}
                        borderRadius="xl"
                        boxShadow="xl"
                        height="full"
                        position="relative"
                        overflow="hidden"
                        _before={{
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          height: '4px',
                          bgGradient: 'linear(to-r, orange.400, orange.600)'
                        }}
                      >
                        <Heading size="lg" mb={4} color="orange.600">
                          Donate
                        </Heading>
                        <Text fontSize="lg" color="gray.600" mb={6}>
                          Support our daily operations and special projects through monetary contributions:
                        </Text>
                        <Stack spacing={4} mb={8}>
                          <HStack align="start">
                            <Circle size="8px" bg="orange.400" mt={2} />
                            <Text color="gray.600">Feed and medical supplies</Text>
                          </HStack>
                          <HStack align="start">
                            <Circle size="8px" bg="orange.400" mt={2} />
                            <Text color="gray.600">Infrastructure maintenance</Text>
                          </HStack>
                          <HStack align="start">
                            <Circle size="8px" bg="orange.400" mt={2} />
                            <Text color="gray.600">Educational programs</Text>
                          </HStack>
                          <HStack align="start">
                            <Circle size="8px" bg="orange.400" mt={2} />
                            <Text color="gray.600">Emergency medical care</Text>
                          </HStack>
                        </Stack>
                        <Button
                          colorScheme="orange"
                          size="lg"
                          width="full"
                          rightIcon={<FaLongArrowAltRight />}
                        >
                          Donate Now
                        </Button>
                      </Box>
                    </MotionBox>

                    <MotionBox
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      <Box
                        bg="white"
                        p={8}
                        borderRadius="xl"
                        boxShadow="xl"
                        height="full"
                        position="relative"
                        overflow="hidden"
                        _before={{
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          height: '4px',
                          bgGradient: 'linear(to-r, purple.400, purple.600)'
                        }}
                      >
                        <Heading size="lg" mb={4} color="purple.600">
                          Sponsor a Cow
                        </Heading>
                        <Text fontSize="lg" color="gray.600" mb={6}>
                          Create a personal connection by sponsoring a specific cow:
                        </Text>
                        <Stack spacing={4} mb={8}>
                          <HStack align="start">
                            <Circle size="8px" bg="purple.400" mt={2} />
                            <Text color="gray.600">Name your sponsored cow</Text>
                          </HStack>
                          <HStack align="start">
                            <Circle size="8px" bg="purple.400" mt={2} />
                            <Text color="gray.600">Receive regular updates and photos</Text>
                          </HStack>
                          <HStack align="start">
                            <Circle size="8px" bg="purple.400" mt={2} />
                            <Text color="gray.600">Visit your cow during events</Text>
                          </HStack>
                          <HStack align="start">
                            <Circle size="8px" bg="purple.400" mt={2} />
                            <Text color="gray.600">Support complete care for one cow</Text>
                          </HStack>
                        </Stack>
                        <Button
                          colorScheme="purple"
                          size="lg"
                          width="full"
                          rightIcon={<FaLongArrowAltRight />}
                        >
                          Sponsor Now
                        </Button>
                      </Box>
                    </MotionBox>
                  </SimpleGrid>
                </Box>
              </Stack>
            </Container>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
} 