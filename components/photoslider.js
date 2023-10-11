import React, { useState } from 'react';
import { Box, Button, Container, Image } from '@chakra-ui/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

function PhotoSlider()
{
  // 4 minimum and unlimited after
  const photos = ['/img/testingImageScroller1.jpg', '/img/testingImageScroller2.jpg', '/img/testingImageScroller3.jpg', '/img/testingImageScroller4.jpg', '/img/testingImageScroller5.jpg'];

  return (
    <Swiper
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
    </Swiper>
  );
}

export default PhotoSlider;