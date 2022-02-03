import React, { useRef, useEffect, useState } from 'react';
import classes from './Gallery.module.css';
import { Carousel } from 'antd';
import LazyImage from './LazyImage';
import { useLocation } from 'react-router-dom';

const Gallery = ({ height, images }) => {
  const carouselRef = useRef();
  const clickPrevHandler = () => {
    carouselRef.current.prev();
  };

  const clickNextHandler = () => {
    carouselRef.current.next();
  };

  return (
    <div style={{ height: `${height}`, position: 'relative' }} className={classes.gallery}>
      <Carousel ref={carouselRef} autoplay autoplaySpeed={10000}>
        {images.map((image, idx) => (
          <LazyImage
            height={height}
            key={idx}
            className={classes.image}
            src={image.src}
            alt="imag"
          />
        ))}
      </Carousel>
      <div onClick={clickPrevHandler} className={`${classes.arrow} ${classes.prev}`}></div>
      <div onClick={clickNextHandler} className={`${classes.arrow} ${classes.next}`}></div>
    </div>
  );
};

export default Gallery;
