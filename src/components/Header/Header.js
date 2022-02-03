import React from 'react';
import { Link } from 'react-router-dom';
import Categories from './Categories';
import classes from './Header.module.css';
import { getAuth } from 'firebase/auth';

const Header = () => {
  const auth = getAuth();
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link className={classes.logo} to="/main">
          DDDDD
        </Link>
        {!auth.currentUser && (
          <Link className={classes.login} to="/login">
            +
          </Link>
        )}
      </div>
      <Categories />
    </header>
  );
};

export default Header;
