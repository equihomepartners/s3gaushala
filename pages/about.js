import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  Icon,
  Badge,
  Flex,
  Image,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaPrayingHands, FaUsers, FaLeaf, FaHorse, FaCheckCircle } from 'react-icons/fa';
import { GiOm } from 'react-icons/gi';
import Navbar from '../components/Navbar';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

export default function About() {
  return (
    <Box>
      <Navbar />
      <Box mt="70px">
        {/* Hero Section */}
        <Box
          bg="purple.50"
          py={20}
          position="relative"
          overflow="hidden">
          <Container maxW="7xl">
            <Stack spacing={8} textAlign="center">
              <Badge
                colorScheme="purple"
                fontSize="md"
                p={2}
                borderRadius="full"
                alignSelf="center">
                Est. 2005
              </Badge>
              <Heading
                size="2xl"
                bgGradient="linear(to-r, purple.400, purple.600)"
                bgClip="text">
                S3 Foundation
              </Heading>
              <Text fontSize="xl" color="gray.600" maxW="3xl" mx="auto">
                A nonprofit organization founded by University of Memphis students in 2005, dedicated to uplifting society through individual development.
              </Text>
            </Stack>
          </Container>
        </Box>

        {/* Mission Section */}
        <Box py={20}>
          <Container maxW="7xl">
            <Stack spacing={12}>
              <Box textAlign="center">
                <Heading
                  mb={6}
                  size="xl"
                  bgGradient="linear(to-r, purple.400, purple.600)"
                  bgClip="text">
                  Our Mission
                </Heading>
                <Text fontSize="lg" color="gray.600" maxW="3xl" mx="auto">
                  To emphasize and guide people worldwide into a spiritual synergistic relationship with Body, Mind and Soul.
                </Text>
              </Box>

              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                <MotionBox
                  whileHover={{ y: -4 }}
                  bg="white"
                  p={8}
                  borderRadius="xl"
                  boxShadow="xl">
                  <Stack spacing={4} align="center">
                    <Icon as={FaPrayingHands} boxSize={10} color="purple.500" />
                    <Heading size="md" color="purple.600">Vyakthi Nirman</Heading>
                    <Text color="gray.600" textAlign="center">Individual Growth</Text>
                  </Stack>
                </MotionBox>

                <MotionBox
                  whileHover={{ y: -4 }}
                  bg="white"
                  p={8}
                  borderRadius="xl"
                  boxShadow="xl">
                  <Stack spacing={4} align="center">
                    <Icon as={FaUsers} boxSize={10} color="purple.500" />
                    <Heading size="md" color="purple.600">Kutumb Nirman</Heading>
                    <Text color="gray.600" textAlign="center">Family Growth</Text>
                  </Stack>
                </MotionBox>

                <MotionBox
                  whileHover={{ y: -4 }}
                  bg="white"
                  p={8}
                  borderRadius="xl"
                  boxShadow="xl">
                  <Stack spacing={4} align="center">
                    <Icon as={FaLeaf} boxSize={10} color="purple.500" />
                    <Heading size="md" color="purple.600">Samaj Nirman</Heading>
                    <Text color="gray.600" textAlign="center">Societal Growth</Text>
                  </Stack>
                </MotionBox>
              </SimpleGrid>
            </Stack>
          </Container>
        </Box>

        {/* Principles Section */}
        <Box bg="purple.50" py={20}>
          <Container maxW="7xl">
            <Stack spacing={12}>
              <Box textAlign="center">
                <Heading
                  mb={6}
                  size="xl"
                  bgGradient="linear(to-r, purple.400, purple.600)"
                  bgClip="text">
                  Our Principles
                </Heading>
                <Text fontSize="lg" color="gray.600" maxW="3xl" mx="auto">
                  All our activities follow the Sanathana principles of:
                </Text>
              </Box>

              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                <MotionBox
                  whileHover={{ y: -4 }}
                  bg="white"
                  p={8}
                  borderRadius="xl"
                  boxShadow="xl">
                  <Stack spacing={4}>
                    <Icon as={GiOm} boxSize={10} color="purple.500" />
                    <Heading size="md" color="purple.600">Dharma</Heading>
                    <Text color="gray.600">
                      The eternal law that governs all existence and maintains cosmic order
                    </Text>
                  </Stack>
                </MotionBox>

                <MotionBox
                  whileHover={{ y: -4 }}
                  bg="white"
                  p={8}
                  borderRadius="xl"
                  boxShadow="xl">
                  <Stack spacing={4}>
                    <Icon as={FaPrayingHands} boxSize={10} color="purple.500" />
                    <Heading size="md" color="purple.600">Adhibhauthika</Heading>
                    <Text color="gray.600">
                      The physical and material aspects of life
                    </Text>
                  </Stack>
                </MotionBox>

                <MotionBox
                  whileHover={{ y: -4 }}
                  bg="white"
                  p={8}
                  borderRadius="xl"
                  boxShadow="xl">
                  <Stack spacing={4}>
                    <Icon as={FaLeaf} boxSize={10} color="purple.500" />
                    <Heading size="md" color="purple.600">Adhyatmika</Heading>
                    <Text color="gray.600">
                      The spiritual dimension and inner transformation
                    </Text>
                  </Stack>
                </MotionBox>
              </SimpleGrid>
            </Stack>
          </Container>
        </Box>

        {/* How We Achieve Section */}
        <Box py={20}>
          <Container maxW="7xl">
            <Stack spacing={12}>
              <Box textAlign="center">
                <Heading
                  mb={6}
                  size="xl"
                  bgGradient="linear(to-r, purple.400, purple.600)"
                  bgClip="text">
                  How We Achieve Our Mission
                </Heading>
              </Box>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <Box>
                  <List spacing={6}>
                    <ListItem>
                      <Stack spacing={4}>
                        <Flex align="center">
                          <ListIcon as={FaCheckCircle} color="purple.500" boxSize={6} />
                          <Heading size="md" color="purple.600">Seva (Volunteering)</Heading>
                        </Flex>
                        <Text color="gray.600" pl={10}>
                          Selfless service to society and all living beings, especially through cow protection and care
                        </Text>
                      </Stack>
                    </ListItem>
                    <ListItem>
                      <Stack spacing={4}>
                        <Flex align="center">
                          <ListIcon as={FaCheckCircle} color="purple.500" boxSize={6} />
                          <Heading size="md" color="purple.600">Sadhana (Spiritual Practice)</Heading>
                        </Flex>
                        <Text color="gray.600" pl={10}>
                          Regular spiritual practices that help in personal growth and inner transformation
                        </Text>
                      </Stack>
                    </ListItem>
                    <ListItem>
                      <Stack spacing={4}>
                        <Flex align="center">
                          <ListIcon as={FaCheckCircle} color="purple.500" boxSize={6} />
                          <Heading size="md" color="purple.600">Satsang (Spiritual Discussion)</Heading>
                        </Flex>
                        <Text color="gray.600" pl={10}>
                          Regular gatherings for spiritual discourse and community building
                        </Text>
                      </Stack>
                    </ListItem>
                  </List>
                </Box>
                <Box>
                  <Image
                    src="/images/hero-cow.jpg"
                    alt="Spiritual Practice"
                    borderRadius="xl"
                    boxShadow="xl"
                  />
                </Box>
              </SimpleGrid>
            </Stack>
          </Container>
        </Box>

        {/* Current Projects Section */}
        <Box bg="purple.50" py={20}>
          <Container maxW="7xl">
            <Stack spacing={12}>
              <Box textAlign="center">
                <Heading
                  mb={6}
                  size="xl"
                  bgGradient="linear(to-r, purple.400, purple.600)"
                  bgClip="text">
                  Our Current Projects
                </Heading>
              </Box>

              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                <MotionBox
                  whileHover={{ y: -4 }}
                  bg="white"
                  p={8}
                  borderRadius="xl"
                  boxShadow="xl">
                  <Stack spacing={4}>
                    <Icon as={FaHorse} boxSize={10} color="purple.500" />
                    <Heading size="md" color="purple.600">Gaushala</Heading>
                    <Text color="gray.600">
                      Our cow sanctuary where we protect and serve sacred cows with love and devotion
                    </Text>
                  </Stack>
                </MotionBox>

                <MotionBox
                  whileHover={{ y: -4 }}
                  bg="white"
                  p={8}
                  borderRadius="xl"
                  boxShadow="xl">
                  <Stack spacing={4}>
                    <Icon as={FaLeaf} boxSize={10} color="purple.500" />
                    <Heading size="md" color="purple.600">Vedic Farming</Heading>
                    <Text color="gray.600">
                      Traditional agricultural practices that work in harmony with nature
                    </Text>
                  </Stack>
                </MotionBox>

                <MotionBox
                  whileHover={{ y: -4 }}
                  bg="white"
                  p={8}
                  borderRadius="xl"
                  boxShadow="xl">
                  <Stack spacing={4}>
                    <Icon as={FaPrayingHands} boxSize={10} color="purple.500" />
                    <Heading size="md" color="purple.600">Divya Jananam</Heading>
                    <Text color="gray.600">
                      Divine Birth - A program focused on spiritual parenting and child development
                    </Text>
                  </Stack>
                </MotionBox>
              </SimpleGrid>
            </Stack>
          </Container>
        </Box>
      </Box>
    </Box>
  );
} 