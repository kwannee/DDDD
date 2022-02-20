import { getAuth, signOut, updateProfile } from 'firebase/auth';
import React from 'react';
import { useState, useEffect } from 'react';
import { setDataByPath } from '../../firebase/utils/db';
import { makePath } from '../../utils/string';
import classes from './User.module.css';
import { useNavigate } from 'react-router-dom';

const User = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [modify, setModify] = useState(false);
  const [nickname, setNickname] = useState(auth.currentUser?.displayName);

  useEffect(() => {
    if (!auth.currentUser) {
      navigate('/main');
    }
  }, [navigate, auth.currentUser]);

  const submitNickNameHandler = async (e) => {
    e.preventDefault();
    await setDataByPath({ path: makePath(`users/${auth.currentUser.uid}/`), data: nickname });
    await updateProfile(auth.currentUser, { displayName: nickname });
    window.location.reload();
  };
  const modifyNickNameHandler = (e) => {
    e.preventDefault();
    setModify(true);
  };
  const inputNickNameHandler = (e) => {
    setNickname(e.target.value);
  };
  const cancelModifyHandler = (e) => {
    e.preventDefault();
    setModify(false);
  };
  const signOutHandler = () => {
    signOut(auth);
    window.location.reload();
  };
  return (
    <div className={classes.wrapper}>
      <form>
        <label>Nickname</label>
        {modify ? (
          <div className={classes['input-div']}>
            <input value={nickname} onChange={inputNickNameHandler} type="text" />
            <button className={classes['input-btn']} onClick={submitNickNameHandler}>
              확인
            </button>
            <button className={classes['input-btn']} onClick={cancelModifyHandler}>
              취소
            </button>
          </div>
        ) : (
          <div className={classes['input-div']}>
            <span>{auth.currentUser?.displayName}</span>
            <button className={classes['input-btn']} onClick={modifyNickNameHandler}>
              변경
            </button>
          </div>
        )}
      </form>
      <div className={classes['logout-div']}>
        <button style={{ marginLeft: 0 }} onClick={signOutHandler} className={classes['input-btn']}>
          로그아웃
        </button>
      </div>
    </div>
  );
};

export default User;
