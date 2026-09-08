import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderTop="1px solid"
      borderColor={useColorModeValue('gray.100', 'gray.700')}
      color={useColorModeValue('gray.600', 'gray.200')}
      mt={16}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ base: 'repeat(2,1fr)', sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr' }}
          spacing={8}>
          <Stack spacing={3}>
            <Text fontWeight={800} fontSize={'lg'} color={useColorModeValue('gray.800', 'white')}>
              Chalo Ghume
            </Text>
            <Text fontSize={'sm'}>
              © 2023 Chalo Ghume. All rights reserved.
            </Text>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Explore</ListHeader>
            <Link href={'/flight'}>Flights</Link>
            <Link href={'/stay'}>Stays</Link>
            <Link href={'/ThingsToDo'}>Things to do</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Link href={'#'}>About</Link>
            <Link href={'#'}>Careers</Link>
            <Link href={'#'}>Contact</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            <Link href={'#'}>Help center</Link>
            <Link href={'#'}>Terms of service</Link>
            <Link href={'#'}>Privacy policy</Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}