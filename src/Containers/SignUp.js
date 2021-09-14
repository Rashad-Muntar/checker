import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
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
    if (data.data.status === 'created') {
      history.push('/user');
    }
  };

  // const createCategories = (id) => {
  //   console.log(id);
  //   try {
  //     axios.post(`http://localhost:3000/api/users/${id}/categories`)
  //       .then((response) => {
  //         if (response.data.status === 'created') {
  //           const categories = response.data.data.relationships.categories.data.length;
  //           if (categories < 1) {
  //             const newCat = {
  //               user_id: `${id}`,
  //               title: 'Exercise',
  //               progress: 0,
  // {
  //   user_id: `${id}`,
  //   title: 'Work',
  //   progress: 0,
  // },
  // {
  //   user_id: `${id}`,
  //   title: 'Diet',
  //   progress: 0,
  // },

  // {
  //   user_id: `${id}`,
  //   title: 'Read',
  //   progress: 0,
  // },

  // {
  //   user_id: `${id}`,
  //   title: 'Sleep',
  //   progress: 0,
  // },
  // {
  //   user_id: `${id}`,
  //   title: 'Social',
  //   progress: 0,
  // },

  //             };
  //             try {
  //               axios.post(`http://localhost:3000/api/users/${id}/categories`, newCat);
  //             } catch (error) {
  //               return error.message;
  //             }
  //           }
  //         }
  //         return null;
  //       });
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  //   return null;
  // };

  const createCategories = (id) => {
    const categories = {
      categories: [
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
      axios.post(`http://localhost:3000/api/users/${id}/categories`, categories)
        .then((response) => {
          console.log(response);
        });
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
      axios.post('http://localhost:3000/api/signup', newUser, { withCredentials: true })
        .then((response) => {
          if (response.data.status === 'created') {
            dispatch(signUpUserAction(response.data.data));
            localStorage.setItem('user', JSON.stringify(response.data.user));
            successRegisterRedirect(response);
            createCategories(response.data.user.id);
            // console.log(response.data.user.id);
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

export default Signup;
