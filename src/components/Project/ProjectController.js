import React from 'react';
import classes from './ProjectController.module.css';

const ProjectController = ({ onNextClick, onPrevClick, showNextAlert, showPrevAlert }) => {
  return (
    <div className={classes.projectController}>
      <p className={classes.move} onClick={onPrevClick}>
        Prev
      </p>
      <p className={classes.move} onClick={onNextClick}>
        Next
      </p>
      <p
        className={`${classes.alert} ${classes['prev-alert']} ${
          showPrevAlert ? `${classes.show}` : ''
        }`}
      >
        No Prev Project
      </p>
      <p
        className={`${classes.alert} ${classes['next-alert']} ${
          showNextAlert ? `${classes.show}` : ''
        }`}
      >
        No Next Project
      </p>
    </div>
  );
};

export default ProjectController;
