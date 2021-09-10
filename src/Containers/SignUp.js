import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { signUpUserAction } from '../Actions';

const Signup = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const history = useHistory();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
    console.log(e.target.value);
  };

  const successRegisterRedirect = (data) => {
    if (data.data.is_success) {
      history.push('/user');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      user: {
        email,
        username: userName,
        password: '123456',
        password_confirmation: '123456',
      },
    };

    try {
      axios.post('http://localhost:3000/api/sign_up', newUser, { withCredentials: true })
        .then((response) => {
          if (response.data.is_success) {
          //   handleSuccesfullAuth(response.data);
            dispatch(signUpUserAction(response.data.data));
            localStorage.setItem('user', JSON.stringify(response.data.data.user));
            successRegisterRedirect(response);
          }
        });
    } catch (error) {
      return error.message;
    }

    return null;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter your name" onChange={handleUserNameChange} />
      <input type="email" placeholder="Enter your email" onChange={handleEmailChange} />
      <button type="submit">Sign up</button>
    </form>
  );
};

// Signup.propTypes = {
//   handleSuccesfullAuth: PropTypes.func.isRequired,

// };

export default Signup;
