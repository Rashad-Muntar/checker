import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import '../assets/styles/Form.css';
import { baseUrl, login } from '../APIs/calls';
import { signInUserAction } from '../Actions';

const Login = () => {
  const [userName, setUserName] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const successLoginRedirect = (data) => {
    if (data.data.status === 'signed_in') {
      history.push('/success-auth');
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const logInUser = {
      username: userName,
    };
    const response = await login(`${baseUrl}login`, logInUser);
    dispatch(signInUserAction({ ...response.data, loggedIn: true }));
    localStorage.setItem('user', JSON.stringify({ ...response.data.user, loggedIn: true }));
    successLoginRedirect(response);
  };

  return (
    <div className="form-wrapper">
      <i className="clock outline icon" />
      <p>Log in</p>
      <small>Lets get back to helping you track your activities</small>
      <form onSubmit={handleLoginSubmit} className="form">
        <input type="text" placeholder="Enter your name" onChange={handleUserNameChange} required />
        <button type="submit">Login</button>
        <span>
          No account yet? no worries just
          <Link to="/signup"> Sign up</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
