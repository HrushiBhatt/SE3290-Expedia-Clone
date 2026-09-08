import React from 'react';
import { Box, Heading, Text, SimpleGrid, Flex, Icon, Container } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { BsBuildingFillCheck, BsCompass } from 'react-icons/bs';
import { MdOutlineFlight } from 'react-icons/md';

const JOURNEYS = [
  {
    label: 'Find a flight',
    description: 'Compare routes and book with ease',
    to: '/flight',
    icon: MdOutlineFlight,
  },
  {
    label: 'Book a stay',
    description: 'Cozy stays for every kind of trip',
    to: '/stay',
    icon: BsBuildingFillCheck,
  },
  {
    label: 'Explore things to do',
    description: 'Discover experiences worth traveling for',
    to: '/ThingsToDo',
    icon: BsCompass,
  },
];

const Hero = () => {
  return (
    <Box bg="brand.900" color="white">
      <Container maxW="6xl" py={{ base: 14, md: 20 }} px={{ base: 4, md: 8 }}>
        <Heading
          fontSize={{ base: '3xl', md: '5xl' }}
          fontWeight={800}
          letterSpacing="-0.02em"
          maxW="2xl"
        >
          Start your journey
        </Heading>
        <Text mt={4} fontSize={{ base: 'md', md: 'lg' }} color="brand.100" maxW="xl">
          Flights, stays, and things to do — all in one welcoming place.
          Tell us where you're headed, and we'll take it from there.
        </Text>

        <SimpleGrid columns={{ base: 1, sm: 3 }} spacing={4} mt={10}>
          {JOURNEYS.map((item) => (
            <RouterLink key={item.label} to={item.to}>
              <Flex
                direction="column"
                gap={3}
                bg="whiteAlpha.100"
                border="1px solid"
                borderColor="whiteAlpha.300"
                borderRadius="xl"
                p={5}
                h="full"
                transition="all 0.15s ease"
                _hover={{ bg: 'whiteAlpha.200', transform: 'translateY(-2px)' }}
              >
                <Icon as={item.icon} boxSize={6} color="brand.200" />
                <Box>
                  <Text fontWeight={700}>{item.label}</Text>
                  <Text fontSize="sm" color="brand.100" mt={1}>
                    {item.description}
                  </Text>
                </Box>
              </Flex>
            </RouterLink>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Hero;
