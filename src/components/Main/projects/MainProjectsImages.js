import { Carousel } from 'antd';
import React, { useRef } from 'react';
import { deleteFileByPath } from '../../../firebase/utils/storage';
import { makePath } from '../../../utils/string';
import classes from './MainProjectsImages.module.css';

const MainProjectsImages = ({ images }) => {
  const carouselRef = useRef();
  const clickPrevHandler = () => {
    carouselRef.current.prev();
  };
  const clickNextHandler = () => {
    carouselRef.current.next();
  };
  const deleteImageHandler = async (e) => {
    const name = e.target.name;
    if (window.confirm('이 그림을 삭제하시겠습니까?')) {
      await deleteFileByPath(makePath(`welcome/${name}`));
      window.location.reload();
    }
  };
  return (
    <div style={{ position: 'relative' }} className={classes.gallery}>
      <Carousel ref={carouselRef} autoplay autoplaySpeed={10000}>
        {images.map((image, idx) => (
          <img
            onClick={deleteImageHandler}
            name={image.name}
            key={idx}
            className={classes.image}
            src={image.src}
            alt={image.name}
          />
        ))}
      </Carousel>
      <div
        onClick={clickPrevHandler}
        className={`${classes.arrow} ${classes.prev}`}
      ></div>
      <div
        onClick={clickNextHandler}
        className={`${classes.arrow} ${classes.next}`}
      ></div>
    </div>
  );
};

export default MainProjectsImages;
