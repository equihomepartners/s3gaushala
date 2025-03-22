import { ChakraProvider } from '@chakra-ui/react';
import theme from '../styles/theme';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <title>S3 Gaushala - The Home of Desi Cows in America</title>
        <meta name="description" content="A sanctuary dedicated to protecting and nurturing over 200 desi cows, the largest such sanctuary in America" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp; 