import React from 'react';
import classes from './Welcome.module.css';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <Link to="/main" className={classes.welcome}>
      <p>DDDDD</p>
    </Link>
  );
};

export default Welcome;
