import React, { useState } from 'react';
import classes from './UploadTitle.module.css';
import { useDispatch } from 'react-redux';
import { uploadActions } from '../../../store/upload-slice';

const UploadTitle = () => {
  const dispatch = useDispatch();
  const [eng, setEng] = useState('');
  const [kor, setKor] = useState('');
  const changeEngNameHandler = (e) => {
    setEng(e.target.value);
    dispatch(uploadActions.setEngName(e.target.value));
  };
  const changeKorNameHandler = (e) => {
    setKor(e.target.value);
    dispatch(uploadActions.setKorName(e.target.value));
  };
  return (
    <div className={classes.wrapper}>
      <form>
        <label>Project Name (English)</label>
        <input value={eng} onChange={changeEngNameHandler} type="text" />
      </form>
      <form>
        <label>Project Name (Korean)</label>
        <input value={kor} onChange={changeKorNameHandler} type="text" />
      </form>
    </div>
  );
};

export default UploadTitle;
