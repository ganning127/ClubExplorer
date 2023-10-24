import { Box, Link, Heading, HStack, Badge, Text, Img } from "@chakra-ui/react";


export default function ExploreCard({ club, index })
{

    return (
        <Link href={`/club/${club.slug}`} _hover={{}} key={index}>
            <Box p={4} border='1px solid lightgray' rounded="md" _hover={{
                background: "gray.100",
                transition: "all .2s"
            }}>

                <Img src={club.media.images[0]} rounded='md' />
                <Heading fontSize="lg" mt={4}>
                    {club.name}
                </Heading>

                {/* <Text>{club._id}</Text>   */}
                {/* temporary, to distinguish cards since they all have same data */}

                <HStack mt={2} flexWrap="wrap" justifyContent={{ base: "center", lg: "left" }}> {
                    club.tags.map((tag, index) =>
                    {
                        return (
                            <Badge key={index} colorScheme="blue">{tag}</Badge>
                        );
                    })
                }</HStack>

                <Text fontSize='md' mt={4}>
                    {club.shortDesc}
                </Text>
            </Box>
        </Link>
    );
}