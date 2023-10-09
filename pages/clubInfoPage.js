import Head from 'next/head'
import clientPromise from '../lib/mongodb'
import PhotoSlider from "../components/photoslider.js";
import NavBar from "../components/NavBar"
import { Button, Center, Box, Image, Flex, Badge, Text, ButtonGroup, Heading, Container, SimpleGrid, HStack, Avatar } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import React, { useContext } from "react";
import dynamic from 'next/dynamic';
import mdsource from 'next-remove-imports/README.md';
import "@uiw/react-markdown-preview/markdown.css";
import "@uiw/react-md-editor/markdown-editor.css";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import styles from './markdown.module.css';

import { EffectCoverflow, Pagination } from 'swiper/modules';

import { MarkdownPreviewProps } from "@uiw/react-markdown-preview";

const photos = ['/img/testingImageScroller1.jpg', '/img/testingImageScroller2.jpg', '/img/testingImageScroller3.jpg', '/img/testingImageScroller4.jpg', '/img/testingImageScroller5.jpg'];
const [value, setValue] = React.useState("**Hello world!!!**");

const GitHubCorners = dynamic(
  () => import("@uiw/react-github-corners").then((mod) => mod.default),
  { ssr: false }
);

const MDEditor = dynamic(
  () => import("@uiw/react-md-editor").then((mod) => mod.default),
  { ssr: false }
);

const MarkdownPreview = dynamic(
  () => import("@uiw/react-markdown-preview").then((mod) => mod.default),
  { ssr: false }
);



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
        <title>GT Club Explorer Club Info Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        marginBottom="40px"
      >
        <Image
          src="/img/loremIpsum.png"
          width="100%"
          height="100px"
          objectFit="cover"
        />
      </Box>
      <Container maxW='container.xl' mx="auto" spacing={16} marginBottom="40px">
        <Flex alignItems="center">
          <Avatar
            size="2xl"
            mx="auto"
            display={{ base: "none", lg: "block" }}
            borderRadius='full'
            src="\img\lorem-ipsum-circle-icon.png"
            marginRight="40px"
          />
          <Heading
            fontSize={{ base: '5xl', lg: '7xl' }}
            fontWeight='extrabold'
          >
            Georgia Tech Lorem Ipsum Association
          </Heading>
        </Flex>
      </Container>
      <Container maxW='container.lg' mx="auto" spacing={16}>
        <Badge ml='2' fontSize='md' colorScheme='green'>Cultural</Badge>
        <Badge ml='2' fontSize='md' colorScheme='blue'>Entertainment</Badge>
        <Badge ml='2' fontSize='md' colorScheme='red'>Career</Badge>
        <Badge ml='2' fontSize='md' colorScheme='purple'>Mechanical Engineering</Badge>
        <Badge ml='2' fontSize='md' colorScheme='yellow'>Spaghetti Enthusiasts</Badge>
      </Container>

      <Container maxW='container.lg' mx="auto" spacing={16} marginBottom="20px" marginTop="20px">

        <MDEditor 
          value={value}
          onChange={setValue}
        />
        <MDEditor.Markdown source={value} style={{ whiteSpace: 'pre-wrap' }} />

        {/* <Heading fontSize={{base: '3xl', lg: '5xl'}} fontWeight='extrabold'>About Us</Heading>
        <Text>Welcome to the Lorem Ipsum Association—your gateway to enlightenment through gibberish! 
          We're a collective of passionate individuals captivated by the awe-inspiring ways of Lorem Ipsum, 
          a Roman philosopher who was centuries ahead of his time. Contrary to popular belief, Lorem Ipsum did not just fill in the blanks 
          of history; he defined a revolutionary outlook on the visual design landscape.</Text>     */}    
      </Container>
      <Image mx="auto" display={{base: "none", lg: "block"}} src="/img/LoremIpsumAboutPhoto.PNG" maxH='250px' />

      <Container maxW='container.lg' mx="auto" spacing={16} marginBottom="20px" marginTop="20px">
        <Heading fontSize={{base: '3xl', lg: '5xl'}} fontWeight='extrabold'>Our Mission</Heading>
        <Text>Our mission is to delve deep into the philosophical essence of Lorem Ipsum's teachings, which are the foundation of modern UI/UX design. In a world obsessed with meaningful content, we dare to question: "Is gibberish, in itself, a form of expression?" We strive to spread this unconventional wisdom by organizing workshops, conferences, and code-alongs that dissect the intricacies of placing "placeholder" text in designs where words are not necessary.</Text>
      </Container>

      <Container maxW='container.lg' mx="auto" spacing={16} marginBottom="20px" marginTop="20px">
        <Heading fontSize={{base: '3xl', lg: '5xl'}} fontWeight='extrabold'>Core Activities</Heading>
        <Text>Lorem Lectures: Bi-monthly seminars exploring the roots and influence of Lorem Ipsum in classical philosophy and modern design.
        Project Dolor: An ambitious undertaking to compile a database of all placeholder text ever used in the world.
        Sit Amet Initiative: A socially-driven campaign that advocates for the use of meaningless text in a meaningful way to combat information overload</Text>
      </Container>

      <Container maxW='container.lg' mx="auto" spacing={16} marginBottom="20px" marginTop="20px">
        <Heading fontSize={{base: '3xl', lg: '5xl'}} fontWeight='extrabold'>Special Projects</Heading>
        <Text>Our mission is to delve deep into the philosophical essence of Lorem Ipsum's teachings, which are the foundation of modern UI/UX design. In a world obsessed with meaningful content, we dare to question: "Is gibberish, in itself, a form of expression?" We strive to spread this unconventional wisdom by organizing workshops, conferences, and code-alongs that dissect the intricacies of placing "placeholder" text in designs where words are not necessary.</Text>
      </Container>

      <Container maxW='container.lg' mx="auto" spacing={16} marginTop="20px" marginBottom="100px">
        <Heading fontSize={{base: '3xl', lg: '5xl'}} fontWeight='extrabold'>Join Us!</Heading>
        <Text>We're always on the lookout for aspiring philosophers and designers who dare to question the norm. Join us on this thrilling adventure as we decode the mysteries of the ultimate placeholder. It's a journey filled with textual voids, nonsensical symbols, and, of course, a lot of fun.
        We hope to see you at our next gathering, where together we'll chant, "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        Feel free to reach out if you're keen on joining a club that believes in the power of nonsense to make perfect sense!</Text>
      </Container>
      
      {/*<PhotoSlider />*/}
      {/* <Swiper
      spaceBetween={50}
      slidesPerView={3}
      navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      style={{ margin: '0 50px' }}
      >
        {photos.map((photo, index) => (
          <SwiperSlide key={index}>
            <Image src={photo} alt={`Photo ${index + 1}`} width={300} height={200} />
          </SwiperSlide>
        ))}
      </Swiper> */}
      <Container maxW='container.lg' mx="auto" spacing={16} marginTop="20px" marginBottom="100px">
        <PhotoSlider />
      </Container>
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
      zIndex="9999">
      <Text>Copyright 2023 - GT Web Dev</Text>
    </Flex>
    </div>
)
  }