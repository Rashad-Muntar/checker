import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import '../assets/styles/Form.css';
import { signUpUserAction } from '../Actions';

const Signup = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const history = useHistory();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const successRegisterRedirect = (data) => {
    if (data.data.status === 'created') {
      history.push('/');
    }
  };

  const createCategories = (id) => {
    const categories = {
      categories: [
        {
          user_id: `${id}`,
          title: 'Exercise',
          progress: 0,
        },
        {
          user_id: `${id}`,
          title: 'Work',
          progress: 0,
        },
        {
          user_id: `${id}`,
          title: 'Diet',
          progress: 0,
        },

        {
          user_id: `${id}`,
          title: 'Read',
          progress: 0,
        },

        {
          user_id: `${id}`,
          title: 'Sleep',
          progress: 0,
        },
        {
          user_id: `${id}`,
          title: 'Social',
          progress: 0,
        },
      ],
    };
    try {
      axios.post(`https://dry-atoll-78054.herokuapp.com/api/users/${id}/categories`, categories);
    } catch (error) {
      return error.message;
    }
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      user: {
        email,
        username: userName,
      },
    };
    try {
      axios.post('https://dry-atoll-78054.herokuapp.com/api/signup', newUser, { withCredentials: true })
        .then((response) => {
          if (response.data.status === 'created') {
            dispatch(signUpUserAction({ ...response.data.data, loggedIn: true }));
            localStorage.setItem('user', JSON.stringify({ ...response.data.user, loggedIn: true }));
            successRegisterRedirect(response);
            createCategories(response.data.user.id);
          }
        });
    } catch (error) {
      return error.message;
    }

    return null;
  };

  return (
    <div className="form-wrapper">
      <i className="clock outline icon" />
      <p>Sign up</p>
      <small>Create an account with easily and track your daily activities</small>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter your name" onChange={handleUserNameChange} required />
        <input type="email" placeholder="Enter your email" onChange={handleEmailChange} required />
        <button type="submit">Sign up</button>
        <span>
          Already have an account?
          <Link to="/login"> Log in</Link>
        </span>
      </form>
    </div>
  );
};

export default Signup;
