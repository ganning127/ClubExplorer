import Head from 'next/head'
import { Box, Flex, Input, Grid } from "@chakra-ui/react";
import Navbar from "../components/NavBar";
import Card from "../components/ExploreCard";



export default function Explore() {


  return (
    <>
      <Head>
        <title>GT Club Explorer - Find Clubs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box>
      <Navbar />
      <Flex>

        {/* Left Sidebar */}
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

        {/* Main Content */}
        <Box w="80%" p={4}>
          {/* Search Bar */}
          <Box mb={4}>
            <Input placeholder="Search organizations" />
          </Box>

          {/* 2-Column Grid of Cards */}
          <Grid templateColumns="repeat(2, 1fr)" gap={4}>
            <Card title="Organization 1" description="Description 1" />
            <Card title="Organization 2" description="Description 2" />
            <Card title="Organization 3" description="Description 3" />
            <Card title="Organization 4" description="Description 4" />
            <Card title="Organization 5" description="Description 5" />
            <Card title="Organization 6" description="Description 6" />
            {/* Add more cards here */}
          </Grid>
        </Box>
      </Flex>
    </Box>


    </>
  );
}

