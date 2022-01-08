import React from 'react';
import Projects from '../Projects/Projects';
import Gallery from './Gallery';
import classes from './Main.module.css';

const Main = ({ images }) => {
  const moveScrollToProjects = () => {
    const projectsLocation = document.querySelector('.projects-container').offsetTop - 150;
    window.scrollTo({ top: projectsLocation, behavior: 'smooth' });
  };

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div className={classes.main}>
        <Gallery />
        <i onClick={moveScrollToProjects} className={`fas fa-angle-down ${classes.downBtn}`}></i>
      </div>
      <Projects style={{ marginTop: 0, paddingBottom: '100px' }} main={true} images={images} />
    </div>
  );
};

export default Main;
