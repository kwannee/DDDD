import Comment from './Comment';
import classes from './Comments.module.css';

const Comments = ({ comments, reloadHandler }) => {
  const commentsList = comments?.map((commentInfo) => {
    return <Comment reloadHandler={reloadHandler} comment={commentInfo} />;
  });

  return <div className={classes.comments}>{commentsList}</div>;
};

export default Comments;
