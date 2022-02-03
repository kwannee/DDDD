import classes from './ProjectDescription.module.css';

const ProjectDescription = ({ description }) => {
  return (
    <div className={classes.paragraph}>
      <p>{description}</p>
    </div>
  );
};

export default ProjectDescription;
