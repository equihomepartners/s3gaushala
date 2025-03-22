import { Box } from '@chakra-ui/react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <Box>
      <Navbar />
      <Box as="main" pt={16}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
} 