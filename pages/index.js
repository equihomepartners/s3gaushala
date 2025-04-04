import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  SimpleGrid,
  Stack,
  useColorModeValue,
  Image,
  Icon,
  Flex,
  VStack,
  HStack,
  Badge,
  useDisclosure,
  SlideFade,
  ScaleFade,
  Divider,
} from '@chakra-ui/react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FaHeart, FaHandHoldingHeart, FaUsers, FaLeaf, FaHorse, FaCalendarAlt, FaMoneyBillWave, FaHandsHelping, FaPrayingHands, FaMapMarkerAlt, FaPhone, FaEnvelope, FaArrowRight } from 'react-icons/fa';
import { GiCow } from 'react-icons/gi';
import { getPageContent } from '../utils/content';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { useState, useEffect, useRef } from 'react';

// Update the motion components
const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionImage = motion(Image);

// Helper function to get icon for stats
const getStatIcon = (index) => {
  const icons = [FaHorse, FaPrayingHands, FaHandsHelping];
  return icons[index];
};

// Helper function to get icon for features
const getFeatureIcon = (index) => {
  const icons = [FaPrayingHands, GiCow, FaHandsHelping];
  return icons[index];
};

// Update the BackgroundShapes component for more visible gradients
const BackgroundShapes = () => (
  <>
    <MotionBox
      position="fixed"
      top="-20%"
      left="-10%"
      width="120vw"
      height="120vh"
      bgGradient="radial(circle at 30% 20%, orange.100 0%, transparent 70%)"
      opacity={0.8}
      zIndex={0}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.8, 0.9, 0.8],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    <MotionBox
      position="fixed"
      bottom="-20%"
      right="-10%"
      width="120vw"
      height="120vh"
      bgGradient="radial(circle at 70% 80%, purple.100 0%, transparent 70%)"
      opacity={0.8}
      zIndex={0}
      animate={{
        scale: [1, 1.3, 1],
        opacity: [0.8, 0.9, 0.8],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    <MotionBox
      position="fixed"
      top="30%"
      left="50%"
      width="100vw"
      height="100vh"
      bgGradient="radial(circle at center, green.50 0%, transparent 70%)"
      opacity={0.7}
      zIndex={0}
      animate={{
        scale: [1, 1.4, 1],
        opacity: [0.7, 0.8, 0.7],
      }}
      transition={{
        duration: 30,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  </>
);

// Update the main Box component's background
export default function Home({ content }) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef(null);
  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.200');
  const headingColor = useColorModeValue('gray.800', 'white');
  const accentColor = useColorModeValue('purple.500', 'purple.300');
  const greenAccent = useColorModeValue('green.500', 'green.300');
  const missionRef = useRef(null);
  const isMissionInView = useInView(missionRef, { 
    once: false, 
    amount: 0.2,
    margin: "-100px 0px 0px 0px"
  });

  // Enhanced video event handlers with detailed logging
  const handleVideoPlay = () => {
    console.log("Video started playing successfully");
    setIsVideoPlaying(true);
    setVideoError(false);
  };

  const handleVideoError = (error) => {
    console.error("Video error details:", {
      error: error,
      videoElement: videoRef.current,
      networkState: videoRef.current?.networkState,
      readyState: videoRef.current?.readyState,
      error: videoRef.current?.error,
      src: videoRef.current?.currentSrc || videoRef.current?.src
    });
    setIsVideoPlaying(false);
    setVideoError(true);
  };

  const handleVideoLoadedData = () => {
    console.log("Video data loaded successfully", {
      src: videoRef.current?.currentSrc || videoRef.current?.src,
      duration: videoRef.current?.duration,
      readyState: videoRef.current?.readyState
    });
    setIsVideoLoaded(true);
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video play error:", error);
        setVideoError(true);
      });
    }
  };

  const handleVideoLoadStart = () => {
    console.log("Video load started", {
      src: videoRef.current?.currentSrc || videoRef.current?.src
    });
    setVideoError(false);
  };

  const handleVideoWaiting = () => {
    console.log("Video is waiting for data");
  };

  useEffect(() => {
    if (videoRef.current) {
      console.log("Video element mounted", {
        src: videoRef.current?.currentSrc || videoRef.current?.src,
        networkState: videoRef.current?.networkState,
        readyState: videoRef.current?.readyState
      });
    }
  }, []);

  return (
        <Box
          position="relative"
      overflow="hidden"
      bg="gray.50"
      minH="100vh"
    >
      <Box
        position="fixed"
        inset={0}
        zIndex={0}
        opacity={0.06}
        bg="linear-gradient(to bottom right, white, gray.100)"
        pointerEvents="none"
      />
      <BackgroundShapes />
      <Navbar />

      {/* Hero Section with AnimatePresence */}
      <AnimatePresence>
        {!isMissionInView && (
          <MotionBox
            as="section"
            position="fixed"
            height="100vh"
            width="100%"
            top={0}
            left={0}
            zIndex={1}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Video Background */}
            <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
              zIndex={0}
              overflow="hidden"
              bg="black"
            >
              {!videoError && (
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  bottom={0}
                  zIndex={0}
                  overflow="hidden"
                  bg="black"
                >
            <Image
                    src="/images/hero-placeholder.jpg"
                    alt="Hero background"
                    position="absolute"
                    top={0}
                    left={0}
                    width="100%"
                    height="100%"
                    objectFit="cover"
                    filter="brightness(0.8)"
                    style={{ opacity: isVideoPlaying ? 0 : 1 }}
                    transition="opacity 0.5s ease"
                  />
                  <video
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'brightness(0.8)',
                      opacity: isVideoPlaying ? 1 : 0,
                      transition: 'opacity 0.5s ease',
                    }}
                    poster="/images/hero-placeholder.jpg"
                    onPlay={handleVideoPlay}
                    onError={handleVideoError}
                    onLoadedData={handleVideoLoadedData}
                    onLoadStart={handleVideoLoadStart}
                    onWaiting={handleVideoWaiting}
                  >
                    <source 
                      src="/videos/BGVideo3.mp4" 
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </Box>
              )}

              {/* Show fallback image when video fails or hasn't started playing */}
              {(videoError || !isVideoPlaying) && (
                <Image
                  src="/images/M7D_1989.jpg"
              alt="Hero background"
              objectFit="cover"
              w="100%"
              h="100%"
                  filter="brightness(0.8)"
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  bottom={0}
                />
              )}
            </Box>

            {/* Hero Content */}
            <Container maxW="7xl" h="100%" position="relative" zIndex={2}>
            <Flex
              direction="column"
              align="center"
              justify="center"
              h="100%"
              color="white"
              textAlign="center"
              pt={20}>
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}>
                <Badge
                    colorScheme="primary"
                  fontSize="lg"
                  mb={6}
                  p={2}
                    borderRadius="full"
                    bg="primary.500"
                    color="white">
                  Welcome to
                </Badge>
                <Heading
                  as="h1"
                  size="4xl"
                  mb={6}
                  textShadow="2px 2px 4px rgba(0,0,0,0.4)"
                    color="orange.400"
                    fontWeight="extrabold"
                    letterSpacing="tight"
                    fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}>
                    S3 Gaushala
                </Heading>
                <Text
                    fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
                    mb={4}
                    textShadow="2px 2px 4px rgba(0,0,0,0.4)"
                    fontWeight="extrabold"
                    color="white"
                    letterSpacing="wide">
                    The Home of Desi Cows in America
                </Text>
                <Text
                    fontSize={{ base: "lg", md: "xl" }}
                  maxW="2xl"
                  mx="auto"
                  mb={12}
                    textShadow="2px 2px 4px rgba(0,0,0,0.4)"
                    color="white"
                    fontWeight="bold"
                    letterSpacing="0.5px">
                    A sanctuary dedicated to protecting and nurturing over 200 desi cows, the largest such sanctuary in America
                </Text>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  spacing={{ base: 4, sm: 6 }}
                  justify="center">
                  <Button
                    size="lg"
                      colorScheme="orange"
                    px={8}
                    fontSize="md"
                    leftIcon={<Icon as={FaHeart} />}
                    _hover={{
                      transform: 'translateY(-2px)',
                        boxShadow: 'xl',
                      }}
                      transition="all 0.2s">
                    Donate Now
                  </Button>
                  <Button
                    size="lg"
                      colorScheme="purple"
                    px={8}
                    fontSize="md"
                    leftIcon={<Icon as={FaHandHoldingHeart} />}
                    _hover={{
                      transform: 'translateY(-2px)',
                        boxShadow: 'xl',
                      }}
                      transition="all 0.2s">
                    Sponsor a Cow
                  </Button>
                  <Button
                    size="lg"
                      bg="green.500"
                      color="white"
                    px={8}
                    fontSize="md"
                    leftIcon={<Icon as={FaUsers} />}
                    _hover={{
                      transform: 'translateY(-2px)',
                        boxShadow: 'xl',
                        bg: 'green.600',
                      }}
                      _active={{
                        bg: 'green.700',
                      }}
                      transition="all 0.2s">
                    Volunteer
                  </Button>
                </Stack>
              </MotionBox>
            </Flex>
          </Container>
          </MotionBox>
        )}
      </AnimatePresence>

      {/* Mission Section with Features */}
            <MotionBox
        ref={missionRef}
        py={20} 
        position="relative"
        marginTop="100vh"
        bg="gray.50"
              initial={{ opacity: 0 }}
        animate={{ 
          opacity: isMissionInView ? 1 : 0,
          y: isMissionInView ? 0 : 100
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut"
        }}
        zIndex={2}
      >
        <MissionSectionBackground />
        <Container maxW="7xl" position="relative" zIndex={1}>
          <Stack spacing={12} align="center">
            <Box textAlign="center" maxW="3xl" mx="auto">
              <Badge
                colorScheme="orange"
                fontSize="md"
                mb={4}
                p={3}
                borderRadius="full"
                bg="orange.500"
                color="white"
                boxShadow="lg">
                Our Mission
              </Badge>
              <Heading
                size="2xl"
                mb={6}
                bgGradient="linear(to-r, orange.400, purple.500)"
                bgClip="text"
                letterSpacing="tight"
                lineHeight="shorter">
                Preserving Sacred Traditions
              </Heading>
              <Text
                fontSize="xl"
                color="gray.600"
                lineHeight="tall"
                mb={8}>
                A sanctuary rooted in the timeless Hindu tradition of cow protection and veneration, operating as a wing of the 501(c)3 non-profit S3 Foundation. We are home to over 200 pure desi GIR breed cows brought directly from India, making us the largest such sanctuary in America.
              </Text>
              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
                {[
                  {
                    title: "Largest Sanctuary",
                    description: "Home to over 200 pure desi GIR breed cows, directly from India",
                    color: "orange.500"
                  },
                  {
                    title: "First in America",
                    description: "The first traditional Gaushala of its kind in the United States",
                    color: "purple.500"
                  },
                  {
                    title: "5+ Years of Service",
                    description: "Serving the community in Memphis, TN since 2018",
                    color: "green.500"
                  }
                ].map((stat, index) => (
                  <MotionBox
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}>
                    <Box
                      bg="white"
                      p={6}
                      borderRadius="xl"
                      boxShadow="md"
                      textAlign="center"
                      _hover={{
                        transform: 'translateY(-4px)',
                        boxShadow: 'lg',
                        transition: 'all 0.3s ease',
                      }}>
                      <Heading
                        size="md"
                        mb={3}
                        color={stat.color}>
                        {stat.title}
                      </Heading>
                      <Text
                        fontSize="md"
                        color="gray.600">
                        {stat.description}
                      </Text>
                    </Box>
                  </MotionBox>
                ))}
              </SimpleGrid>
        </Box>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="full">
              {[
                {
                  title: "Sacred Heritage",
                  description: "Preserving the divine connection through authentic care of pure desi GIR breed cows from India",
                  image: "/images/sacred-heritage.jpg",
                  color: "orange.500"
                },
                {
                  title: "Spiritual Sanctuary",
                  description: "First traditional Gaushala in America maintaining authentic Vedic practices",
                  image: "/images/spiritual-sanctuary.jpg",
                  color: "purple.500"
                },
                {
                  title: "Community Service",
                  description: "Five years of dedicated seva in Memphis, TN, fostering spiritual growth and harmony",
                  image: "/images/community-service.jpg",
                  color: "green.500"
                }
              ].map((feature, index) => (
            <MotionBox
                  key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 }}>
                      <Box
                        bg="white"
                    borderRadius="2xl"
                    overflow="hidden"
                    boxShadow="xl"
                        position="relative"
                        _hover={{
                          transform: 'translateY(-4px)',
                      boxShadow: '2xl',
                      transition: 'all 0.3s ease',
                    }}>
                    <Box position="relative" height="240px" overflow="hidden">
                      <MotionImage
                        src={feature.image}
                        alt={feature.title}
                        objectFit="cover"
                        w="100%"
                        h="100%"
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      />
                        <Box
                          position="absolute"
                        inset={0}
                        bg="blackAlpha.400"
                        transition="all 0.3s"
                        opacity={0}
                        _groupHover={{ opacity: 1 }}
                      />
                        </Box>
                    <Box p={8}>
                          <Heading
                            size="md"
                        mb={4}
                        color={feature.color}>
                            {feature.title}
                          </Heading>
                          <Text
                            color="gray.600"
                        fontSize="lg">
                            {feature.description}
                          </Text>
                    </Box>
                      </Box>
                    </MotionBox>
                  ))}
                </SimpleGrid>
              </Stack>
          </Container>
      </MotionBox>

      {/* Remaining sections container */}
      <Box 
        position="relative" 
        zIndex={3}
        bg="gray.50"
      >
        {/* Daily Care Section */}
        <Box 
          py={20} 
          bg="gray.50" 
          position="relative" 
          overflow="hidden"
          _before={{
            content: '""',
            position: 'absolute',
            top: '-200px',
            left: 0,
            right: 0,
            height: '200px',
            bgGradient: 'linear(to-b, white, gray.50)',
            opacity: 0.8,
            zIndex: 1,
            pointerEvents: 'none'
          }}
          _after={{
            content: '""',
            position: 'absolute',
            bottom: '-200px',
            left: 0,
            right: 0,
            height: '200px',
            bgGradient: 'linear(to-t, white, gray.50)',
            opacity: 0.8,
            zIndex: 1,
            pointerEvents: 'none'
          }}>
          <DailyCareSectionBackground />
          <Container maxW="7xl" position="relative" zIndex={1}>
            <Stack spacing={12}>
              {/* Nourish to Flourish Section */}
              <Box textAlign="center" mb={12}>
                <Text
                  color="green.600"
                  fontFamily="Montserrat"
                  fontWeight="semibold"
                  fontSize="xl"
                  mb={3}
                  letterSpacing="wide"
                  textTransform="uppercase">
                  ॐ Vasanta Panchami
                </Text>
                <Heading
                  size="2xl"
                  mb={4}
                  fontFamily="Montserrat"
                  bgGradient="linear(to-r, orange.400, yellow.500)"
                  bgClip="text"
                  letterSpacing="tight"
                  fontWeight="extrabold"
                  _hover={{
                    bgGradient: "linear(to-r, yellow.500, orange.400)",
                  }}>
                  S3 Gaushala Launched
                </Heading>
                <MotionBox
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}>
                  <Heading
                    size="3xl"
                    fontFamily="Montserrat"
                    bgGradient="linear(to-br, orange.500, yellow.400)"
                    bgClip="text"
                    fontWeight="black"
                    letterSpacing="widest"
                    textTransform="uppercase"
                    lineHeight="1.2"
                    _hover={{
                      bgGradient: "linear(to-bl, yellow.400, orange.500)",
                    }}
                    sx={{
                      '@media (min-width: 48em)': {
                        fontSize: '5xl',
                      }
                    }}>
                    Nourish to Flourish
                  </Heading>
                </MotionBox>
        </Box>

              {/* Feed Types Grid */}
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={12} position="relative">
                {/* Hay Bales */}
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
                  position="relative"
                  zIndex={1}>
                  <Box
                    position="relative"
                    height="500px"
                    overflow="hidden"
                    borderRadius="2xl"
                    boxShadow="xl"
                    transition="all 0.5s ease"
                    _hover={{
                      transform: "scale(1.02)",
                      boxShadow: "2xl",
                    }}>
                    <MotionImage
                      src="/images/hay-feed.jpg"
                      alt="Hay Bales"
                      objectFit="cover"
                      w="100%"
                      h="100%"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    {/* Content Container */}
                    <Box
                      position="absolute"
                      inset={0}
                      background="linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.2) 100%)"
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                      justifyContent="flex-end"
                      p={8}
                      transition="all 0.3s ease"
                      _hover={{
                        background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.3) 100%)"
                      }}>
                  <Heading
                        color="white"
                    size="2xl"
                        textAlign="center"
                        textShadow="2px 2px 4px rgba(0,0,0,0.5)"
                        mb={4}
                        letterSpacing="wide">
                        Hay Bales
                  </Heading>
                  <Text
                        color="white"
                        fontSize="lg"
                        textAlign="center"
                        maxW="md"
                        textShadow="1px 1px 2px rgba(0,0,0,0.5)"
                        opacity={0.9}>
                        Premium quality hay bales sourced from local farms, providing essential fiber and nutrients
                  </Text>
                </Box>
                  </Box>
                </MotionBox>

                {/* Pellet Feed */}
                    <MotionBox
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  position="relative"
                  zIndex={1}>
                      <Box
                    position="relative"
                    height="500px"
                        overflow="hidden"
                    borderRadius="2xl"
                        boxShadow="xl"
                    transition="all 0.5s ease"
                        _hover={{
                      transform: "scale(1.02)",
                      boxShadow: "2xl",
                    }}>
                    <MotionImage
                      src="/images/pellet-feed.jpg"
                      alt="Pellet Feed"
                          objectFit="cover"
                          w="100%"
                      h="100%"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    {/* Content Container */}
                    <Box
                      position="absolute"
                      inset={0}
                      background="linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.2) 100%)"
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                      justifyContent="flex-end"
                      p={8}
                      transition="all 0.3s ease"
                      _hover={{
                        background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.3) 100%)"
                      }}>
                          <Heading
                        color="white"
                        size="2xl"
                        textAlign="center"
                        textShadow="2px 2px 4px rgba(0,0,0,0.5)"
                            mb={4}
                        letterSpacing="wide">
                        Pellet Feed
                          </Heading>
                          <Text
                        color="white"
                            fontSize="lg"
                        textAlign="center"
                        maxW="md"
                        textShadow="1px 1px 2px rgba(0,0,0,0.5)"
                        opacity={0.9}>
                        Nutritionally balanced pellet feed formulated specifically for our desi cows
                          </Text>
                        </Box>
                      </Box>
                    </MotionBox>
                </SimpleGrid>

              {/* Sponsorship Call to Action */}
              <Box
                bg="white"
                p={12}
                borderRadius="2xl"
                boxShadow="xl"
                textAlign="center"
                position="relative"
                overflow="hidden"
                    _hover={{
                  boxShadow: "2xl",
                  transform: "translateY(-4px)",
                  transition: "all 0.3s ease"
                }}>
            <MotionBox
                  position="absolute"
                  top="-50%"
                  left="-20%"
                  width="140%"
                  height="200%"
                  bgGradient="linear(to-br, orange.50, purple.50)"
                  opacity={0.4}
                  zIndex={0}
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 60,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%"
                  }}
                />
                <Stack spacing={8} position="relative" zIndex={1}>
                  <VStack spacing={4}>
                  <Heading
                    size="2xl"
                      bgGradient="linear(to-r, orange.500, yellow.500)"
                      bgClip="text"
                      letterSpacing="tight"
                      lineHeight="1.2">
                      Feed Our Entire Gir Cow Family
                  </Heading>
                  <Text
                    fontSize="xl"
                    color="gray.600"
                      maxW="3xl"
                      mx="auto"
                      lineHeight="tall">
                      It takes $351 to feed our entire family of 200+ Gir cows for one day. Make a meaningful impact by sponsoring a full day of nourishment.
                  </Text>
                      <Text
                        fontSize="lg"
                      color="gray.500"
                      fontStyle="italic">
                      Honor your special occasions by providing a day of care for our sacred cows
                      </Text>
                  </VStack>
                    <Button
                      size="lg"
                    colorScheme="orange"
                    px={12}
                    py={8}
                    fontSize="xl"
                    borderRadius="full"
                    bgGradient="linear(to-r, orange.500, yellow.500)"
                      _hover={{
                      bgGradient: "linear(to-r, orange.600, yellow.600)",
                        transform: 'translateY(-2px)',
                      boxShadow: 'xl',
                      }}>
                    SPONSOR A DAY OF NOURISHMENT
                    </Button>
                  </Stack>
                </Box>

              {/* Support Options Grid */}
              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} position="relative">
                {[
                  {
                    title: "Support Daily Feed",
                    description: "Providing the feed for 200+ cows is possible due to our grassroots community support on a sustained monthly basis. Please consider donating to support all our cows!",
                    image: "/images/daily-feed.jpg",
                    borderRadius: "63% 37% 52% 48% / 38% 62% 38% 62%",
                    cta: "Donate Now",
                    ctaColor: "orange"
                  },
                  {
                    title: "Sponsor Your Cow",
                    description: "Your commitment to adopt a cow means you are providing the necessary care for a cow. You will also be able to name the cow that you adopt. Please contact us for more information!",
                    image: "/images/sponsor-cow.jpg",
                    borderRadius: "42% 58% 37% 63% / 58% 42% 58% 42%",
                    cta: "Contact Us",
                    ctaColor: "purple"
                  },
                  {
                    title: "Meet & Feed Cows",
                    description: "Come visit the Gaushala to feed the cows and enjoy an experience like no other while connecting to the environment and giving back to the community.",
                    image: "/images/meet-greet.jpg",
                    borderRadius: "69% 31% 43% 57% / 37% 63% 37% 63%",
                    cta: "Visit Us",
                    ctaColor: "green"
                  }
                ].map((option, index) => (
                  <MotionBox
                    key={index}
                    role="group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}>
                    <Box
                  position="relative"
                      height="400px"
                  overflow="hidden"
                      cursor="pointer"
                      borderRadius={option.borderRadius}
                      transition="all 0.5s ease"
                      _hover={{
                        transform: "scale(1.02)",
                      }}>
                  <MotionImage
                        src={option.image}
                        alt={option.title}
                    objectFit="cover"
                        w="100%"
                        h="100%"
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      />
                      {/* Content Container */}
                  <Box
                    position="absolute"
                        inset={0}
                        background="linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.2) 100%)"
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        justifyContent="flex-end"
                        p={8}
                        pb={12}
                        transition="all 0.3s ease"
                        _groupHover={{
                          background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.4) 100%)"
                        }}>
                        <Heading
                          size="xl"
                          color="white"
                          textAlign="center"
                          textShadow="2px 2px 4px rgba(0,0,0,0.8)"
                          mb={4}
                          letterSpacing="wide"
                          lineHeight="1.2">
                          {option.title}
                        </Heading>
                        <Text
                          fontSize="lg"
                          color="white"
                          textAlign="center"
                          opacity={0}
                          transform="translateY(20px)"
                          transition="all 0.3s ease"
                          textShadow="1px 1px 2px rgba(0,0,0,0.8)"
                          _groupHover={{
                            opacity: 1,
                            transform: "translateY(0)"
                          }}>
                          {option.description}
                        </Text>
                        <Button
                          colorScheme={option.ctaColor}
                          size="lg"
                          mt={6}
                          opacity={0}
                          transform="translateY(20px)"
                          transition="all 0.3s ease"
                          _groupHover={{
                            opacity: 1,
                            transform: "translateY(0)"
                          }}>
                          {option.cta}
                        </Button>
                </Box>
                    </Box>
            </MotionBox>
                ))}
              </SimpleGrid>
            </Stack>
          </Container>
        </Box>

        {/* Blog Section */}
        <Box 
          py={20} 
          position="relative" 
          overflow="hidden"
          _before={{
            content: '""',
            position: 'absolute',
            top: '-200px',
            left: 0,
            right: 0,
            height: '200px',
            bgGradient: 'linear(to-b, gray.50, transparent)',
            opacity: 0.9,
            zIndex: 1,
            pointerEvents: 'none'
          }}>
          <BlogSectionBackground />
          <Container maxW="7xl" position="relative" zIndex={1}>
            <Stack spacing={16}>
                <Box textAlign="center">
                  <Badge
                  colorScheme="primary"
                    fontSize="md"
                    mb={4}
                  p={3}
                  borderRadius="full"
                  bg="primary.500"
                  color="white"
                  boxShadow="lg">
                    Latest Updates
                  </Badge>
                  <Heading
                    mb={6}
                    size="2xl"
                  bgGradient="linear(to-r, primary.500, accent.500)"
                  bgClip="text"
                  letterSpacing="tight">
                  Spiritual Insights & Stories
                  </Heading>
                  <Text
                    fontSize="xl"
                    color="gray.600"
                    maxW="3xl"
                  mx="auto"
                  lineHeight="tall">
                  Discover the profound wisdom and heartwarming stories from our sacred sanctuary
                  </Text>
                </Box>

              <SimpleGrid
                columns={{ base: 1, md: 2, lg: 3 }}
                spacing={10}
                px={{ base: 4, lg: 0 }}>
                    {[
                      {
                        title: "Why Gau Seva?",
                        description: "Many people wonder why do we have to serve Gau Mata. Discover the profound spiritual significance of cow protection in Hindu tradition.",
                    image: "/images/Gaushala_May15_2019-0567.jpg",
                    category: "Spirituality"
                      },
                      {
                        title: "Cow – The Worshipable Animal",
                        description: "Learn about the divine qualities of cows and why they hold such a sacred position in Vedic culture.",
                    image: "/images/Gaushala_May15_2019-0516.jpg",
                    category: "Culture"
                      },
                      {
                        title: "Sadhbuddhi: Path to Happiness",
                        description: "Understanding how serving cows helps develop divine qualities and leads to spiritual advancement.",
                    image: "/images/Gaushala_May15_2019-0554.jpg",
                    category: "Wisdom"
                      }
                    ].map((post, index) => (
                  <MotionBox
                        key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    whileHover={{ y: -8 }}>
                    <Box
                        bg="white"
                      borderRadius="3xl"
                        overflow="hidden"
                      boxShadow="xl"
                      height="full"
                      position="relative">
                      <Box position="relative" height="250px" overflow="hidden">
                        <MotionImage
                          src={post.image}
                          alt={post.title}
                          objectFit="cover"
                          w="full"
                          h="full"
                          initial={{ scale: 1 }}
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        />
                        <Box
                          position="absolute"
                          top={4}
                          left={4}
                          bg="blackAlpha.700"
                          color="white"
                          px={3}
                          py={1}
                          borderRadius="full"
                          fontSize="sm"
                          backdropFilter="blur(8px)">
                          {post.category}
                        </Box>
                      </Box>
                      <Box p={8}>
                          <Heading
                          size="lg"
                          mb={4}
                          color="gray.800"
                          lineHeight="tight">
                            {post.title}
                          </Heading>
                          <Text
                            color="gray.600"
                          mb={6}
                          lineHeight="tall">
                            {post.description}
                          </Text>
                        <MotionBox
                          display="inline-block"
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.2 }}>
                          <Button
                            variant="link"
                            colorScheme="primary"
                            rightIcon={
                              <Box
                                as={FaArrowRight}
                                transform="rotate(-45deg)"
                              />
                            }
                            fontSize="lg">
                            Read More
                          </Button>
                        </MotionBox>
                        </Box>
                      </Box>
                  </MotionBox>
                ))}
              </SimpleGrid>

                <Box textAlign="center">
                <MotionBox
                  display="inline-block"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}>
                  <Button
                    as="a"
                    href="/blog"
                    size="lg"
                    colorScheme="primary"
                    variant="outline"
                    rounded="full"
                    px={12}
                    py={8}
                    fontSize="xl"
                    boxShadow="lg"
                    _hover={{
                      transform: 'translateY(-2px)',
                      boxShadow: 'xl',
                    }}>
                    Explore All Stories
                  </Button>
                </MotionBox>
                </Box>
              </Stack>
          </Container>
        </Box>

        {/* Newsletter Section */}
        <Newsletter />

        {/* Footer */}
        <Footer />
      </Box>
    </Box>
  );
}

