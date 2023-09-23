import Head from 'next/head'
import clientPromise from '../lib/mongodb'
import { Button, Center, Box, Image, Flex, Badge, Text, ButtonGroup } from '@chakra-ui/react'
  
export const getServerSideProps = async () => {
    try {
      await clientPromise
      // `await clientPromise` will use the default database passed in the MONGODB_URI
      // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
      //
      // `const client = await clientPromise`
      // `const db = client.db("myDatabase")`
      //
      // Then you can execute queries against your database like so:
      // db.find({}) or any of the MongoDB Node Driver commands
  
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
      <main>
        <h1 className="title">
          Georgia Tech<br></br>
          Club Explorer
        </h1>
        <div>
          <Button  size='md' height='48px' width='200px' border='2px' color="yellow.500" textColor="white" background="yellow.500"
          _hover={{
            borderColor:"yellow.500",
            textColor: "yellow.500",
            background: "white",
            textColor: "black",
          }}>Explore Clubs</Button>

          <Button size='md' height='48px' width='200px' border='2px' color="yellow.500" textColor="white" background="yellow.500"
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
          This is how it works! Idk yet so this is just dummy text. I am going to smash my keyboard to test whether the text centers properly on the site with multiple sentences.<br></br><br></br> asfdhjkasdhkjfjahksdlhjkldafshjkldfsahjasdfhjkladfshjkljklahsdhbfasjivbnasljkegbfljksdhfaoisuwbfcdljsiahrgjlsadbfouaeuibcvhljdsadbgfosiadjbvlasjdhfsudlivblsuaecdbsvlusagheladvbaslufhblasjkdbvlaseuibvljsbvliasdj ;-P
        </p>
        <div>
        <Flex
            justifyContent="center"
            //minHeight="50px"
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
      </main>



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