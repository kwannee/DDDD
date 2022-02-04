import React from 'react';
import classes from './MainProjectsUploadButton.module.css';

const MainProjectsUploadButton = ({ onClick }) => {
  return (
    <p onClick={onClick} className={classes.downBtn}>
      ▼
    </p>
  );
};

export default MainProjectsUploadButton;
