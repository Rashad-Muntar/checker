/* eslint-disable radix, consistent-return, no-unused-expressions */
import axios from 'axios';
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Activity from '../Components/Activity';
import ActivityForm from './ActivityForm';

const CategoryDetails = () => {
  const [activities, setActivities] = useState([]);
  const [title, setTitle] = useState('');
  const localUser = JSON.parse(localStorage.getItem('user'));
  const id = useParams();
  const comparer = parseInt(id.id);

  const getActivitties = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/users/${localUser.id}/categories/${comparer}/activities`);
      const returnData = response.data.activities;
      setActivities(returnData);
    } catch (error) {
      return error.message;
    }
    return null;
  };

  useEffect(() => {
    getActivitties();
  }, []);

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const activityData = {
      title,
      category_id: comparer,
      user_id: localUser.id,
    };

    try {
      axios.post(`http://localhost:3000//api/users/${localUser.id}/categories/${comparer}/activities`, activityData)
        .then((response) => {
          setActivities([response.data.activity, ...activities]);
          console.log(response.data.activity);
        });
    } catch (error) {
      return error.message;
    }
    setTitle('');
  };

  const buttonClick = (e) => {
    activities.map((activity) => {
      console.log(e.target);
      activity.id === parseInt(e.target.id) && console.log(true);
      return null;
    });
  };

  return (
    <>

      {
      activities.length !== 0 && activities.map((activity) => (
        activity.category_id === comparer
        && (
        <Activity
          key={activity.id}
          title={activity.title}
          timer={activity.timer}
          complete={activity.complete}
          buttonClick={buttonClick}
          activityId={activity.id}
        />
        )
      ))
    }
      <ActivityForm
        handleChangeTitle={handleChangeTitle}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default CategoryDetails;
