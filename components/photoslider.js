import React, { useState } from 'react';
import { Box, Button, Container, HStack } from '@chakra-ui/react';

function PhotoSlider() {
  // 4 minimum and unlimited after
  const photos = ['/img/testingImageScroller1.jpg', '/img/testingImageScroller2.jpg', '/img/testingImageScroller3.jpg', '/img/testingImageScroller4.jpg', '/img/testingImageScroller5.jpg'];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? photos.length - 4 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === photos.length - 4 ? 0 : prevIndex + 1));
  };

  return (
    <Box maxW="1000px" mx="auto" marginBottom="100px"> {/* Adjust depending on what looks good */}
      <HStack mx="auto" spacing={2} overflow="hidden">
        {photos.slice(currentIndex, currentIndex + 4).map((photo, index) => (
          <Box key={index} w="25%" p={2}>
            <img src={photo} alt={`Photo ${index + 1}`} width="100%" />
          </Box>
        ))}
      </HStack>
      <Container mt={10} mb={10} spacing={100}>
        <HStack spacing={80}>
          <Button onClick={prevSlide} border='2px' bg='#16425B' color="white"
          _hover={{
            borderColor:"yellow.500",
            textColor: "yellow.500",
            background: "white",
            textColor: "black",}}>Previous</Button>
          <Button onClick={nextSlide} 
          border='2px' bg='#16425B' color="white"
          _hover={{
            borderColor:"yellow.500",
            textColor: "yellow.500",
            background: "white",
            textColor: "black",}}>Next</Button>
        </HStack>
      </Container>
    </Box>
  );
}

export default PhotoSlider;