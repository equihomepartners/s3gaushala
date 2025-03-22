import { Box, Container, Heading, Text, VStack, SimpleGrid } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { getPageContent, getAllSlugs } from '../utils/content';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import OptimizedImage from '../components/OptimizedImage';

export default function DynamicPage({ content }) {
  const router = useRouter();

  if (router.isFallback || !content) {
    return (
      <Box>
        <Navbar />
        <Container maxW="container.xl" py={20}>
          <Text>Loading...</Text>
        </Container>
        <Footer />
      </Box>
    );
  }

  // Safely access content properties
  const title = content?.mainContent?.hero?.title || 'Page Title';
  const subtitle = content?.mainContent?.hero?.subtitle || '';
  const images = content?.images || [];
  const sections = content?.mainContent?.sections || [];

  return (
    <Box>
      <Navbar />
      <Box as="main" py={20}>
        <Container maxW="container.xl">
          <VStack spacing={8} align="stretch">
            <Box textAlign="center">
              <Heading as="h1" size="2xl" mb={4}>
                {title}
              </Heading>
              {subtitle && (
                <Text fontSize="xl" color="gray.600">
                  {subtitle}
                </Text>
              )}
            </Box>

            {images.length > 0 && (
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
                {images.map((image, index) => (
                  <OptimizedImage
                    key={index}
                    src={image.src}
                    alt={image.alt || ''}
                    height="300px"
                    width="100%"
                    borderRadius="lg"
                    objectFit="cover"
                  />
                ))}
              </SimpleGrid>
            )}

            <VStack spacing={6} align="stretch">
              {sections.map((section, index) => (
                <Box key={index}>
                  <Heading as="h2" size="lg" mb={4}>
                    {section.title}
                  </Heading>
                  <Text>{section.content}</Text>
                </Box>
              ))}
            </VStack>
          </VStack>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}

export async function getStaticProps({ params }) {
  try {
    const content = await getPageContent(params.slug);
    
    if (!content) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        content,
      },
      revalidate: 60, // Revalidate every minute
    };
  } catch (error) {
    console.error('Error in getStaticProps:', error);
    return {
      notFound: true,
    };
  }
}

export async function getStaticPaths() {
  try {
    const slugs = await getAllSlugs();
    const paths = slugs
      .filter(slug => slug !== 'main') // Exclude main from dynamic routes
      .map(slug => ({
        params: { slug },
      }));

    return {
      paths,
      fallback: true, // Enable fallback for new pages
    };
  } catch (error) {
    console.error('Error in getStaticPaths:', error);
    return {
      paths: [],
      fallback: true,
    };
  }
} 