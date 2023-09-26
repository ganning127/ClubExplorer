import Head from 'next/head'
import clientPromise from '../lib/mongodb'
import NavBar from "../components/NavBar"
import { Button, Center, Box, Image, Flex, Badge, Text, ButtonGroup, Heading, Container, SimpleGrid, HStack } from '@chakra-ui/react'

export const getServerSideProps = async () => {
    try {
      await clientPromise
      return {
        props: { isConnected: true },
      }
    } catch (e) {
      console.error(e)
      return {
        props: { isConnected: false },
      }
    }
  }
  
export default function Home({
    isConnected,
  }) {
return (
    <div className="container">
      <Head>
        <title>GT Club Explorer Landing Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <Container maxW='container.lg' mx="auto" spacing={16}>

        <SimpleGrid columns={{base: 1, lg: 2}} alignItems='center' mt={8} textAlign={{base: "center", lg: "left"}}>
          <Box>
            <Heading fontSize={{base: '5xl', lg: '7xl'}} fontWeight='extrabold'>Georgia Tech <br/> <Text as='span' color='#16425B'>Club Explorer</Text></Heading>

            <HStack justify={{base: "center", lg: "flex-start"}}>
              <Button border='2px' bg='#16425B' color="white" mt={4} mb={4}
              _hover={{
                borderColor:"yellow.500",
                textColor: "yellow.500",
                background: "white",
                textColor: "black",
              }}>Explore Clubs</Button>

              <Button bg="" textColor="#16425B"  mt={4} mb={4}
              _hover={{
                borderColor:"yellow.500",
                textColor: "yellow.500",
                background: "white",
                textColor: "black",
              }}>How It Works</Button>
            </HStack>
          </Box>

          <Image mx="auto" display={{base: "none", lg: "block"}} src="/img/Georgia-Tech-Yellow-Jackets-Logo.png" maxH='250px' />

        </SimpleGrid>

        {/* TODO:
            - how it works section
            - instead of using "Flex" for the section below, use "SimpleGrid"
        
        */}
        

        <Flex
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
                  <Image borderRadius="md" src="https://www.wheeltest.com/cm/dpl/images/create/placeholder(1).jpg" />
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
        </Flex>
      </Container>

      {/* <main>
        <NavBar></NavBar>
        <h1 className="title">
          Georgia Tech<br></br>
          Club Explorer
        </h1>
        <div>
          <Button size='lg' height='64px' width='300px' border='2px' color="yellow.500" textColor="white" background="yellow.500" fontSize={32} mt={4} mb={4} ml={4} mr={4}
          _hover={{
            borderColor:"yellow.500",
            textColor: "yellow.500",
            background: "white",
            textColor: "black",
          }}>Explore Clubs</Button>

          <Button size='lg' height='64px' width='300px' border='2px' color="yellow.500" textColor="white" background="yellow.500" fontSize={32} mt={4} mb={4} ml={4} mr={4}
          _hover={{
            borderColor:"yellow.500",
            textColor: "yellow.500",
            background: "white",
            textColor: "black",
          }}>How It Works</Button>
          <img className="landingImage" width="400" height="400" src="/img/Georgia-Tech-Yellow-Jackets-Logo.png" />
        </div>
        <h2 className="secondaryTitle">
          How It Works
        </h2>
        <p className='paragraph'>
          This is how it works! Idk yet so this is just dummy text. 
          I am going to smash my keyboard to test whether the text centers properly on the site with multiple sentences.<br></br><br></br> 
          asfdhjkasdhkjfjahksdlhjkldafshjkldfsahjasdfhjkladfshjkljklahsdhbfasjivbnasljkegbfljksdhfaoisuwbfcdljsiahrgjlsadbfouaeuibcvhljdsadbgf
          osiadjbvlasjdhfsudlivblsuaecdbsvlusagheladvbaslufhblasjkdbvlaseuibvljsbvliasdj ;-P
        </p>
        <div>
        <Flex
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
                  <Image borderRadius="md" src="https://www.wheeltest.com/cm/dpl/images/create/placeholder(1).jpg" />
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
        </Flex>
        </div>
        <p className="copyrightContainer">
          Copyright 2023 - GT Web Dev
        </p>
      </main> */}

      <style jsx>{`
        .title {
          font-size: 80px;
          display: flex;
          align-items: center;
          color: darkblue;
          font-family: "din-2014",sans-serif;
          font-weight: 600;
          font-style: normal;
          margin: 0;
          text-transform: uppercase;
          margin-top: 20px;
          margin-bottom: 20px;
          }
        .secondaryTitle {
            font-size: 50px;
            color: #C29B0C;
            font-family: "din-2014",sans-serif;
            font-weight: 600;
            font-style: normal;
            text-transform: uppercase;
            margin-top: 200px;
            margin-bottom: 40px;
            text-align: center;
          }
        .paragraph{
          font-size: 20px;
          color: darkblue;
          font-family: "din-2014",sans-serif;
          font-weight: 600;
          font-style: normal;
          margin-bottom: 40px;
          text-align: center;
          margin: 0 auto;
          padding: 20px; /* Optional padding for spacing */
          text-align: center; /* Center the text within the container */
          margin: 0 auto; /* Center the container horizontally */
          max-width: 700px;
          padding-bottom:40px;
        }
        .landingImage{
          position: absolute;
          top: 0;
          right: 0;
        }
        .copyrightContainer {
          font-size:2 0px;
          box-sizing: border-box;
          padding-right: 20px;
          padding-left: 20px;
          background-color: black;
          text-align: center;
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 30px;
          color: white;
        }
`     }</style>
      {/*<style jsx global>{

      }</style> */}

    </div>
    )
  }