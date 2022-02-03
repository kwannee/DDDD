import React from 'react';
import Gallery from '../UI/Gallery';
import classes from './LoginImages.module.css';
const LoginImages = () => {
  return (
    <div className={classes.images}>
      <Gallery images={[]} height={'500px'} />
    </div>
  );
};

export default LoginImages;
