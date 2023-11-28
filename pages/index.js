import Head from 'next/head';
import NavBar from "../components/NavBar";
import { Button, Center, Box, Image, Flex, Badge, Text, ButtonGroup, Heading, Container, SimpleGrid, HStack } from '@chakra-ui/react';


const teamMembers = [
  {
    name: 'Ganning Xu',
    role: 'Team Lead',
    bio: 'I fell in love with programming in 9th grade, and I love being able to make a difference in the lives of others through code. These days, I am developing Chrome extensions, mobile apps, websites for non-profits, and machine learning models. In my free time, I love swimming, biking, and running!',
    imageUrl: 'img/ganning.jpg',
  },
  {
    name: 'Ian Valderas',
    role: 'Front-End Developer, Front-End Testing, Web Designer',
    bio: 'I developed a deep love for computers, diving into programming languages and working for tech companies to enhance my understanding. This same passion fuels the diverse projects I work on today that ranged from Automation Development, Web Development, Game Development, and much more. Beyond coding, I find balance in hobbies like golf, video games, Arduino tinkering, and staying active by working out at the gym.',
    imageUrl: 'img/ian.jpg',
  },
  {
    name: 'Jonathan',
    role: 'Front-End Developer, Back-End Developer',
    bio: 'While studying physics, I used machine learning and other statistical tools to understand different facets of the world. Over time, it was not enough to understand - I wanted to make things. My interest in programming expanded, and now I look forward to learning and sharpening my skills every day. When I have time, I also enjoy hiking in the North Georgia mountains.',
    imageUrl: 'img/jiyaski.png',
  },
  {
    name: 'Om',
    role: 'roles here',
    bio: 'bio here',
    imageUrl: 'img/picname.jpg',
  },
  {
    name: 'Justin Kang',
    role: 'Backend/Frontend Programmer',
    bio: 'I began programming in high school, delving deep into topics around machine learning and deep learning. Since then, I have immersed myself in learning more about different technologies, such as cloud computing and web development.',
    imageUrl: 'img/picname.jpg',
  },
  {
    name: 'Angelina',
    role: 'Front-End Developer, Back-End Developer',
    bio: 'While coding robots on my high school robotics team, my passion for programming and computer science blossomed. Now, fueled by my belief that understanding technology empowers me to use it to enhance our lives, I am enthusiastic about understanding the intricacies of computer science from computer architecture to theory. Beyond the digital realm, I enjoy skiing, painting, and crocheting!',
    imageUrl: 'img/angelina.jpg',
  },
  {
    name: 'Marie Wibisana',
    role: 'Web Designer',
    bio: 'My passion lies in creativity, art, storytelling, and cheese. I also play the ukulele and jam to Disney and anime songs! I am currently learning how to code as a beginner.',
    imageUrl: 'img/marie.jpg',
  },
  {
    name: 'Tony',
    role: 'roles here',
    bio: 'bio here',
    imageUrl: 'img/picname.jpg',
  },
  // Add more team members as needed
];
export default function Home()
{
  return (
    <div className="container">
      <Head>
        <title>GT Club Explorer Landing Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <Container maxW='container.lg' mx="auto" spacing={16}>

        <SimpleGrid columns={{ base: 1, lg: 2 }} alignItems='center' mt={8} textAlign={{ base: "center", lg: "left" }}>
          <Box>
            <Heading fontSize={{ base: '5xl', lg: '7xl' }} fontWeight='extrabold'>Georgia Tech <br /> <Text as='span' color='#16425B'>Club Explorer</Text></Heading>

            <HStack justify={{ base: "center", lg: "flex-start" }}>
              <Button border='2px' bg='#16425B' color="white" mt={4} mb={4}
                _hover={{
                  borderColor: "yellow.500",
                  textColor: "yellow.500",
                  background: "white",
                  textColor: "black",
                }}>Explore Clubs</Button>

              <Button bg="" textColor="#16425B" mt={4} mb={4}
                _hover={{
                  borderColor: "yellow.500",
                  textColor: "yellow.500",
                  background: "white",
                  textColor: "black",
                }}>How It Works</Button>
            </HStack>
          </Box>

          <Image mx="auto" display={{ base: "none", lg: "block" }} src="/img/Georgia-Tech-Yellow-Jackets-Logo.png" maxH='250px' />

        </SimpleGrid>

        {/* TODO:
            - how it works section
            - instead of using "Flex" for the section below, use "SimpleGrid"
        
        */}


        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          paddingBottom={20}
        >
          {Array.from({ length: 3 }).map((_, index) => (
            <Box
              key={index}
              p="5"
              maxW="320px"
              mx={4}
            >
              <Center h="50vh" padding={1}>
                <Box p="5" maxW="320px" borderWidth="3px">
                  <Image borderRadius="md" src="https://www.tun.com/blog/wp-content/uploads/2021/04/36-Popular-High-School-Clubs-To-Explore.jpg" />
                  <Flex align="baseline" mt={2}>
                    <Badge colorScheme="blue">Tags</Badge>
                    <Text
                      textTransform="uppercase"
                      fontSize="sm"
                      paddingLeft={2}
                      color="yellow.600"
                    >
                      Cool &bull; Goofy
                    </Text>
                  </Flex>
                  <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
                    Random Club
                  </Text>
                  <Text mt={2}>Description: yoooooooooooooooo waddup</Text>
                </Box>
              </Center>
            </Box>
          ))}
        </SimpleGrid>
        <Flex direction="column" align="center" justify="center" py={8}>
        <Text fontSize="3xl" fontWeight="bold" mb={4}>
          About Us
        </Text>
        {teamMembers.map((member, index) => (
          <Box key={index} mb={8} textAlign="center">
            <Center>
              <Image src={member.imageUrl} alt={member.name} borderRadius="full" boxSize="150px" mb={4} />
            </Center>
            <Text fontSize="xl" fontWeight="bold" mb={2}>
              {member.name}
            </Text>
            <Text fontSize="md" fontWeight="bold" mb={2} color="gray.500">
              {member.role}
            </Text>
            <Text>{member.bio}</Text>
          </Box>
        ))}
        <Box mt={8} textAlign="center">
          <Text fontSize="2xl" fontWeight="bold" mb={2}>
            Contact Us
          </Text>
          <Text>
            For any questions, please reach out to{' '}
            <Text as="u" color="blue.500"> 
              <a href="mailto:clubexplorer.gt@gmail.com" target="_blank" rel="noopener noreferrer">
                clubexplorer.gt@gmail.com
              </a>
            </Text>
          </Text>
        </Box>
      </Flex>
      </Container>
    
    </div>
  );
}

