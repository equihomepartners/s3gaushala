import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: "'Montserrat', sans-serif",
    body: "'Inter', sans-serif",
  },
  colors: {
    brand: {
      50: '#f7fafc',
      100: '#edf2f7',
      200: '#e2e8f0',
      300: '#cbd5e0',
      400: '#a0aec0',
      500: '#718096',
      600: '#4a5568',
      700: '#2d3748',
      800: '#1a202c',
      900: '#171923',
    },
    primary: {
      50: '#fff3e0',
      100: '#ffe0b2',
      200: '#ffcc80',
      300: '#ffb74d',
      400: '#ffa726',
      500: '#ff9800',
      600: '#fb8c00',
      700: '#f57c00',
      800: '#ef6c00',
      900: '#e65100',
    },
    accent: {
      50: '#f3e5f5',
      100: '#e1bee7',
      200: '#ce93d8',
      300: '#ba68c8',
      400: '#ab47bc',
      500: '#9c27b0',
      600: '#8e24aa',
      700: '#7b1fa2',
      800: '#6a1b9a',
      900: '#4a148c',
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'semibold',
        borderRadius: 'full',
      },
      variants: {
        solid: (props) => ({
          bg: props.colorScheme === 'primary' ? 'primary.500' : props.colorScheme === 'accent' ? 'accent.500' : undefined,
          color: 'white',
          _hover: {
            bg: props.colorScheme === 'primary' ? 'primary.600' : props.colorScheme === 'accent' ? 'accent.600' : undefined,
            transform: 'translateY(-2px)',
            boxShadow: 'lg',
          },
        }),
        outline: (props) => ({
          borderColor: props.colorScheme === 'primary' ? 'primary.500' : props.colorScheme === 'accent' ? 'accent.500' : undefined,
          color: props.colorScheme === 'primary' ? 'primary.500' : props.colorScheme === 'accent' ? 'accent.500' : undefined,
          _hover: {
            bg: props.colorScheme === 'primary' ? 'primary.50' : props.colorScheme === 'accent' ? 'accent.50' : undefined,
            transform: 'translateY(-2px)',
            boxShadow: 'lg',
          },
        }),
      },
    },
    Heading: {
      baseStyle: {
        fontWeight: 'bold',
        letterSpacing: '-0.02em',
      },
    },
    Text: {
      baseStyle: {
        fontSize: 'lg',
      },
    },
    Badge: {
      baseStyle: {
        textTransform: 'none',
        fontWeight: 'medium',
      },
    },
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
      },
    },
  },
});

export default theme; 