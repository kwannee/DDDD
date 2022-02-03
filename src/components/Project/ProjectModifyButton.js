import React from 'react';
import classes from './ProjectModifyButton.module.css';
const ProjectModifyButton = ({ onClick }) => {
  return (
    <div className={classes['modify-btn-div']}>
      <p onClick={onClick} className={classes['modify-btn']}>
        +
      </p>
    </div>
  );
};

export default ProjectModifyButton;
