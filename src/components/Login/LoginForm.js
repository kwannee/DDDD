import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  WRONG_EMAIL_FORMAT,
  WRONG_PASSWORD_FOTMAT_ERROR,
  MIN_PASSWORD_LENGTH,
  EMPTY_EMAIL_ERROR,
  MAIL_FORMAT,
  NOT_EXIST_USER_ERROR,
  WRONG_PASSWORD_ERROR,
} from '../../constants';
import classes from './LoginForm.module.css';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/auth-slice';

const firebaseLogin = async (email, password) => {
  const auth = getAuth();
  return await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      return user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return errorCode;
    });
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordChangeHandle = (e) => {
    setPassword(e.target.value);
  };
  const submitLoginHandler = async () => {
    if (!email) {
      errorHandler(EMPTY_EMAIL_ERROR);
      return;
    }
    if (!email.match(MAIL_FORMAT)) {
      errorHandler(WRONG_EMAIL_FORMAT);
      return;
    }
    if (password.trim().length < MIN_PASSWORD_LENGTH) {
      errorHandler(WRONG_PASSWORD_FOTMAT_ERROR);
      return;
    }
    const result = await firebaseLogin(email, password);
    if (result === 'auth/user-not-found') {
      errorHandler(NOT_EXIST_USER_ERROR);
      return;
    }
    if (result === 'auth/wrong-password') {
      errorHandler(WRONG_PASSWORD_ERROR);
      return;
    }
    navigate('/main');
    dispatch(authActions.login());
  };

  const errorHandler = (type) => {
    setError(type);
    setTimeout(() => {
      setError('');
    }, 3000);
  };

  return (
    <div className={classes.wrapper}>
      <h3 style={{ fontWeight: 'bold' }}>Log in</h3>
      <form>
        <label>E-Mail</label>
        <input value={email} onChange={emailChangeHandler} type="email" />
      </form>
      <form>
        <label>Password</label>
        <input value={password} onChange={passwordChangeHandle} type="password" />
      </form>
      <div onClick={submitLoginHandler} className={classes.login}>
        <p>▼</p>
      </div>
      <div className={classes.login}>
        <p>{error}</p>
      </div>
    </div>
  );
};

export default LoginForm;
