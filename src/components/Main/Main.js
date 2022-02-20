import React from 'react';
import Gallery from '../UI/Gallery';
import Grid from '../UI/Grid';
import classes from './Main.module.css';
import { getAuth, signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
const Main = ({ projects, mainImages }) => {
  const auth = getAuth();
  const moveScrollToProjects = () => {
    const projectsLocation = document.querySelector('.grid-container').offsetTop - 50;
    window.scrollTo({ top: projectsLocation, behavior: 'smooth' });
  };

  return (
    <div className={classes['main-wrapper']}>
      <div className={classes.main}>
        <div className={classes['gallery-wrapper']}>
          {auth.currentUser && (
            <div className={classes['main-modify-btn-div']}>
              <Link to={'/main/projects'}>
                {auth.currentUser && <p className={classes['main-modify-btn']}>+</p>}
              </Link>
            </div>
          )}
          <Gallery images={mainImages} main={true} />
          <i onClick={moveScrollToProjects} className={`fas fa-angle-down ${classes.downBtn}`}></i>
        </div>
      </div>
      <div
        className="grid-container"
        style={{
          width: '85%',
          padding: '3rem 3rem 3rem 0',
          marginTop: 0,
          height: '100%',
          position: 'relative',
        }}
      >
        <Grid projects={projects} />
      </div>
    </div>
  );
};

export default Main;
