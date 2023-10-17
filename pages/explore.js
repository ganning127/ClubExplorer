import Head from 'next/head';
import clientPromise from '../lib/mongodb';
import { Button, Center, Box, Image, Flex, Badge, Text, Link, ButtonGroup, Heading, Container, SimpleGrid, HStack } from '@chakra-ui/react';
import { useState, useEffect, useRef } from 'react';
import { Input, Grid } from "@chakra-ui/react";

import NavBar from "../components/NavBar";
import Filters from "../components/Filters"; 
import Card from "../components/ExploreCard"; 
import SearchBar from "../components/SearchBar"; 


// param `initialClubs` is an object with data for each club initially pulled from Mongo via `getServerSideProps()`
export default function Explore({ success, initialClubs }) {

    const [clubs, setClubs] = useState(initialClubs);  // initially populated by `getServerSideProps`; then appended with `fetchMoreCards` 
    const [skip, setSkip] = useState(initialClubs.length);  // # of items to skip over in db query (because already fetched) 
    const limit = 6;  // how many clubs to fetch at a time 
    const scrollContainer = useRef(null); 
    let isThrottled = false; 
    let moreCardsExist = true; 


    const fetchMoreCards = async (currentSkip) => {

        if (!moreCardsExist) return; 
        if (isThrottled) return; 
        isThrottled = true; 

        try { 
            const response = await fetch(`/api/getExploreCardData?skip=${currentSkip}&limit=${limit}`); 
            if (response.ok) {
                const newClubs = await response.json(); 

                if (newClubs.length > 0) {
                    // Use functional updates to ensure you're using the most recent previous state when updating current state
                    setClubs(prevClubs => [...prevClubs, ...newClubs]);
                    setSkip(prevSkip => prevSkip + limit);
                } else {
                    console.log("All cards have been fetched."); 
                    moreCardsExist = false; 
                }
                

            } else {
                console.error('HTTP error when fetching new cards: ', response.status, response.statusText);
            }
            
        } catch (e) { 
            console.error('Error when fetching new cards: ', e);
        }

        // to prevent multiple concurrent calls which may create weird behavior 
        setTimeout(() => {
            isThrottled = false; 
        }, 200); 
    }


    useEffect(() => {

        const handleScroll = () => {

            // find whether the user has scrolled to the bottom of the grid 
            const cardGrid = scrollContainer.current; 
            const offset = 50;  // will fetch more cards when you scroll to within this many px of the bottom 
            const isNearBottom = cardGrid.scrollTop + cardGrid.clientHeight + offset >= cardGrid.scrollHeight; 

            if (isNearBottom) {
                fetchMoreCards(skip); 
            }
        }

        const cardGrid = scrollContainer.current; 
        cardGrid.addEventListener("scroll", handleScroll); 

        // this runs when the component unmounts and before each subsequent time useEffect runs 
        return () => { 
            cardGrid.removeEventListener("scroll", handleScroll); 
        }
    }, [skip])  // useEffect runs on initial render and whenever `skip` is updated 



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
                    spacing={4} alignItems="center" pr={4}
                    maxHeight="80vh" overflowY="auto"  // makes content in this element scrollable 
                    ref={scrollContainer}  // React makes scrollContainer point to this DOM element
                    
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
    try { 

        const client = await clientPromise;
        const db = client.db("clubs");
        const collection = db.collection("clubsMain"); 

        const limit = 12;  // how many clubs to fetch initially 

        let clubs = await collection.find({}).limit(limit).toArray();
        clubs = JSON.parse(JSON.stringify(clubs));

        return {
            props: {
                success: true,
                initialClubs: clubs
            }
        };

    } catch (e) { 
        
        console.error(e);
        return {
            props: { success: false },
        };
    }
}