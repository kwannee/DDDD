import Comment from './Comment';
import classes from './Comments.module.css';

const Comments = ({ comments }) => {
  const commentsList = comments?.map((item) => {
    const { name, comment, date } = item[1];
    return <Comment name={name} comment={comment} date={date} />;
  });

  return <div className={classes.comments}>{commentsList}</div>;
};

export default Comments;
