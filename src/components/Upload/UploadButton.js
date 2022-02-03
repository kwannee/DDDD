import React from 'react';
import classes from './UploadButton.module.css';
const UploadButton = ({ onClick }) => {
  return (
    <p onClick={onClick} className={classes.downBtn}>
      ▼
    </p>
  );
};

export default UploadButton;
