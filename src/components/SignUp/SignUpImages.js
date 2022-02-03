import React from 'react';
import Gallery from '../UI/Gallery';
import classes from './SignUpImages.module.css';
const SignUpImages = () => {
  return (
    <div className={classes.images}>
      <Gallery images={[]} height={'500px'} />
    </div>
  );
};

export default SignUpImages;
