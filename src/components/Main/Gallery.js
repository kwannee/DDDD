import React, { useState } from 'react';
import classes from './Gallery.module.css';
import { Carousel } from 'antd';
import LazyImage from '../UI/LazyImage';

const Gallery = () => {
  const [images, setImages] = useState([
    'https://picsum.photos/1080/500',
    'https://picsum.photos/1080/501',
    'https://picsum.photos/1080/502',
    'https://picsum.photos/1080/503',
    'https://picsum.photos/1080/504',
    'https://picsum.photos/1080/505',
  ]);

  return (
    <div className={classes.gallery}>
      <Carousel effect="fade" autoplay autoplaySpeed={10000}>
        {images.map((image, idx) => (
          <LazyImage key={idx} className={classes.image} src={image} alt="imag" />
        ))}
      </Carousel>
    </div>
  );
};

export default Gallery;
