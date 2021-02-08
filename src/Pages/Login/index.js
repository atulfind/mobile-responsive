import React from 'react';
import './index.css';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {

  const location =  useLocation();
  const history =  useHistory();

  const loginHandler = () => {
    history.replace('/');
  }

  return (
    <div className="container">
      <h4>Login Page</h4>
      <button onClick={loginHandler}>Login</button>
    </div>
  )
}

export default Login
