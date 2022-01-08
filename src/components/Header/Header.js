import React from 'react';
import { Link } from 'react-router-dom';
import Categories from './Categories';
import classes from './Header.module.css';
const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link className={classes.logo} to="/main">
          DDDD
        </Link>
        <p className={classes.login}>+</p>
      </div>
      <Categories />
    </header>
  );
};

export default Header;
