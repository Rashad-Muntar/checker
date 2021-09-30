import axios from 'axios';

import {
  addActivityAction,
} from '../Actions';

const baseUrl = 'https://quiet-citadel-65357.herokuapp.com/api';

const logoutHandler = () => {
  axios.delete(`${baseUrl}/logout`, {
    withCredentials: true,
  })
    .then(() => {
      localStorage.removeItem('user');
    });
};

const activitiesFetcher = (url) => {
  const response = axios.get(url);
  return response;
};

const updateTimer = async (url, hour, minute, comparer, activityId) => {
  await axios.get(url)
    .then((response) => {
      console.log(response);
      const localUser = JSON.parse(localStorage.getItem('user'));
      const catData = response.data.data.attributes;
      let newHour = catData.hour;
      let newMinute = catData.minute;
      newHour += hour;
      newMinute += minute;
      const upDateCategory = {
        hour: newHour,
        minute: newMinute,
      };
      axios.put(`${baseUrl}/users/${localUser.id}/categories/${comparer}`, upDateCategory);
      const updateActivity = {
        complete: true,
      };
      axios.put(`${baseUrl}/users/${localUser.id}/categories/${comparer}/activities/${activityId}`, updateActivity);
      return null;
    });
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
