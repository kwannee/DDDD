import classes from './Comment.module.css';

const Comment = ({ key, name, comment, date }) => {
  return (
    <div key={key} className={classes.comment}>
      <p className={classes['comment-info']}>{`${name} ${date}`}</p>
      <p>{comment}</p>
    </div>
  );
};

export default Comment;
