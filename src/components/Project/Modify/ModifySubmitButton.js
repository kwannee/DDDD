import React from 'react';
import { setDataByPath } from '../../../firebase/utils/db';
import classes from './ModifySubmitButton.module.css';

const ModifySubmitButton = ({ onClick }) => {
  return (
    <div className={classes['modify-submit-btn-div']}>
      <p onClick={onClick} className={classes['modify-submit-btn']}>
        ▼
      </p>
    </div>
  );
};

export default ModifySubmitButton;
