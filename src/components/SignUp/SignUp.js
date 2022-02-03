import { getAuth } from 'firebase/auth';
import React, { useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './SignUp.module.css';
import SignUpForm from './SignUpForm';
import SignUpImages from './SignUpImages';

const SignUp = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  useLayoutEffect(() => {
    if (auth.currentUser) {
      navigate('/main');
    }
  }, [auth.currentUser, navigate]);

  return (
    <div className={classes.wrapper}>
      <div className={classes.projectLayout}>
        <div className={classes.contents}>
          <SignUpImages />
          <SignUpForm />
        </div>
        <div className={classes.error}></div>
      </div>
    </div>
  );
};

export default SignUp;
