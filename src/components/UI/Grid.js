import LazyImage from './LazyImage';
import classes from './Grid.module.css';
import { useDispatch } from 'react-redux';
import { pathActions } from '../../store/path-slice';
import { useNavigate, useLocation } from 'react-router-dom';
import ProjectAddButton from './ProjectAddButton';
import { getAuth } from 'firebase/auth';
import { capitalizeFirstLetter } from '../../utils/string';

const Grid = ({ projects }) => {
  const auth = getAuth();
  const dispatch = useDispatch();
  const [, , category, detailCategory] = useLocation().pathname.split('/');
  const navigate = useNavigate();
  const clickProjectHandler = (e) => {
    const { clickedCategory, clickedDetail, clickedName } = e.currentTarget.dataset;
    if (detailCategory) {
      dispatch(
        pathActions.setStartingPoint(
          `projects/${capitalizeFirstLetter(category)}/${capitalizeFirstLetter(detailCategory)}`,
        ),
      );
    } else if (category) {
      dispatch(pathActions.setStartingPoint(`projects/${capitalizeFirstLetter(category)}/`));
    } else {
      dispatch(pathActions.setStartingPoint(`projects/`));
    }
    navigate(`/project/${clickedCategory}/${clickedDetail}/${clickedName}`);
  };

  return (
    <div className={classes.grid}>
      {auth.currentUser && <ProjectAddButton />}
      {projects?.map((project) => (
        <div
          className={classes['grid-img-wrapper']}
          data-clicked-category={project.category}
          data-clicked-detail={project.detailCategory}
          data-clicked-name={project.name}
          onClick={clickProjectHandler}
          key={Math.round(Math.random() * 100000)}
        >
          <LazyImage className={classes.image} src={project.src} />
          <p>{project.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Grid;
