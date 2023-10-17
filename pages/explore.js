import Head from 'next/head';
import clientPromise from '../lib/mongodb';
import NavBar from "../components/NavBar";
import { Button, Center, Box, Image, Flex, Badge, Text, Link, ButtonGroup, Heading, Container, SimpleGrid, HStack } from '@chakra-ui/react';
import { useEffect } from 'react';
import { Input, Grid } from "@chakra-ui/react";
import Navbar from "../components/NavBar";
import Filters from "../components/Filters"; 
import Card from "../components/ExploreCard"; 


{/* parameter `clubs` is an object containing the data for each club pulled from Mongo */} 
export default function Explore({ success, clubs })
{

    return (
        <>
            <Head>
                <title>Explore | GT Club Explorer</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <NavBar />

            {/* <Container maxW='container.xl' mx="auto" > */}
            <Flex>

                {/* Filters */}
                <Box w="20%" p={4}>
                    <Filters />
                </Box>


                <Box w="80%" p={4}>

                    {/* Search Bar */}
                    <Box mb={4}>
                        <Input placeholder="Search organizations" />
                    </Box>


                    {/* ExploreCards */} 
                    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} alignItems='center' mt={8} textAlign={{ base: "center", lg: "left" }} spacing={4}> {
                        clubs.map((club, index) => {
                            return (
                                <Card club={club} index={index} />
                            );
                        })
                    }</SimpleGrid>
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