import axios from 'axios';

import {
  getActivityAction, addActivityAction, categoryAction,
} from '../Actions';

const baseUrl = 'http://localhost:3000/api';

const localUser = JSON.parse(localStorage.getItem('user'));

const logoutHandler = () => {
  axios.delete(`${baseUrl}/logout`, {
    withCredentials: true,
  })
    .then(() => {
      localStorage.removeItem('user');
    });
};

const updateTimer = (hour, minute, comparer) => {
  try {
    axios.get(`${baseUrl}/users/${localUser.id}/categories`)
      .then((response) => {
        response.data.map((cat) => {
          if (cat.user_id === localUser.id && cat.id === comparer) {
            let newHour = cat.hour;
            let newMinute = cat.minute;
            newHour += hour;
            newMinute += minute;
            const upData = {
              hour: newHour,
              minute: newMinute,
            };
            axios.put(`${baseUrl}/users/${localUser.id}/categories/${comparer}`, upData);
          }
          return null;
        });
        return null;
      });
  } catch (error) {
    return error.message;
  }
  return null;
};

const categoryFetcher = () => async (dispatch) => {
  try {
    const response = await axios.get(`${baseUrl}/users/${localUser.id}/categories`);
    const category = await response.data;
    dispatch(categoryAction(category));
    console.log(response.data);
  } catch (error) {
    return error.message;
  }
  return null;
};

const cats = (url) => {
  try {
    const response = axios.get(url);
    return response;
  } catch (error) {
    return error.message;
  }
};

const fetchActivitties = (comparer) => async (dispatch) => {
  if (localStorage.getItem('user') != null) {
    try {
      const response = await axios.get(`${baseUrl}/users/${localUser.id}/categories/${comparer}/activities`);
      const activities = await response.data.activities;
      dispatch(getActivityAction(activities));
    } catch (error) {
      return error.message;
    }
  }
  return null;
};

const postActivitties = (url, data) => (dispatch) => {
  axios.post(url, data)
    .then((response) => {
      const returnData = response.data.activity;
      console.log(response.data.activity);
      dispatch(addActivityAction({ ...returnData }));
    });
};

const login = (url, data) => {
  const response = axios.post(url, data);
  return response;
};

const signup = (url, data) => {
  const response = axios.post(url, data);
  return response;
};

const postCategory = (url, data) => {
  const response = axios.post(url, data);
  return response;
};

export {
  logoutHandler,
  login, signup,
  baseUrl,
  cats,
  updateTimer,
  postActivitties, postCategory,
  fetchActivitties, categoryFetcher,
};
