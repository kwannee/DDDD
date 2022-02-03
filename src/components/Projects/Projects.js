import React, { useEffect } from 'react';
import classes from './Projects.module.css';
import { useParams } from 'react-router-dom';
import Grid from '../UI/Grid';

const Projects = ({ images, style, main }) => {
  const { category, detailCategory } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0, { behavior: 'smooth' });
  }, [category, detailCategory]);

  const filteredImages = images
    .filter((project) => project.category.toLowerCase() === category || main)
    .filter((project) =>
      detailCategory ? detailCategory === project.detailCategory.toLowerCase() : true,
    );

  return (
    <div className={`${classes.container} projects-container`} style={style}>
      <div className={classes.height70}>
        <div className={classes.projects}>
          <Grid projects={filteredImages} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
