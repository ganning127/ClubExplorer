import Head from 'next/head';
import { useRouter } from 'next/router';
import clientPromise from '../../lib/mongodb';
import NavBar from '../../components/NavBar';
import { Container, Box, Image, Heading, Badge, Avatar, Flex, Text, Divider } from '@chakra-ui/react';

// Markdown Parser imports
import dynamic from 'next/dynamic';
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Page({ club })
{
    return (
        <>
            <Head>
                <title>{club.name} | GT Club Explorer</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <NavBar />
            {club.media.banner && <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                marginBottom="40px"
            >
                <Image
                    src={club.media.banner}
                    width="100%"
                    height="100px"
                    objectFit="cover"
                />
            </Box>}

            <Container maxW='container.xl' mx="auto" spacing={16} mb={16}>
                <Flex alignItems="center">
                    <Avatar
                        size="2xl"
                        display={{ base: "none", lg: "block" }}
                        src={club.media.logo}
                        marginRight="40px"
                    />

                    <Box>
                        <Heading
                            fontSize={{ base: '5xl', lg: '7xl' }}
                            fontWeight='extrabold'
                        >
                            {club.name}
                        </Heading>

                        <Box my={2}>
                            {
                                club.tags.map((tag, index) =>
                                {
                                    let ml = 4;

                                    if (tag?.name)
                                    {
                                        return <Badge key={index} colorScheme={tag.colorScheme} fontSize='md' ml={index == 0 ? 0 : ml}>{tag.name} </Badge>;
                                    }
                                    return (
                                        <Badge key={index} colorScheme="blue" fontSize='md' ml={index == 0 ? 0 : ml}>{tag}</Badge>
                                    );
                                })
                            }
                        </Box>
                        <Text fontSize='lg'>{club.shortDesc}</Text>

                    </Box>
                </Flex>

                <Divider mt={4} borderColor='gray.500' />


                <Box mt={16} mb={16}>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={50}
                        slidesPerView={2}
                        navigation
                        pagination={{ clickable: true }}
                    >
                        {club.media.images.length > 0 && club.media.images.map((photo, index) => (
                            <SwiperSlide key={index}>
                                <Image src={photo} alt={`Photo ${index + 1}`} maxH='300px' mx='auto' />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Box>

                <Divider mb={4} borderColor='gray.500' />


                <MDEditor
                    value={club.longDesc}
                    data-color-mode="light"
                    preview="preview"
                    height="80vh"
                />
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

        </>
    );
}

export async function getServerSideProps(context)
{
    try
    {
        const slug = context.query.slug;
        const client = await clientPromise;
        const db = client.db("clubs");
        const collection = db.collection("clubsMain");

        let res = await collection.find({ slug: slug }).limit(1).toArray();
        res = JSON.parse(JSON.stringify(res))[0];

        return {
            props: {
                success: true,
                club: res
            }
        };
    } catch (e)
    {
        console.error(e);
        return {
            props: {
                success: false,
                club: null
            }
        };
    }

}