import React from 'react';
import classes from './ModifyDescription.module.css';
import { Input } from 'antd';
const { TextArea } = Input;

const ModifyDescription = ({ description, setDescription }) => {
  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };
  return (
    <form className={classes.form}>
      <label>Description</label>
      <TextArea
        value={description}
        onChange={onChangeDescription}
        className={classes.textarea}
        bordered={false}
        rows={10}
      />
    </form>
  );
};

export default ModifyDescription;
