import Head from 'next/head';
import { useRouter } from 'next/router';
import clientPromise from '../../lib/mongodb';
import NavBar from '../../components/NavBar';
import { Container, Box, Image, Heading, Badge, SimpleGrid, Avatar, Flex, Text, Divider, Icon, Link, HStack } from '@chakra-ui/react';

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
import { FaInstagram, FaGlobe, FaFacebookF } from "react-icons/fa";
import { MdEmail } from "react-icons/md";



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

                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
                    <Box>
                        <Text fontSize='xl' mt={2} textDecoration='underline' fontWeight='bold'>FAQ</Text>
                        {
                            club.faq.map((e, i) =>
                            {
                                return (
                                    <Box mt={2}>
                                        <Text fontWeight='bold'>
                                            {e.question}
                                        </Text>
                                        <Text>{e.answer}</Text>
                                    </Box>
                                );
                            })
                        }
                    </Box>

                    <Box>
                        <Text fontSize='xl' mt={2} textDecoration='underline' fontWeight='bold'>FAQ</Text>

                        <Text><Text as='span' fontWeight='bold'>Meeting Times</Text>: {club.meetingTimes}</Text>

                        <Text><Text as='span' fontWeight='bold'># Members</Text>: {club.numMembers}</Text>

                        <Text><Text as='span' fontWeight='bold'>Weekly Commitment</Text>: {club.commitmentTime}</Text>


                        <Text><Text as='span' fontWeight='bold'>Last Updated</Text>: {new Date(club.lastUpdated).toLocaleDateString()}</Text>

                        <Text fontSize='xl' mt={2} textDecoration='underline' fontWeight='bold'>Socials</Text>


                        <HStack spacing={4}>
                            {club.links.insta && <Link href={club.links.insta} as='a'>
                                <Icon as={FaInstagram} w={8} h={8} color='red.500' _hover={{
                                    color: 'blue.900'
                                }} />
                            </Link>}

                            {club.links.website && <Link href={club.links.website} as='a'>
                                <Icon as={FaGlobe} w={8} h={8} color='blue.500' _hover={{
                                    color: 'blue.900'
                                }} />
                            </Link>}


                            {club.links.facebook && <Link href={club.links.facebook} as='a'>
                                <Icon as={FaFacebookF} w={8} h={8} color='blue.300' _hover={{
                                    color: 'blue.900'
                                }} />
                            </Link>}

                            {club.links.email && <Link href={`mailto:${club.links.email}`} as='a'>
                                <Icon as={MdEmail} w={8} h={8} color='purple.300' _hover={{
                                    color: 'blue.900'
                                }} />
                            </Link>}
                        </HStack>


                    </Box>
                </SimpleGrid>

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