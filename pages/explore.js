import Head from 'next/head';
import clientPromise from '../lib/mongodb';
import NavBar from "../components/NavBar";
import { Button, Center, Box, Image, Flex, Badge, Text, Link, ButtonGroup, Heading, Container, SimpleGrid, HStack } from '@chakra-ui/react';
import { useEffect } from 'react';
import { Input, Grid } from "@chakra-ui/react";
import Navbar from "../components/NavBar";
import Filters from "../components/Filters"; 
import Card from "../components/ExploreCard"; 
import SearchBar from "../components/SearchBar"; 


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

            {/* main page layout */} 
            <Grid
                columns={{ base: 1, md: 2, lg: 3, xl: 4 }} 
                gridGap={{ base: "20px", lg: "30px", xl: "40px" }} 
                textAlign={{ base: "center", lg: "left" }} 
                w={{ base: "100%", md: "95%", lg: "90%", xl: "85%"}} 
                mx="auto" spacing={4} alignItems="center" mt={8} 
            >

                {/* Filters */}
                <Box gridColumn="1" gridRow="2" alignSelf="start">
                    <Filters />
                </Box>

                    
                {/* Search Bar */}
                <Box 
                    gridColumn={{ base: 1, md: 2 }} gridRow="1" 
                    display="flex" justifyContent="center" alignItems="center"
                >
                    <SearchBar />
                </Box>


                {/* ExploreCards */} 
                <SimpleGrid 
                    gridColumn={{ base: 1, md: 2 }} gridRow={{ base: 3, md: 2 }} 
                    columns={{ base: 1, lg: 2, xl: 3 }} 
                    textAlign={{ base: "center", lg: "left" }} 
                    spacing={4} alignItems="center"
                    
                >{
                    clubs.map((club, index) => {
                        return <Card club={club} index={index} />
                    })
                }</SimpleGrid>

            </Grid>

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