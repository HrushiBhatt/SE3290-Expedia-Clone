import React from 'react'
import { Box, Heading, HStack, SimpleGrid, Text, Icon, Container, useColorModeValue } from '@chakra-ui/react'
import { BsPencilFill } from 'react-icons/bs'
import { RiMessage2Fill } from 'react-icons/ri'
import { HiCurrencyDollar } from 'react-icons/hi'

const ITEMS = [
  {
    title: 'Change or cancel a trip',
    description: 'Make updates to your itinerary or cancel a booking',
    icon: BsPencilFill,
  },
  {
    title: 'Use a credit or coupon',
    description: 'Apply a coupon code or credit to a new trip',
    icon: HiCurrencyDollar,
  },
  {
    title: 'Track your refund',
    description: 'Check on the progress of a refund in process',
    icon: RiMessage2Fill,
  },
]

const HelpBoxes = () => {
  const cardBg = useColorModeValue('white', 'gray.800');
  const cardBorder = useColorModeValue('gray.100', 'gray.700');
  const descColor = useColorModeValue('gray.500', 'gray.400');

  return (
    <Container maxW="6xl" px={{ base: 4, md: 8 }} mt={16} mb={4}>
      <Heading fontSize="2xl" fontWeight={700} textAlign="left">
        Here to help keep you on the move
      </Heading>
      <SimpleGrid columns={{ base: 1, sm: 3 }} spacing={4} mt={5}>
        {ITEMS.map((item) => (
          <Box key={item.title} border="1px solid" borderColor={cardBorder} bg={cardBg} rounded="lg" p={4}>
            <HStack justify="space-between" align="start">
              <Heading fontSize="md" fontWeight={600}>{item.title}</Heading>
              <Icon as={item.icon} color="brand.500" mt={1} />
            </HStack>
            <Text mt={2} color={descColor} fontSize="sm">{item.description}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  )
}

export default HelpBoxes
