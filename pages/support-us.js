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
  useToast,
  Link,
  Icon
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaLongArrowAltRight, FaArrowDown, FaHandHoldingHeart, FaDonate, FaPaw } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from 'react';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

// Transition variants for animations
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

// Mock Stripe checkout URL - in production, this would be your actual Stripe endpoint
const MOCK_STRIPE_URL = 'https://checkout.stripe.com/mock-checkout';

export default function SupportUs() {
  const toast = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleVolunteerSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Volunteer application submitted!",
        description: "We'll contact you soon to discuss volunteer opportunities.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      
      // Reset form
      e.target.reset();
    } catch (error) {
      toast({
        title: "Error submitting form",
        description: "Please try again later.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSponsorSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Sponsorship request received!",
        description: "We'll reach out to you with more details about your sponsored cow.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      
      // Reset form
      e.target.reset();
    } catch (error) {
      toast({
        title: "Error submitting form",
        description: "Please try again later.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDonateClick = () => {
    // In production, this would create a Stripe checkout session and redirect
    window.open(MOCK_STRIPE_URL, '_blank');
    
    toast({
      title: "Redirecting to payment...",
      description: "You'll be taken to our secure payment page.",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box>
      <Navbar />

      {/* Hero Section */}
      <Box 
        position="relative" 
        height="100vh" 
        width="100%" 
        overflow="hidden"
        bgImage="url('/images/cta-page.jpeg')"
        bgPosition="center"
        bgSize="cover"
        bgRepeat="no-repeat"
        _before={{
          content: '""',
          position: 'absolute',
          inset: 0,
          bg: 'blackAlpha.300',
        }}
      >
        <Container maxW="100%" height="full" position="relative" p={0}>
          <Flex
            direction="column"
            justify="flex-end"
            align="center"
            height="full"
            textAlign="center"
            color="white"
            pb={28}
          >
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              mb={8}
            >
              <Heading 
                size="xl" 
                textShadow="0 0 10px rgba(0,0,0,0.5)"
                mb={4}
              >
                Ready to Make a Difference?
              </Heading>
              <Text fontSize="lg" maxW="md" mx="auto" mb={6} textShadow="0 0 5px rgba(0,0,0,0.5)">
                Join us in our mission to protect and preserve these sacred beings
              </Text>
              <Button
                as="a"
                href="#volunteer"
                size="lg"
                colorScheme="orange"
                variant="solid"
                _hover={{ transform: 'translateY(-5px)', boxShadow: 'xl' }}
                transition="all 0.3s ease"
                fontWeight="bold"
                rightIcon={<FaArrowDown />}
              >
                Get Involved
              </Button>
            </MotionBox>
          </Flex>
        </Container>
        <Box
          position="absolute"
          bottom={0}
          left={0}
          right={0}
          height="120px"
          bgGradient="linear(to-b, transparent, rgba(255,255,255,0.1) 20%, white)"
          zIndex={2}
        />
      </Box>

      {/* Section Navigation */}
      <Box 
        bg="white" 
        py={6}
        position="relative"
        zIndex={10}
        boxShadow="0 -10px 30px rgba(0,0,0,0.1)"
      >
        <Container maxW="6xl">
          <MotionFlex
            as={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            justify="center"
            wrap="wrap"
            gap={6}
          >
            <MotionBox variants={fadeInUp}>
              <Button
                as="a"
                href="#volunteer"
                size="md"
                colorScheme="green"
                variant="ghost"
                leftIcon={<FaHandHoldingHeart />}
                _hover={{ bg: 'green.50', transform: 'translateY(-2px)' }}
                transition="all 0.3s ease"
              >
                Volunteer
              </Button>
            </MotionBox>
            <MotionBox variants={fadeInUp}>
              <Button
                as="a"
                href="#donate"
                size="md"
                colorScheme="orange" 
                variant="ghost"
                leftIcon={<FaDonate />}
                _hover={{ bg: 'orange.50', transform: 'translateY(-2px)' }}
                transition="all 0.3s ease"
              >
                Donate
              </Button>
            </MotionBox>
            <MotionBox variants={fadeInUp}>
              <Button
                as="a"
                href="#sponsor"
                size="md"
                colorScheme="purple"
                variant="ghost"
                leftIcon={<FaPaw />}
                _hover={{ bg: 'purple.50', transform: 'translateY(-2px)' }}
                transition="all 0.3s ease"
              >
                Sponsor
              </Button>
            </MotionBox>
          </MotionFlex>
        </Container>
      </Box>

      {/* Volunteer Section */}
      <Box 
        id="volunteer" 
        bg="white" 
        py={20}
        position="relative"
        scrollMarginTop="100px"
      >
        <Container maxW="6xl">
          <MotionBox
            as={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px 0px -100px 0px" }}
            variants={staggerContainer}
          >
            <MotionBox variants={fadeInUp} mb={12} textAlign="center">
              <Icon as={FaHandHoldingHeart} color="green.500" boxSize={12} mb={4} />
              <Heading size="xl" mb={6} color="green.700">Why Volunteer?</Heading>
            </MotionBox>
            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12}>
              <MotionBox variants={fadeInUp}>
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
              </MotionBox>

              <MotionBox variants={fadeInUp}>
                <Box bg="white" p={8} borderRadius="xl" boxShadow="lg">
                  <Heading size="lg" mb={6} color="green.600">Volunteer Form</Heading>
                  <form onSubmit={handleVolunteerSubmit}>
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
                      <Button 
                        colorScheme="green" 
                        size="lg" 
                        type="submit"
                        isLoading={isSubmitting}
                        loadingText="Submitting"
                        w="full"
                        mt={4}
                      >
                        Send Message
                      </Button>
                    </Stack>
                  </form>
                </Box>
              </MotionBox>
            </SimpleGrid>
          </MotionBox>
        </Container>
        <Box
          position="absolute"
          bottom="-50px"
          left={0}
          right={0}
          height="100px" 
          bgGradient="linear(to-b, white, gray.50)"
          clipPath="polygon(0 0, 100% 0, 100% 40%, 0 100%)"
          zIndex={1}
        />
      </Box>

      {/* Donate Section */}
      <Box 
        id="donate" 
        bg="gray.50" 
        py={20}
        position="relative"
        scrollMarginTop="100px"
      >
        <Container maxW="6xl">
          <MotionBox
            as={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px 0px -100px 0px" }}
            variants={staggerContainer}
          >
            <MotionBox variants={fadeInUp} textAlign="center" mb={12}>
              <Icon as={FaDonate} color="orange.500" boxSize={12} mb={4} />
              <Heading size="xl" mb={6} color="orange.700">Donations</Heading>
              <Text fontSize="lg" fontStyle="italic" color="gray.600" maxW="2xl" mx="auto">
                "A thirsty bird can drink his fill from a river without causing the slightest change in the level of the stream. In fact, the river becomes even richer, having offered this Seva (Selfless service) to the bird. In the same way, generous donations to the charity will only increase your true wealth".
              </Text>
              <Text fontSize="md" color="orange.600" mt={2}>- Kabir Das (A great saint of India)</Text>
            </MotionBox>

            <MotionBox variants={fadeInUp}>
              <Box bg="orange.50" p={8} borderRadius="xl" mb={8} boxShadow="md">
                <Text fontSize="lg" textAlign="center" mb={4}>
                  S3 Gaushala is part of the S3 Foundation, a registered 501(c)3 non-profit.
                </Text>
                <Text fontSize="lg" textAlign="center" fontWeight="bold">
                  Our tax ID is 47-2455221
                </Text>
              </Box>
            </MotionBox>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              <MotionBox variants={fadeInUp}>
                <Stack spacing={6}>
                  <Box bg="white" p={6} borderRadius="lg" boxShadow="md" _hover={{ transform: 'translateY(-5px)', transition: 'all 0.3s ease' }}>
                    <Text fontSize="lg" fontWeight="bold" mb={4}>To make a donation via PayPal (or credit/debit card):</Text>
                    <Button 
                      colorScheme="orange" 
                      size="lg"
                      w="full"
                      onClick={handleDonateClick}
                      rightIcon={<FaLongArrowAltRight />}>
                      Donate Now
                    </Button>
                  </Box>
                </Stack>
              </MotionBox>
              
              <MotionBox variants={fadeInUp}>
                <Stack spacing={6}>
                  <Box bg="white" p={6} borderRadius="lg" boxShadow="md" _hover={{ transform: 'translateY(-5px)', transition: 'all 0.3s ease' }}>
                    <Text fontSize="lg" fontWeight="bold" mb={2}>To donate via check, please write your check out to S3 Foundation</Text>
                    <Text fontSize="lg">You can mail any checks to:</Text>
                    <Box bg="orange.50" p={4} borderRadius="md" mt={2}>
                      <Text>7945 Deadfall Rd , Arlington TN-38002</Text>
                    </Box>
                  </Box>
                
                  <Box bg="white" p={6} borderRadius="lg" boxShadow="md" _hover={{ transform: 'translateY(-5px)', transition: 'all 0.3s ease' }}>
                    <Text fontSize="lg" fontWeight="bold" mb={2}>Other payment methods:</Text>
                    <SimpleGrid columns={2} spacing={4}>
                      <Box bg="orange.50" p={4} borderRadius="md">
                        <Text fontWeight="bold">Zelle</Text>
                        <Text>s3foundation@gmail.com</Text>
                      </Box>
                      <Box bg="orange.50" p={4} borderRadius="md">
                        <Text fontWeight="bold">Venmo</Text>
                        <Text>@S3_Gaushala</Text>
                      </Box>
                    </SimpleGrid>
                  </Box>
                </Stack>
              </MotionBox>
            </SimpleGrid>
          </MotionBox>
        </Container>
        <Box
          position="absolute"
          bottom="-50px"
          left={0}
          right={0}
          height="100px"
          bgGradient="linear(to-b, gray.50, white)"
          clipPath="polygon(0 0, 100% 0, 0 100%)"
          zIndex={1}
        />
      </Box>

      {/* Sponsor a Cow Section */}
      <Box 
        id="sponsor" 
        bg="white" 
        py={20}
        position="relative"
        scrollMarginTop="100px"
      >
        <Container maxW="6xl">
          <MotionBox
            as={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px 0px -100px 0px" }}
            variants={staggerContainer}
          >
            <MotionBox variants={fadeInUp} textAlign="center" mb={12}>
              <Icon as={FaPaw} color="purple.500" boxSize={12} mb={4} />
              <Heading size="xl" mb={6} color="purple.700">Sponsor a Cow</Heading>
            </MotionBox>
            
            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12}>
              <MotionBox variants={fadeInUp}>
                <Text fontSize="lg" mb={6}>
                  Create a personal connection with our sacred cows through sponsorship. Your support helps provide:
                </Text>
                <Stack spacing={4}>
                  <HStack align="start" _hover={{ transform: 'translateX(10px)', transition: 'all 0.3s ease' }}>
                    <Circle size="8px" bg="purple.400" mt={2} />
                    <Text>Daily feed and care</Text>
                  </HStack>
                  <HStack align="start" _hover={{ transform: 'translateX(10px)', transition: 'all 0.3s ease' }}>
                    <Circle size="8px" bg="purple.400" mt={2} />
                    <Text>Medical attention when needed</Text>
                  </HStack>
                  <HStack align="start" _hover={{ transform: 'translateX(10px)', transition: 'all 0.3s ease' }}>
                    <Circle size="8px" bg="purple.400" mt={2} />
                    <Text>Shelter and maintenance</Text>
                  </HStack>
                  <HStack align="start" _hover={{ transform: 'translateX(10px)', transition: 'all 0.3s ease' }}>
                    <Circle size="8px" bg="purple.400" mt={2} />
                    <Text>Special care for elderly cows</Text>
                  </HStack>
                </Stack>
                <Text fontSize="lg" mt={6}>
                  As a sponsor, you'll receive regular updates about your cow, including photos and their well-being status.
                </Text>
              </MotionBox>

              <MotionBox variants={fadeInUp}>
                <Box bg="white" p={8} borderRadius="xl" boxShadow="lg">
                  <Heading size="lg" mb={6} color="purple.600">Sponsorship Form</Heading>
                  <form onSubmit={handleSponsorSubmit}>
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
                      <Button 
                        colorScheme="purple" 
                        size="lg" 
                        type="submit"
                        isLoading={isSubmitting}
                        loadingText="Submitting"
                        w="full"
                        mt={4}
                      >
                        Submit Sponsorship Request
                      </Button>
                    </Stack>
                  </form>
                </Box>
              </MotionBox>
            </SimpleGrid>
          </MotionBox>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
} 