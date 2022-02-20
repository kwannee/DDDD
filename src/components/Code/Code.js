import { getAuth } from 'firebase/auth';
import React, { useState, useEffect } from 'react';
import { useNavigate,Redir } from 'react-router-dom';
import { setDataByPath } from '../../firebase/utils/db';

const Code = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  //   useEffect(() => {
  //     if (!auth.currentUser) {
  //       navigate('/main');
  //     }
  //   }, [auth.currentUser, navigate]);

  const [code, setCode] = useState('');
  const genreateRandomKey = async () => {
    if (code || !auth.currentUser) {
      return;
    }
    const randomKey = Math.random().toString(36).substr(2, 11);
    setCode(randomKey);
    await setDataByPath({ path: `code/`, data: randomKey });
  };
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
      }}
    >
      <button onClick={genreateRandomKey}>code generator</button>
      <p>{code}</p>
    </div>
  );
};

export default Code;
