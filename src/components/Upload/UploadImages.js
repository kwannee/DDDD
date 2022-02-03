import React from 'react';
import Gallery from '../UI/Gallery';
import classes from './UploadImages.module.css';
import { useSelector } from 'react-redux';

const UploadImages = () => {
  const images = useSelector((state) => state.upload.images);

  return (
    <div className={classes.images}>
      <Gallery images={images} height={'500px'} />
    </div>
  );
};

export default UploadImages;
