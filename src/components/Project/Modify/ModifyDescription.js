import React, { useState } from 'react';
import classes from './ModifyDescription.module.css';
import { useDispatch } from 'react-redux';
import { uploadActions } from '../../../store/upload-slice';
import { Input } from 'antd';
const { TextArea } = Input;

const ModifyDescription = ({ description: descriptionProp }) => {
  const dispatch = useDispatch();
  const [description, setDescription] = useState(descriptionProp);
  const changeDescriptionHandler = (e) => {
    setDescription(e.target.value);
    dispatch(uploadActions.setDescription(e.target.value));
  };

  return (
    <form className={classes.form}>
      <label>Description</label>
      <TextArea
        value={description}
        onChange={changeDescriptionHandler}
        className={classes.textarea}
        bordered={false}
        rows={10}
      />
    </form>
  );
};

export default ModifyDescription;
