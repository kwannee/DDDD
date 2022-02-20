import { useState } from 'react';
import classes from './CommentInput.module.css';
import { getAuth } from 'firebase/auth';
import { useLocation } from 'react-router-dom';
import { updateDataByPath } from '../../../firebase/utils/db';
import { Input } from 'antd';
import { makePath } from '../../../utils/string';
const { TextArea } = Input;

const CommentInput = ({ reloadHandler }) => {
  const auth = getAuth();
  const [, , category, detailCategory, projectName] = useLocation().pathname.split('/');
  const [inputValue, setInputValue] = useState('');
  const userName = getAuth().currentUser.displayName;
  const path = `projects/${category}/${detailCategory}/${projectName}/comments`;
  const submitCommentHandler = async (e) => {
    e.preventDefault();
    if (!inputValue) {
      return;
    }
    const comment = {
      [new Date().getTime()]: {
        comment: inputValue,
        name: userName,
        uid: auth.currentUser.uid,
        date: new Date().toISOString().split('T')[0],
      },
    };
    setInputValue('');
    await updateDataByPath({
      path: makePath(path),
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
