import { Link } from 'react-router-dom';
import classes from './ProjectAddButton.module.css';
const ProjectAddButton = () => {
  return (
    <Link to={'/upload'} className={classes.addBtn}>
      +
    </Link>
  );
};

export default ProjectAddButton;
