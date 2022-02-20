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
          {filteredImages.length ? (
            <Grid projects={filteredImages} />
          ) : (
            <p>아직 게시글이 없습니다.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
