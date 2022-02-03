import React, { useState } from 'react';
import classes from './ModifyTitle.module.css';
import { useDispatch } from 'react-redux';
import { uploadActions } from '../../../store/upload-slice';

const ModifyTitle = ({ eng: engProp, kor: korProp }) => {
  const dispatch = useDispatch();
  const [eng, setEng] = useState(engProp);
  const [kor, setKor] = useState(korProp);
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

export default ModifyTitle;
