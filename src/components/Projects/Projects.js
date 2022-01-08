import React from 'react';
import classes from './Projects.module.css';
import { useParams, Link } from 'react-router-dom';
import LazyImage from '../UI/LazyImage';
const Projects = ({ images, style, main }) => {
  const { category, detailCategory } = useParams();
  return (
    <div className={`${classes.container} projects-container`} style={style}>
      <div className={classes.projects}>
        {images
          .filter((project) => project.category === category || main)
          .filter((project) => (detailCategory ? detailCategory === project.detailCategory : true))
          .map((project) => (
            <Link
              to={`/project/${project.category}/${project.detailCategory}/${project.name}`}
              key={Math.round(Math.random() * 100000)}
            >
              <LazyImage className={classes.image} src={project.src} />
              <p>Each Project Name...</p>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Projects;
