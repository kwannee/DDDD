import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import classes from './Login.module.css';
import LoginForm from './LoginForm';
import LoginImages from './LoginImages';
import { useEffect } from 'react';

const Login = ({ images }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/main');
    }
  }, [navigate, isAuthenticated]);

  return (
    <div className={classes.wrapper}>
      <div className={classes.projectLayout}>
        <div className={classes.contents}>
          <LoginImages images={images} />
          <LoginForm />
        </div>
        <div className={classes.error}></div>
      </div>
    </div>
  );
};

export default Login;
