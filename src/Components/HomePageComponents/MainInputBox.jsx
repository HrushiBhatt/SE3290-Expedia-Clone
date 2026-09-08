import { Tab, Box, TabList, TabPanel, TabPanels, Tabs, Container, useColorModeValue } from '@chakra-ui/react'
import Stay from '../../Pages/Stay/Stay';
import React from 'react'
import { InputBox } from '../../Pages/ThingsTodo/InputBox'
import Flights from '../../Pages/Flights/Flight'

const TABS = ['Stays', 'Flight', 'Cars', 'Things to do', 'Packages'];

const MainInputBox = () => {
  const cardBg = useColorModeValue('white', 'gray.800');
  const tabBorder = useColorModeValue('gray.100', 'gray.700');

  return (
    <Container maxW="6xl" px={{ base: 4, md: 8 }} mt={{ base: -8, md: -10 }} position="relative" zIndex={1}>
      <Box bg={cardBg} boxShadow="lg" borderRadius="xl">
        <Tabs variant="line" colorScheme="brand" isLazy>
          <TabList
            borderColor={tabBorder}
            overflowX="auto"
            overflowY="hidden"
            css={{ scrollbarWidth: 'none', '&::-webkit-scrollbar': { display: 'none' } }}
            justifyContent={{ base: 'flex-start', md: 'center' }}
            px={{ base: 3, md: 6 }}
          >
            {TABS.map((label) => (
              <Tab key={label} whiteSpace="nowrap" fontWeight="semibold" py={4} px={4}>
                {label}
              </Tab>
            ))}
          </TabList>
          <TabPanels>
            <TabPanel p={{ base: 4, md: 6 }}>
              <Stay />
            </TabPanel>
            <TabPanel p={{ base: 4, md: 6 }}>
              <Flights />
            </TabPanel>
            <TabPanel p={{ base: 4, md: 6 }}>
              <p>Cars</p>
            </TabPanel>
            <TabPanel p={{ base: 4, md: 6 }}>
              <InputBox />
            </TabPanel>
            <TabPanel p={{ base: 4, md: 6 }}>
              <p>Packages</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  )
}

export default MainInputBox
