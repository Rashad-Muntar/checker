import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';
// import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { signUpUserAction } from '../Actions';

const Signup = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  // const history = useHistory();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
    console.log(e.target.value);
  };

  // const successRegisterRedirect = (data) => {
  //   if (data.status === 200) {
  //     history.push('/user');
  //   }
  // };

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
          // if (response.data.status === 'created') {
          //   handleSuccesfullAuth(response.data);
          // }
          dispatch(signUpUserAction(response.data.data));
          // localStorage.setItem('current_user',
          // JSON.stringify({ ...response.data.user, logged_in: true }));
          // successRegisterRedirect(response);
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
