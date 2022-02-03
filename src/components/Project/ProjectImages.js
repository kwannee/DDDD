import classes from './ProjectImages.module.css';
import Gallery from '../UI/Gallery';
const ProjectImages = ({ images }) => {
  return (
    <div className={classes.images}>
      <Gallery images={images} height={'500px'} />
    </div>
  );
};

export default ProjectImages;
