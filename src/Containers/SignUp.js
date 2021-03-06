import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import '../assets/styles/Form.css';
import { signUpUserAction } from '../Actions';
import {
  signup, postCategory, baseUrl,
} from '../APIs/calls';

const Signup = () => {
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState({ userName: '', userEmail: '', userPassword: '' });
  const history = useHistory();

  const handleUserInfo = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const successRegisterRedirect = (data) => {
    if (data.data.status === 'created') {
      history.push('/success-auth');
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
    postCategory(`${baseUrl}/users/${id}/categories`, categories);
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      user: {
        email: userInfo.userEmail,
        username: userInfo.userName,
        password: userInfo.userPassword,
      },
    };
    const response = await signup(`${baseUrl}/signup`, newUser, { withCredentials: true });
    if (response.data.status === 'created') {
      dispatch(signUpUserAction({ ...response.data.data, loggedIn: true }));
      localStorage.setItem('user', JSON.stringify({ ...response.data.user, loggedIn: true }));
      successRegisterRedirect(response);
      createCategories(response.data.user.id);
    }

    return null;
  };

  return (
    <div className="form-wrapper">
      <i className="clock outline icon" />
      <p>Sign up</p>
      <small>Create an account with easily and track your daily activities</small>
      <form onSubmit={handleSubmit}>
        <input type="text" name="userName" value={userInfo.userName} placeholder="Enter your name" onChange={handleUserInfo} required />
        <input type="email" name="userEmail" value={userInfo.userEmail} placeholder="Enter your email" onChange={handleUserInfo} required />
        <input type="password" name="userPassword" autoComplete="on" value={userInfo.userPassword} placeholder="Enter your password" onChange={handleUserInfo} required />
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
