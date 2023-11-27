import Head from 'next/head';
import NavBar from "../components/NavBar";
import clientPromise from '../lib/mongodb';
import { Button, Center, Box, Image, Flex, Badge, Text, ButtonGroup, Heading, Container, SimpleGrid, HStack } from '@chakra-ui/react';
import Card from "../components/ExploreCard";


export default function Home({ initialClubs })
{
  return (
    <div className="container">
      <Head>
        <title>GT Club Explorer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <Container maxW='container.lg' mx="auto" spacing={16}>
        <SimpleGrid columns={{ base: 1, lg: 2 }} alignItems='center' mt={8} textAlign={{ base: "center", lg: "left" }}>
          <Box>
            <Heading fontSize={{ base: '5xl', lg: '7xl' }} fontWeight='extrabold'>Georgia Tech <br /> <Text as='span' color='#16425B'>Club Explorer</Text></Heading>

            <HStack justify={{ base: "center", lg: "flex-start" }}>
              <Button border='2px' bg='#16425B' as='a' href='/explore' color="white" mt={4} mb={4}
                _hover={{
                  bg: "blue.400"
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

        <SimpleGrid
          mt={32}
          gridColumn={{ base: 1, md: 2 }} gridRow={{ base: 3, md: 2 }}
          columns={{ base: 1, lg: 2, xl: 3 }}
          textAlign={{ base: "center", lg: "left" }}
          spacing={4} alignItems="center" pr={4}
          maxHeight="80vh" overflowY="auto"  // makes content in this element scrollable 

        >{
            initialClubs.map((club, index) =>
            {
              return <Card club={club} index={index} />;
            })
          }
        </SimpleGrid>
      </Container>
    </div>
  );
}

export async function getServerSideProps(context)
{
  try
  {

    const client = await clientPromise;
    const db = client.db("clubs");
    const collection = db.collection("clubsMain");

    const limit = 3;  // how many clubs to fetch initially 

    let clubs = await collection.find({}).limit(limit).toArray();
    clubs = JSON.parse(JSON.stringify(clubs));

    return {
      props: {
        success: true,
        initialClubs: clubs
      }
    };

  } catch (e)
  {

    console.error(e);
    return {
      props: { success: false },
    };
  }
}