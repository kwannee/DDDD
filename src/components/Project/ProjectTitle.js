import classes from './ProjectTitle.module.css';
const ProjectTitle = ({ title, writer }) => {
  return (
    <div className={classes.names}>
      <p className={classes.name}>{title?.kor}</p>
      <p className={classes.name}>{title?.eng}</p>
      <p>{writer ? `with ${writer}` : ''}</p>
    </div>
  );
};

export default ProjectTitle;
