import classes from './ProjectDate.module.css';
const ProjectDate = ({ date }) => {
  return (
    <div className={classes.date}>
      <p>
        {date?.split('T')[0]} {date?.split('T')[1].slice(0, 8)}
      </p>
    </div>
  );
};

export default ProjectDate;
