import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth';
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  EXIST_USER_ERROR,
  MAIL_FORMAT,
  MIN_PASSWORD_LENGTH,
  NAME_ERROR,
  WRONG_CODE_ERROR,
  WRONG_EMAIL_FORMAT,
  WRONG_PASSWORD_FOTMAT_ERROR,
} from '../../constants';
import { getDataByPath, removeDataByPath } from '../../firebase/utils/db';
import classes from './SignUpForm.module.css';

const SignUpForm = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const [error, setError] = useState('');
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const codeRef = useRef();

  const signupHandler = async () => {
    const displayName = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const code = codeRef.current.value;
    if (!displayName.trim()) {
      errorHandler(NAME_ERROR);
      return;
    }
    if (!email.match(MAIL_FORMAT)) {
      errorHandler(WRONG_EMAIL_FORMAT);
      return;
    }
    if (password.length < MIN_PASSWORD_LENGTH) {
      errorHandler(WRONG_PASSWORD_FOTMAT_ERROR);
      return;
    }
    const dbCode = await getDataByPath('code/');
    if (dbCode !== code) {
      errorHandler(WRONG_CODE_ERROR);
      return;
    }
    await removeDataByPath('code/');
    errorHandler('회원가입 중...');
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName,
        }).then(() => {
          navigate('/main');
        });
      })
      .catch((error) => {
        errorHandler(EXIST_USER_ERROR);
      });
  };

  const errorHandler = (type) => {
    setError(type);
    setTimeout(() => {
      setError('');
    }, 3000);
  };

  return (
    <div className={classes.wrapper}>
      <h3 style={{ fontWeight: 'bold' }}>Sign Up</h3>
      <form>
        <label>Name</label>
        <input ref={nameRef} type="text" />
      </form>
      <form>
        <label>E-Mail</label>
        <input ref={emailRef} type="email" />
      </form>
      <form>
        <label>Password</label>
        <input ref={passwordRef} type="password" />
      </form>
      <form>
        <label>Code</label>
        <input ref={codeRef} type="text" />
      </form>
      <div className={classes.signup}>
        <p onClick={signupHandler}>▼</p>
      </div>
      <div className={classes.signup}>
        <p>{error}</p>
      </div>
    </div>
  );
};

export default SignUpForm;
