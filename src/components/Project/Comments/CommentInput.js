import { useState } from 'react';
import classes from './CommentInput.module.css';
import { getAuth } from 'firebase/auth';
import { useLocation } from 'react-router-dom';
import { updateDataByPath } from '../../../firebase/utils/db';
import { Input } from 'antd';
const { TextArea } = Input;

const CommentInput = ({ reloadHandler }) => {
  const [, , category, detailCategory, projectName] = useLocation().pathname.split('/');
  const [inputValue, setInputValue] = useState('');
  const userName = getAuth().currentUser.displayName;
  const submitCommentHandler = (e) => {
    e.preventDefault();
    if (!inputValue) {
      return;
    }
    const comment = {
      [new Date().getTime()]: {
        comment: inputValue,
        name: userName,
        date: new Date().toISOString().split('T')[0],
      },
    };
    setInputValue('');
    updateDataByPath({
      path: `projects/${category}/${detailCategory}/${projectName}/comments`,
      data: comment,
    });
    reloadHandler();
  };
  const inputChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className={classes.commentInput}>
      {userName}
      <div className={classes.input}>
        <TextArea
          value={inputValue}
          onChange={inputChangeHandler}
          bordered={false}
          placeholder="Comment"
          autoSize={{ minRows: 2, maxRows: 2 }}
        />
        <div className={classes.submit} onClick={submitCommentHandler}>
          ▼
        </div>
      </div>
    </div>
  );
};

export default CommentInput;
