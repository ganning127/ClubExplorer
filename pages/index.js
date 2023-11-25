import Head from 'next/head';
import NavBar from "../components/NavBar";
import { Button, Center, Box, Image, Flex, Badge, Text, ButtonGroup, Heading, Container, SimpleGrid, HStack } from '@chakra-ui/react';

export default function Home()
{
  return (
    <div className="container">
      <Head>
        <title>GT Club Explorer Landing Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <Container maxW='container.lg' mx="auto" spacing={16}>
        <SimpleGrid columns={{ base: 1, lg: 2 }} alignItems='center' mt={8} textAlign={{ base: "center", lg: "left" }}>
          <Box>
            <Heading fontSize={{ base: '5xl', lg: '7xl' }} fontWeight='extrabold'>Georgia Tech <br /> <Text as='span' color='#16425B'>Club Explorer</Text></Heading>

            <HStack justify={{ base: "center", lg: "flex-start" }}>
              <Button border='2px' bg='#16425B' color="white" mt={4} mb={4}
                _hover={{
                  borderColor: "yellow.500",
                  textColor: "yellow.500",
                  background: "white",
                  textColor: "black",
                }}>Explore Clubs</Button>

              <Button bg="" textColor="#16425B" mt={4} mb={4}
                _hover={{
                  borderColor: "yellow.500",
                  textColor: "yellow.500",
                  background: "white",
                  textColor: "black",
                }}>How It Works</Button>
            </HStack>
          </Box>

          <Image mx="auto" display={{ base: "none", lg: "block" }} src="/img/Georgia-Tech-Yellow-Jackets-Logo.png" maxH='250px' />

        </SimpleGrid>

        {/* TODO:
            - how it works section
            - instead of using "Flex" for the section below, use "SimpleGrid"
        
        */}


        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          paddingBottom={40}
        >
          {Array.from({ length: 3 }).map((_, index) => (
            <Box
              key={index}
              p="5"
              maxW="320px"
              mx={4}
            >
              <Center h="50vh" padding={1}>
                <Box p="5" maxW="320px" borderWidth="3px">
                  <Image borderRadius="md" src="https://www.tun.com/blog/wp-content/uploads/2021/04/36-Popular-High-School-Clubs-To-Explore.jpg" />
                  <Flex align="baseline" mt={2}>
                    <Badge colorScheme="blue">Tags</Badge>
                    <Text
                      textTransform="uppercase"
                      fontSize="sm"
                      paddingLeft={2}
                      color="yellow.600"
                    >
                      Cool &bull; Goofy
                    </Text>
                  </Flex>
                  <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
                    Random Club
                  </Text>
                  <Text mt={2}>Description: yoooooooooooooooo waddup</Text>
                </Box>
              </Center>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </div>
  );
}

