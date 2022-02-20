import { getAuth } from 'firebase/auth';
import { useLocation } from 'react-router-dom';
import { getDataByPath, removeDataByPath, setDataByPath } from '../../../firebase/utils/db';
import classes from './Comment.module.css';
import { Input } from 'antd';
import { useEffect, useState } from 'react';
import { makePath } from '../../../utils/string';
const { TextArea } = Input;

const Comment = ({ comment: commentInfo, reloadHandler }) => {
  const auth = getAuth();
  const [, , category, detailCategory, projectName] = useLocation().pathname.split('/');
  const [key, { name: nameProp, comment: commentProp, date, uid }] = commentInfo;
  const [name, setName] = useState(nameProp);
  const [comment, setComment] = useState(commentProp);
  const path = `projects/${category}/${detailCategory}/${projectName}/comments/${key}`;

  const loadCommentWriter = async () => {
    const nickName = await getDataByPath(`users/${uid}`);
    setName(nickName ? nickName : name);
  };
  useEffect(() => {
    loadCommentWriter();
  }, []);
  const removeCommentHandler = async () => {
    await removeDataByPath(makePath(path));
    window.location.reload();
  };

  const [modify, setModify] = useState(false);
  const modifyCommentHandler = () => {
    setModify((prev) => !prev);
  };
  const commentChangeHandler = (e) => {
    setComment(e.target.value);
  };
  const submitCommentHandler = async () => {
    await setDataByPath({
      path: makePath(path, 'comment'),
      data: comment,
    });
    setModify(false);
    reloadHandler();
  };

  return (
    <div key={key} className={classes.comment}>
      <p className={classes['comment-info']}>{`${name} ${date}`}</p>
      {!modify ? (
        <p>{comment}</p>
      ) : (
        <div className={classes.input}>
          <TextArea
            value={comment}
            onChange={commentChangeHandler}
            bordered={false}
            placeholder="Comment Modify"
            autoSize={{ minRows: 1, maxRows: 1 }}
          />
          <p className={classes.submit} onClick={submitCommentHandler}>
            ▼
          </p>
        </div>
      )}
      {auth.currentUser?.displayName === name && (
        <>
          <p onClick={removeCommentHandler} className={classes['delete-btn']}>
            x
          </p>
          <p onClick={modifyCommentHandler} className={classes['modify-btn']}>
            +
          </p>
        </>
      )}
    </div>
  );
};

export default Comment;
