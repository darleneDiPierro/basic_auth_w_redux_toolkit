import React from 'react';
import './Navbar.css';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store/index';

const Navbar = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.auth.isAuthenticated);

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return(
    <div className='navbar'>
      <h1>Learn Redux</h1>
      {isAuth && (
        <ul>
          <li>Home</li>
          <li>Info</li>
          <li><button onClick={logoutHandler} className='logout'>Logout</button></li>
        </ul>
      )}
    </div>
  )
}

export default Navbar;
