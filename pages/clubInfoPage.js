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
      <Head>
        <title>GT Club Explorer Club Info Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


)
  }