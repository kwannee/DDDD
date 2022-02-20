import React, { useState } from 'react';
import classes from './ModifyTitle.module.css';
import { useDispatch } from 'react-redux';
import { uploadActions } from '../../../store/upload-slice';

const ModifyTitle = ({ engName, korName, setEngName, setKorName }) => {
  const changeEngNameHandler = (e) => {
    setEngName(e.target.value);
  };
  const changeKorNameHandler = (e) => {
    setKorName(e.target.value);
  };
  return (
    <div className={classes.wrapper}>
      <form>
        <label>Project Name (English)</label>
        <input value={engName} onChange={changeEngNameHandler} type="text" />
      </form>
      <form>
        <label>Project Name (Korean)</label>
        <input value={korName} onChange={changeKorNameHandler} type="text" />
      </form>
    </div>
  );
};

export default ModifyTitle;
