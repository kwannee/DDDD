import classes from './ProjectDate.module.css';
const ProjectDate = ({ date }) => {
  return (
    <div className={classes.date}>
      <p>{date?.split('T')[0]}</p>
    </div>
  );
};

export default ProjectDate;
