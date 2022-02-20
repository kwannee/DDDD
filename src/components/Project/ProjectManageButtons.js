import React from 'react';
import classes from './ProjectManageButtons.module.css';
import ProjectDeleteButton from './ProjectDeleteButton';
import ProjectModifyButton from './ProjectModifyButton';

const ProjectManageButtons = ({ toggleModifyHandler }) => {
  return (
    <div className={classes['btns-div']}>
      <ProjectDeleteButton />
      <ProjectModifyButton onClick={toggleModifyHandler} />
    </div>
  );
};

export default ProjectManageButtons;
