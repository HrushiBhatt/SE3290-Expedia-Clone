import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import DestinationCard from './DestinationCard';

import { Grid, Center, Spinner, Text, VStack } from '@chakra-ui/react';

export const Destination = () => {
  const [places, setPlaces] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchParams] = useSearchParams()

  const place = searchParams.get("place")

  useEffect(() => {
    setLoading(true)
    const url = place
      ? `http://localhost:8080/Things_todo?place=${place}`
      : `http://localhost:8080/Things_todo`
    axios.get(url).then((response) => {
      setPlaces(response.data)
    }).catch((err) => {
      console.log(err)
      setPlaces([])
    }).finally(() => setLoading(false))
  }, [place])

  if (loading) {
    return (
      <Center py={24}>
        <Spinner color="brand.500" thickness="3px" />
      </Center>
    )
  }

  if (places.length === 0) {
    return (
      <Center py={24}>
        <VStack spacing={2}>
          <Text fontWeight={700} fontSize="lg">No experiences found</Text>
          <Text color="gray.500">Try searching for a different city.</Text>
        </VStack>
      </Center>
    )
  }

  return (
    <Center>
      <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} columnGap={20} rowGap={20} mt="60px" mb="60px">
        {places.map((el) => (<DestinationCard key={el.id} image={el.image} title={el.title} price={el.price} rating={+el.rating ? +el.rating : 0} place={el.place} />
        ))}
      </Grid>
    </Center>
  )
}