export async function getStaticProps() {
  const content = await getPageContent();
  return {
    props: {
      content,
    },
  };
} 

// Update Mission Section Background for better visibility
const MissionSectionBackground = () => (
  <>
    <MotionBox
      position="absolute"
      top="-20%"
      left="-10%"
      width="70vw"
      height="70vw"
      bgGradient="radial(circle at 30% 30%, orange.100 0%, transparent 70%)"
      opacity={0.9}
      zIndex={0}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.9, 1, 0.9],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    <MotionBox
      position="absolute"
      bottom="-30%"
      right="-20%"
      width="80vw"
      height="80vw"
      bgGradient="radial(circle at 70% 70%, purple.100 0%, transparent 70%)"
      opacity={0.9}
      zIndex={0}
      animate={{
        scale: [1, 1.3, 1],
        opacity: [0.9, 1, 0.9],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  </>
);

// Update Daily Care Section Background
const DailyCareSectionBackground = () => (
  <>
    <MotionBox
      position="absolute"
      top="10%"
      left="-20%"
      width="60vw"
      height="60vw"
      bgGradient="radial(circle at 50% 50%, green.100 0%, transparent 70%)"
      opacity={0.8}
      zIndex={0}
      animate={{
        scale: [1, 1.4, 1],
        opacity: [0.8, 0.9, 0.8],
      }}
      transition={{
        duration: 30,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    <MotionBox
      position="absolute"
      bottom="20%"
      right="-10%"
      width="50vw"
      height="50vw"
      bgGradient="radial(circle at 50% 50%, yellow.100 0%, transparent 70%)"
      opacity={0.8}
      zIndex={0}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.8, 0.9, 0.8],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  </>
);

// Update Blog Section Background
const BlogSectionBackground = () => (
  <>
    <MotionBox
      position="absolute"
      top="-10%"
      right="-20%"
      width="70vw"
      height="70vw"
      bgGradient="radial(circle at 70% 30%, purple.100 0%, transparent 70%)"
      opacity={0.8}
      zIndex={0}
      animate={{
        scale: [1, 1.3, 1],
        opacity: [0.8, 0.9, 0.8],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    <MotionBox
      position="absolute"
      bottom="-20%"
      left="-10%"
      width="60vw"
      height="60vw"
      bgGradient="radial(circle at 30% 70%, orange.100 0%, transparent 70%)"
      opacity={0.8}
      zIndex={0}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.8, 0.9, 0.8],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  </>
); 