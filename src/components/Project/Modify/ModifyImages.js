import { Carousel } from 'antd';
import React, { useRef } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { uploadActions } from '../../../store/upload-slice';
import LazyImage from '../../UI/LazyImage';
import classes from './ModifyImages.module.css';

const ModifyImages = ({ images }) => {
  const carouselRef = useRef();
  const clickPrevHandler = () => {
    carouselRef.current.prev();
  };

  const clickNextHandler = () => {
    carouselRef.current.next();
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(uploadActions.setImages(images));
  }, [images, dispatch]);

  return (
    <div style={{ position: 'relative' }} className={classes.gallery}>
      <Carousel ref={carouselRef} autoplay autoplaySpeed={10000}>
        {images.map((image, idx) => (
          <>
            <LazyImage key={idx} className={classes.image} src={image.src} alt="imag" />
            <div className={classes['delete-btn']}>
              <p>X</p>
            </div>
          </>
        ))}
      </Carousel>
      <div onClick={clickPrevHandler} className={`${classes.arrow} ${classes.prev}`}></div>
      <div onClick={clickNextHandler} className={`${classes.arrow} ${classes.next}`}></div>
    </div>
  );
};

export default ModifyImages;
