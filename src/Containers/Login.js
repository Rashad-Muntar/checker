import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import '../assets/styles/Form.css';
import { login } from '../APIs/calls';

const Login = () => {
  const [userName, setUserName] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const logInUser = {
      username: userName,
    };
    dispatch(login('http://localhost:3000/api/login', logInUser));
    history.push('/success-auth');
    // try {
    //   axios.post('http://localhost:3000/api/login', logInUser, { withCredentials: true })
    //     .then((response) => {
    //       dispatch(signInUserAction({ ...response.data, loggedIn: true }));
    //       localStorage.setItem('user',
    // JSON.stringify({ ...response.data.user, loggedIn: true }));
    //       successLoginRedirect(response);
    //     });
    // } catch (error) {
    //   return error.message;
    // }
    // setUserName('');
    // return null;
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
