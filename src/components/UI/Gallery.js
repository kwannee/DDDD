import React, { useRef } from 'react';
import classes from './Gallery.module.css';
import { Carousel } from 'antd';
import LazyImage from './LazyImage';
import { Link } from 'react-router-dom';

const Gallery = ({ height, images, main }) => {
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
        {main
          ? images.map((image, idx) => {
              const [category, detailCategory, projectName] = image.name.split('***');
              return (
                <Link
                  to={`../project/${category}/${detailCategory}/${projectName}`.replace(
                    /\%20/gi,
                    ' ',
                  )}
                >
                  <LazyImage
                    height={height}
                    key={idx}
                    className={classes.image}
                    src={image.src}
                    alt="imag"
                  />
                </Link>
              );
            })
          : images.map((image, idx) => (
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
