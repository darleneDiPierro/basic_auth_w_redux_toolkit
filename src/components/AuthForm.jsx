import React from 'react';
import './AuthForm.css';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store/index';

const AuthForm = () => {
  const dispatch = useDispatch();

  const loginHandler = (e) => {
    e.preventDefault();

    dispatch(authActions.login());
  };

  return(
    <form onSubmit={loginHandler} className='login-form'>
      <h1>Login</h1>
      <input label='username' type='text' placeholder='username' />
      <input label='password' type='password' placeholder='password'/>
      <button>Login</button>
    </form>
  )
}

export default AuthForm;
