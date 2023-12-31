import Head from 'next/head';
import NavBar from "../components/NavBar";
import React, { useState, useEffect} from "react";
import {
  Heading, Text, Box, Center, Flex
 } from '@chakra-ui/react';

export default function Home() {
    return (
        <>
          <Head>
            <title>GT Club Explorer Add Club Submitted</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <Flex flexDirection="column" minHeight="100vh">
            <NavBar />

            <Center mt="13%">
              <Box display="block" maxW={{ base: '80%', lg: '800px' }}>
                <Heading mt="10" textAlign="center" fontSize={{ base: '5xl', lg: '6xl' }} fontWeight='extrabold'>
                  Thank you!
                </Heading>

                <Text mt="5" fontSize={"22px"} textAlign="center">
                  The club explorer team will review your submission and add it to the website as soon as possible. 
                  The following process may take up 10 to 15 business days so thank you for your patience.
                </Text>
              </Box>
            </Center>

            <Flex
              backgroundColor="black"
              color="white"
              textAlign="center"
              justifyContent="center"
              alignItems="center"
              bottom="0"
              width="100%"
              height="30px"
              paddingX="20px"
              mt="auto">
              <Text>Copyright 2023 - GT Web Dev</Text>
            </Flex>
          </Flex>
        </>
    );
}
