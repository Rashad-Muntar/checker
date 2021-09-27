import axios from 'axios';

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

const getActivitties = async (comparer) => {
  try {
    const response = await axios.get(`http://localhost:3000/api/users/${localUser.id}/categories/${comparer}/activities`);
    return response.data.activities;
    // setActivities(returnData);
  } catch (error) {
    return error.message;
  }
};

export {
  logoutHandler, updateTimer, getActivitties,
};
