import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  useColorModeValue,
  useDisclosure,
  useColorMode,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  MoonIcon,
  SunIcon,
} from '@chakra-ui/icons';

import { BsBuildingFillCheck, BsCompass } from 'react-icons/bs';
import { MdOutlineFlight } from 'react-icons/md';
import { Link as RouterLink, NavLink } from 'react-router-dom';

const NAV_ITEMS = [
  { label: 'Stays', to: '/stay', icon: BsBuildingFillCheck },
  { label: 'Flights', to: '/flight', icon: MdOutlineFlight },
  { label: 'Things To Do', to: '/ThingsToDo', icon: BsCompass },
];

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box position="sticky" top={0} zIndex={20}>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.700', 'white')}
        minH="64px"
        justify="space-between"
        align="center"
        px={{ base: 4, md: 8 }}
        borderBottom="1px solid"
        borderColor={useColorModeValue('gray.100', 'gray.700')}
      >
        <IconButton
          onClick={onToggle}
          icon={isOpen ? <CloseIcon w={3.5} h={3.5} /> : <HamburgerIcon w={5} h={5} />}
          variant="ghost"
          aria-label="Toggle navigation"
          display={{ base: 'flex', md: 'none' }}
        />

        <RouterLink to="/">
          <Flex align="center" gap={2}>
            <Icon as={BsCompass} boxSize={6} color="brand.500" />
            <Text fontWeight={800} fontSize="xl" letterSpacing="-0.02em">
              Chalo Ghume
            </Text>
          </Flex>
        </RouterLink>

        <Stack direction="row" spacing={6} align="stretch" h="64px" display={{ base: 'none', md: 'flex' }}>
          {NAV_ITEMS.map((item) => (
            <NavTab key={item.label} {...item} />
          ))}
        </Stack>

        <Stack direction="row" spacing={3} align="center">
          <RouterLink to="/login">
            <Button variant="ghost" size="sm" display={{ base: 'none', sm: 'inline-flex' }}>
              Sign in
            </Button>
          </RouterLink>
          <RouterLink to="/register">
            <Button size="sm" display={{ base: 'none', sm: 'inline-flex' }}>
              Sign up
            </Button>
          </RouterLink>
          <IconButton
            onClick={toggleColorMode}
            variant="ghost"
            size="sm"
            aria-label="Toggle color mode"
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          />
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const NavTab = ({ label, to, icon }) => {
  const inactiveColor = useColorModeValue('gray.500', 'gray.400');
  const hoverColor = useColorModeValue('gray.800', 'white');

  return (
    <NavLink to={to} style={{ textDecoration: 'none', height: '100%' }}>
      {({ isActive }) => (
        <Flex
          align="center"
          gap={2}
          h="100%"
          px={1}
          fontSize="sm"
          fontWeight={600}
          color={isActive ? 'brand.500' : inactiveColor}
          borderBottom="2px solid"
          borderColor={isActive ? 'brand.500' : 'transparent'}
          _hover={{ color: isActive ? 'brand.500' : hoverColor }}
          transition="color 0.15s ease"
        >
          <Icon as={icon} boxSize={4} />
          {label}
        </Flex>
      )}
    </NavLink>
  );
};

const MobileNav = () => (
  <Stack
    bg={useColorModeValue('white', 'gray.800')}
    borderBottom="1px solid"
    borderColor={useColorModeValue('gray.100', 'gray.700')}
    p={4}
    spacing={1}
    display={{ md: 'none' }}
  >
    {NAV_ITEMS.map((item) => (
      <NavTab key={item.label} {...item} />
    ))}
    <RouterLink to="/login">
      <Flex px={4} py={2} fontSize="sm" fontWeight={600} color="gray.600">
        Sign in
      </Flex>
    </RouterLink>
    <RouterLink to="/register">
      <Flex px={4} py={2} fontSize="sm" fontWeight={600} color="gray.600">
        Sign up
      </Flex>
    </RouterLink>
  </Stack>
);
