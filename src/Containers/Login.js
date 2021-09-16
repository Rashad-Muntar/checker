import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { signInUserAction } from '../Actions';
import '../assets/styles/Form.css';

const Login = () => {
  const [userName, setUserName] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
    console.log(e.target.value);
  };

  const successLoginRedirect = (data) => {
    if (data.data.status === 'signed_in') {
      history.push('/');
    }
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const logInUser = {
      username: userName,
    };

    try {
      axios.post('http://localhost:3000/api/login', logInUser, { withCredentials: true })
        .then((response) => {
          // if (response.data.is_success) {
          dispatch(signInUserAction(response.data));
          localStorage.setItem('user', JSON.stringify(response.data.user));
          successLoginRedirect(response);
          console.log(response.data);
          // }
        });
    } catch (error) {
      return error.message;
    }
    setUserName('');
    return null;
  };

  return (
    <form onSubmit={handleLoginSubmit} className="form">
      <input type="text" placeholder="Enter your name" onChange={handleUserNameChange} />
      <button type="submit">Login</button>
    </form>
  );
};

// Login.propTypes = {
//   handleSuccesfullAuth: PropTypes.func.isRequired,

// };
export default Login;
