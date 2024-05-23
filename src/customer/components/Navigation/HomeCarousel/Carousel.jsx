import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { homeCarouselData } from './CarouselData';

const Carousel = () => {
  const items = homeCarouselData.map((item, index) => (
    <img
      key={index}
      className='cursor-pointer'
      role='presentation'
      src={item.image}
      alt=''
      onDragStart={(e) => e.preventDefault()} // Prevent drag start to avoid issues in the carousel
      style={{ width: '100%', height: '550px' }} // Ensure the image sizes are appropriate
    />
  ));

  return (
    <AliceCarousel
      mouseTracking
      items={items}
      autoPlay
      autoPlayInterval={3000}
      infinite
      disableButtonsControls
    />
  );
};

export default Carousel;
