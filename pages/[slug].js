import { Box, Container, Heading, Text, VStack, Image, SimpleGrid } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { getPageContent, getAllSlugs } from '../utils/content';

export default function DynamicPage({ content, navigation }) {
  const router = useRouter();
  const { slug } = router.query;

  if (!content) return null;

  return (
    <Box as="main" py={10}>
      <Container maxW="container.xl">
        <VStack spacing={8} align="stretch">
          <Box textAlign="center">
            <Heading as="h1" size="2xl" mb={4}>
              {content.mainContent.hero.title}
            </Heading>
            <Text fontSize="xl" color="gray.600">
              {content.mainContent.hero.subtitle}
            </Text>
          </Box>

          {content.images.length > 0 && (
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
              {content.images.map((image, index) => (
                <Image
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  borderRadius="lg"
                  objectFit="cover"
                  height="300px"
                />
              ))}
            </SimpleGrid>
          )}

          <VStack spacing={6} align="stretch">
            {content.text.map((item, index) => {
              const Component = item.type;
              return (
                <Box key={index}>
                  <Component as={item.type} mb={4}>
                    {item.content}
                  </Component>
                </Box>
              );
            })}
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
}

export function getStaticProps({ params }) {
  const content = getPageContent(params.slug);
  const mainContent = getPageContent('main');

  if (!content) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      content,
      navigation: mainContent?.navigation || []
    },
  };
}

export function getStaticPaths() {
  const slugs = getAllSlugs();
  const paths = slugs
    .filter(slug => slug !== 'main')
    .map(slug => ({
      params: { slug },
    }));

  return {
    paths,
    fallback: false,
  };
} 