import React from 'react';
import { useSelector } from 'react-redux';
import Gallery from '../../UI/Gallery';
import classes from './MainProjectsImages.module.css';

const MainProjectsImages = ({ images: imagesProp = [] }) => {
  const images = useSelector((state) => state.upload.images);
  return (
    <div className={classes.images}>
      <Gallery images={imagesProp} height={'500px'} />
    </div>
  );
};

export default MainProjectsImages;
