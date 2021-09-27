/* eslint-disable radix */
import axios from 'axios';
import { getActivityAction, addActivityAction, categoryAction } from '../Actions';

// const baseUrl = 'http://localhost:3000/api';
const localUser = JSON.parse(localStorage.getItem('user'));

const logoutHandler = () => {
  axios.delete('http://localhost:3000/api/logout', {
    withCredentials: true,
  })
    .then(() => {
      localStorage.removeItem('user');
    });
};

const updateTimer = (hour, minute, comparer) => {
  try {
    axios.get(`http://localhost:3000/api/users/${localUser.id}/categories`)
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
            axios.put(`http://localhost:3000/api/users/${localUser.id}/categories/${comparer}`, upData);
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
  if (localStorage.getItem('user') != null) {
    try {
      const response = await axios.get(`http://localhost:3000/api/users/${localUser.id}/categories`);
      const category = await response.data;
      dispatch(categoryAction(category));
    } catch (error) {
      return error.message;
    }
  }
  return null;
};

const fetchActivitties = () => async (comparer, dispatch) => {
  if (localStorage.getItem('user') != null) {
    try {
      const response = await axios.get(`http://localhost:3000/api/users/${localUser.id}/categories/${comparer}/activities`);
      console.log(response.data.activities);
      const activities = await response.data.activities;
      dispatch(getActivityAction(activities));
    } catch (error) {
      return error.message;
    }
  }
  return null;
};

const postActivitties = () => async (comparer, data, dispatch) => {
  if (localStorage.getItem('user') != null) {
    try {
      const response = await axios.post(`http://localhost:3000/api/users/${localUser.id}/categories/${comparer}/activities`, data);
      console.log(response.data);
      const activities = await response.data;
      dispatch(addActivityAction(activities));
    } catch (error) {
      return error.message;
    }
  }
  return null;
};

export {
  logoutHandler, updateTimer, postActivitties, fetchActivitties, categoryFetcher,
};
