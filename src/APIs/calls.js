import axios from 'axios';

import {
  addActivityAction,
} from '../Actions';

const baseUrl = 'https://gentle-taiga-27732.herokuapp.com/api';

const localUser = JSON.parse(localStorage.getItem('user'));

const logoutHandler = () => {
  axios.delete(`${baseUrl}/logout`, {
    withCredentials: true,
  })
    .then(() => {
      localStorage.removeItem('user');
    });
};

const updateTimer = (hour, minute, comparer, activityId) => {
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
            const updateActivity = {
              complete: true,
            };
            axios.put(`${baseUrl}/users/${localUser.id}/categories/${comparer}/activities/${activityId}`, updateActivity);
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

const cats = (url) => {
  try {
    const response = axios.get(url);
    return response;
  } catch (error) {
    return error.message;
  }
};

const activitiesFetcher = (url) => {
  const response = axios.get(url);
  return response;
};

const postActivitties = (url, data) => (dispatch) => {
  axios.post(url, data)
    .then((response) => {
      const returnData = response.data.activity;
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
  postActivitties,
  postCategory,
  activitiesFetcher,
};
