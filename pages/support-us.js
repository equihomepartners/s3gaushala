import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  Input,
  Textarea,
  Button,
  Image,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  VStack,
  HStack,
  Circle,
  Flex,
  useToast
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaLongArrowAltRight } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MotionBox = motion(Box);

export default function SupportUs() {
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    toast({
      title: "Form submitted.",
      description: "We'll get back to you soon.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Box>
      <Navbar />

      {/* Volunteer Section */}
      <Box position="relative" height={{ base: "60vh", md: "70vh" }} overflow="hidden">
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bgImage="url('/images/volunteer-bg.jpg')"
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
              <Heading
                fontSize={{ base: "4xl", md: "6xl" }}
                mb={6}
                textShadow="2px 2px 4px rgba(0,0,0,0.3)"
              >
                Support Our Mission
              </Heading>
            </MotionBox>
          </Flex>
        </Container>
      </Box>

      {/* Volunteer Section Content */}
      <Box bg="white" py={16}>
        <Container maxW="6xl">
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12}>
            <Box>
              <Heading size="xl" mb={6} color="purple.700">Why Volunteer?</Heading>
              <Text fontSize="lg" mb={6}>
                Our gaushala cannot operate without the dedication and selfless support of volunteers who share our vision.
              </Text>
              <Text fontSize="lg" mb={6}>
                In turn, our Gausevaks are able to do Gau Seva and contribute to the welfare of the cows and overall community as a result.
              </Text>
              <Text fontSize="lg" mb={6}>
                Our Gausevaks help feed the cows, clean the barn and other areas, take care of cows and calves, and much more.
              </Text>
              <Text fontSize="lg">
                Join our growing family of individuals and groups who are willing to build an effective Cow-based ecosystem. Let us join our hands to serve humanity by serving Mother Cow.
              </Text>
            </Box>

            <Box>
              <Heading size="xl" mb={6} color="purple.700">Volunteer Form</Heading>
              <form onSubmit={handleSubmit}>
                <Stack spacing={4}>
                  <FormControl isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input placeholder="First Name" />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Last Name</FormLabel>
                    <Input placeholder="Last Name" />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Gender</FormLabel>
                    <RadioGroup defaultValue="male">
                      <HStack spacing={6}>
                        <Radio value="male">Male</Radio>
                        <Radio value="female">Female</Radio>
                      </HStack>
                    </RadioGroup>
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Date of Birth</FormLabel>
                    <Input type="date" />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Address</FormLabel>
                    <Textarea placeholder="Address" />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Phone Number</FormLabel>
                    <Input placeholder="Phone Number" type="tel" />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input placeholder="Email" type="email" />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Availability (Daily, Weekly, Monthly)</FormLabel>
                    <Input placeholder="Availability" />
                  </FormControl>
                  <Button colorScheme="green" size="lg" type="submit">
                    Send Message
                  </Button>
                </Stack>
              </form>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Donate Section */}
      <Box bg="gray.50" py={16}>
        <Container maxW="6xl">
          <Box textAlign="center" mb={12}>
            <Heading size="xl" mb={6} color="purple.700">Donations</Heading>
            <Text fontSize="lg" fontStyle="italic" color="gray.600" maxW="2xl" mx="auto">
              "A thirsty bird can drink his fill from a river without causing the slightest change in the level of the stream. In fact, the river becomes even richer, having offered this Seva (Selfless service) to the bird. In the same way, generous donations to the charity will only increase your true wealth".
            </Text>
            <Text fontSize="md" color="purple.600" mt={2}>- Kabir Das (A great saint of India)</Text>
          </Box>

          <Box bg="orange.50" p={8} borderRadius="xl" mb={8}>
            <Text fontSize="lg" textAlign="center" mb={4}>
              S3 Gaushala is part of the S3 Foundation, a registered 501(c)3 non-profit.
            </Text>
            <Text fontSize="lg" textAlign="center" fontWeight="bold">
              Our tax ID is 47-2455221
            </Text>
          </Box>

          <Stack spacing={6}>
            <Box>
              <Text fontSize="lg" fontWeight="bold" mb={2}>To make a donation via PayPal (or credit/debit card):</Text>
              <Button colorScheme="purple" size="lg">
                Donate Now
              </Button>
            </Box>

            <Box>
              <Text fontSize="lg" fontWeight="bold" mb={2}>To donate via check, please write your check out to S3 Foundation</Text>
              <Text fontSize="lg">You can mail any checks to:</Text>
              <Box bg="purple.100" p={4} borderRadius="md" mt={2}>
                <Text>7945 Deadfall Rd , Arlington TN-38002</Text>
              </Box>
            </Box>

            <Box>
              <Text fontSize="lg" fontWeight="bold" mb={2}>To donate via Zelle, please use the following email:</Text>
              <Box bg="purple.100" p={4} borderRadius="md">
                <Text>s3foundation@gmail.com</Text>
              </Box>
            </Box>

            <Box>
              <Text fontSize="lg" fontWeight="bold" mb={2}>To donate via Venmo, use the following handle:</Text>
              <Box bg="purple.100" p={4} borderRadius="md">
                <Text>@S3_Gaushala</Text>
              </Box>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Sponsor a Cow Section */}
      <Box bg="white" py={16}>
        <Container maxW="6xl">
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12}>
            <Box>
              <Heading size="xl" mb={6} color="purple.700">Sponsor a Cow</Heading>
              <Text fontSize="lg" mb={6}>
                Create a personal connection with our sacred cows through sponsorship. Your support helps provide:
              </Text>
              <Stack spacing={4}>
                <HStack align="start">
                  <Circle size="8px" bg="purple.400" mt={2} />
                  <Text>Daily feed and care</Text>
                </HStack>
                <HStack align="start">
                  <Circle size="8px" bg="purple.400" mt={2} />
                  <Text>Medical attention when needed</Text>
                </HStack>
                <HStack align="start">
                  <Circle size="8px" bg="purple.400" mt={2} />
                  <Text>Shelter and maintenance</Text>
                </HStack>
                <HStack align="start">
                  <Circle size="8px" bg="purple.400" mt={2} />
                  <Text>Special care for elderly cows</Text>
                </HStack>
              </Stack>
              <Text fontSize="lg" mt={6}>
                As a sponsor, you'll receive regular updates about your cow, including photos and their well-being status.
              </Text>
            </Box>

            <Box>
              <Heading size="xl" mb={6} color="purple.700">Sponsorship Form</Heading>
              <form onSubmit={handleSubmit}>
                <Stack spacing={4}>
                  <FormControl isRequired>
                    <FormLabel>Full Name</FormLabel>
                    <Input placeholder="Full Name" />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input placeholder="Email" type="email" />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Phone Number</FormLabel>
                    <Input placeholder="Phone Number" type="tel" />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Address</FormLabel>
                    <Textarea placeholder="Address" />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Sponsorship Duration</FormLabel>
                    <RadioGroup defaultValue="monthly">
                      <Stack spacing={4}>
                        <Radio value="monthly">Monthly ($101)</Radio>
                        <Radio value="quarterly">Quarterly ($251)</Radio>
                        <Radio value="yearly">Yearly ($1001)</Radio>
                      </Stack>
                    </RadioGroup>
                  </FormControl>
                  <FormControl>
                    <FormLabel>Additional Message</FormLabel>
                    <Textarea placeholder="Any specific preferences or messages..." />
                  </FormControl>
                  <Button colorScheme="purple" size="lg" type="submit">
                    Submit Sponsorship Request
                  </Button>
                </Stack>
              </form>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
} 