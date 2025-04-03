import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Image,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  HStack,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const Links = ['About Us', 'Get Involved', 'Events', 'Gallery', 'Blog', 'Contact'];

const NavLink = ({ children, href }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={href}>
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const bg = useColorModeValue('white', 'gray.800');

  return (
    <Box position="fixed" w="full" zIndex={1000}>
      <MotionBox
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        bg={bg}
        borderBottom={1}
        borderStyle="solid"
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        px={{ base: 4, md: 8 }}
        boxShadow="sm">
        <Flex
          maxW="7xl"
          mx="auto"
          h={{ base: "80px", md: "90px" }}
          alignItems="center"
          justifyContent="space-between">
          <Flex flex={{ base: 1 }} justify={{ base: 'start', md: 'start' }}>
            <Link href="/" display="flex" alignItems="center">
              <Image
                src="/images/s3-logo.png"
                alt="S3 Foundation Logo"
                h={{ base: "70px", md: "80px" }}
                objectFit="contain"
                py={1}
              />
              <Text
                ml={2}
                fontSize={{ base: "xl", md: "2xl" }}
                fontWeight="extrabold"
                color="orange.400"
                letterSpacing="tight"
                textShadow="1px 1px 2px rgba(0,0,0,0.2)"
                display={{ base: 'none', md: 'block' }}>
                S3 Gaushala
              </Text>
            </Link>
          </Flex>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>

          <Stack
            flex={{ base: 1, md: 0 }}
            justify="flex-end"
            direction="row"
            spacing={6}>
            <Popover trigger="hover" placement="bottom-end">
              <PopoverTrigger>
                <Button
                  as="a"
                  display={{ base: 'none', md: 'inline-flex' }}
                  fontSize="sm"
                  fontWeight={600}
                  color="white"
                  bg="primary.500"
                  px={6}
                  h="45px"
                  rightIcon={<ChevronDownIcon />}
                  _hover={{
                    bg: 'primary.600',
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg',
                  }}>
                  Get Involved
                </Button>
              </PopoverTrigger>
              <PopoverContent
                border={0}
                boxShadow="xl"
                bg={useColorModeValue('white', 'gray.800')}
                p={4}
                rounded="xl"
                minW="sm">
                <Stack>
                  <Link
                    href="/support-us#donate"
                    display="block"
                    p={2}
                    rounded="md"
                    role="group"
                    _hover={{ bg: useColorModeValue('orange.50', 'gray.900') }}>
                    <Stack direction="row" align="center">
                      <Box>
                        <Text
                          transition="all .3s ease"
                          _groupHover={{ color: 'orange.500' }}
                          fontWeight={500}>
                          Donate Now
                        </Text>
                        <Text fontSize="sm" color="gray.500">Support our mission</Text>
                      </Box>
                      <Flex
                        transition="all .3s ease"
                        transform="translateX(-10px)"
                        opacity={0}
                        _groupHover={{ opacity: 1, transform: 'translateX(0)' }}
                        justify="flex-end"
                        align="center"
                        flex={1}>
                        <Icon color="orange.500" w={5} h={5} as={ChevronRightIcon} />
                      </Flex>
                    </Stack>
                  </Link>
                  <Link
                    href="/support-us#sponsor"
                    role="group"
                    display="block"
                    p={2}
                    rounded="md"
                    _hover={{ bg: useColorModeValue('purple.50', 'gray.900') }}>
                    <Stack direction="row" align="center">
                      <Box>
                        <Text
                          transition="all .3s ease"
                          _groupHover={{ color: 'purple.500' }}
                          fontWeight={500}>
                          Sponsor a Cow
                        </Text>
                        <Text fontSize="sm" color="gray.500">Make a lasting impact</Text>
                      </Box>
                      <Flex
                        transition="all .3s ease"
                        transform="translateX(-10px)"
                        opacity={0}
                        _groupHover={{ opacity: 1, transform: 'translateX(0)' }}
                        justify="flex-end"
                        align="center"
                        flex={1}>
                        <Icon color="purple.500" w={5} h={5} as={ChevronRightIcon} />
                      </Flex>
                    </Stack>
                  </Link>
                  <Link
                    href="/support-us#volunteer"
                    role="group"
                    display="block"
                    p={2}
                    rounded="md"
                    _hover={{ bg: useColorModeValue('green.50', 'gray.900') }}>
                    <Stack direction="row" align="center">
                      <Box>
                        <Text
                          transition="all .3s ease"
                          _groupHover={{ color: 'green.500' }}
                          fontWeight={500}>
                          Volunteer
                        </Text>
                        <Text fontSize="sm" color="gray.500">Join our community</Text>
                      </Box>
                      <Flex
                        transition="all .3s ease"
                        transform="translateX(-10px)"
                        opacity={0}
                        _groupHover={{ opacity: 1, transform: 'translateX(0)' }}
                        justify="flex-end"
                        align="center"
                        flex={1}>
                        <Icon color="green.500" w={5} h={5} as={ChevronRightIcon} />
                      </Flex>
                    </Stack>
                  </Link>
                </Stack>
              </PopoverContent>
            </Popover>
          </Stack>

          <Flex
            flex={{ base: 'auto', md: 'none' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant="ghost"
              aria-label="Toggle Navigation"
            />
          </Flex>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </MotionBox>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('primary.500', 'primary.300');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction="row" spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger="hover" placement="bottom-start">
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? '#'}
                fontSize="sm"
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow="xl"
                bg={popoverContentBgColor}
                p={4}
                rounded="xl"
                minW="sm">
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role="group"
      display="block"
      p={2}
      rounded="md"
      _hover={{ bg: useColorModeValue('primary.50', 'gray.900') }}>
      <Stack direction="row" align="center">
        <Box>
          <Text
            transition="all .3s ease"
            _groupHover={{ color: 'primary.500' }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize="sm">{subLabel}</Text>
        </Box>
        <Flex
          transition="all .3s ease"
          transform="translateX(-10px)"
          opacity={0}
          _groupHover={{ opacity: 1, transform: 'translateX(0)' }}
          justify="flex-end"
          align="center"
          flex={1}>
          <Icon color="primary.500" w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
      <Button
        w="full"
        fontSize="sm"
        fontWeight={600}
        color="white"
        bg="primary.500"
        href="#"
        _hover={{
          bg: 'primary.600',
        }}>
        Donate
      </Button>
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify="space-between"
        align="center"
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition="all .25s ease-in-out"
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle="solid"
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align="start">
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About Us',
    href: '/about',
  }
]; 