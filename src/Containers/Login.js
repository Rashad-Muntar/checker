import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import '../assets/styles/Form.css';
import { baseUrl, login } from '../APIs/calls';
import { signInUserAction } from '../Actions';

const Login = () => {
  const [userInfor, setUserInfo] = useState({ userName: '', userPassword: '' });
  const [err, setErr] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  const handleUserInfo = (e) => {
    setUserInfo({
      ...userInfor,
      [e.target.name]: e.target.value,
    });
  };

  const successLoginRedirect = (data) => {
    if (data.data.status === 'signed_in') {
      history.push('/success-auth');
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const logInUser = {
      username: userInfor.userName,
      password: userInfor.userPassword,
    };
    try {
      const response = await login(`${baseUrl}/login`, logInUser, { withCredentials: true });
      if (response.data.status === 'signed_in') {
        dispatch(signInUserAction({ ...response.data, loggedIn: true }));
        localStorage.setItem('user', JSON.stringify({ ...response.data.user, loggedIn: true }));
        successLoginRedirect(response);
      }
    } catch (err) {
      if (err.response.data.error === 'invalid_credentials') {
        setTimeout(() => {
          setErr(<div className="ui mini red message error-msg displayMessage">No account for username</div>);
        }, 100);
        setTimeout(() => {
          setErr(<div className="ui red message error-msg hideMessage">Sorry no account for username</div>);
        }, 5000);
      }
    }
  };

  return (
    <div className="form-wrapper">
      <div>{err}</div>
      <i className="clock outline icon" />
      <p>Log in</p>
      <small>Lets get back to helping you track your activities</small>
      <form onSubmit={handleLoginSubmit} className="form">
        <input type="text" name="userName" value={userInfor.userName} placeholder="Enter your name" onChange={handleUserInfo} required />
        <input type="password" name="userPassword" value={userInfor.password} autoComplete="on" placeholder="Enter your password" onChange={handleUserInfo} required />
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
