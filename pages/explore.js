import Head from 'next/head';
import clientPromise from '../lib/mongodb';
import NavBar from "../components/NavBar";
import { Button, Center, Box, Image, Flex, Badge, Text, Link, ButtonGroup, Heading, Container, SimpleGrid, HStack } from '@chakra-ui/react';
import { useEffect } from 'react';
import { Input, Grid } from "@chakra-ui/react";
import Navbar from "../components/NavBar";
// import Card from "../components/ExploreCard";

export default function Explore({ success, clubs })
{

    console.log(success);
    console.log(clubs);

    return (
        <>
            <Head>
                <title>Explore | GT Club Explorer</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <NavBar />

            {/* <Container maxW='container.xl' mx="auto" > */}
            <Flex>
                <Box w="20%" p={4}>

                    {/* Search Filters */}
                    <Box mb={4}>
                        <Input placeholder="Filter 1" />
                    </Box>
                    <Box mb={4}>
                        <Input placeholder="Filter 2" />
                    </Box>
                    {/* Add more filters here */}
                </Box>

                <Box w="80%" p={4}>
                    {/* Search Bar */}
                    <Box mb={4}>
                        <Input placeholder="Search organizations" />
                    </Box>
                    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} alignItems='center' mt={8} textAlign={{ base: "center", lg: "left" }} spacing={4}>
                        {
                            clubs.map((club, index) =>
                            {
                                return (
                                    <Link href={`/club/${club.slug}`} _hover={{}} key={index}>
                                        <Box p={4} shadow="xl" rounded="md" _hover={{
                                            background: "gray.100",
                                            transition: "all .2s"
                                        }}>
                                            <Heading fontSize="lg">
                                                {club.name}
                                            </Heading>

                                            <HStack mt={2}>
                                                {
                                                    club.tags.map((tag, index) =>
                                                    {
                                                        return (
                                                            <Badge key={index} colorScheme="blue">{tag}</Badge>
                                                        );
                                                    })
                                                }
                                            </HStack>

                                            <Text fontSize='md' mt={4}>
                                                {club.shortDesc}
                                            </Text>
                                        </Box>
                                    </Link>
                                );
                            })
                        }

                    </SimpleGrid>
                </Box>

            </Flex>


            {/* </Container> */}
        </>
    );
}

export async function getServerSideProps(context)
{
    try
    {
        const client = await clientPromise;
        const db = client.db("clubs");
        const collection = db.collection("clubsMain");

        let clubs = await collection.find({}).toArray();
        clubs = JSON.parse(JSON.stringify(clubs));

        let objToReturn = {
            props: {
                success: true,
                clubs: clubs
            }
        };
        return objToReturn;

    } catch (e)
    {
        console.error(e);
        return {
            props: { success: false },
        };
    }
}