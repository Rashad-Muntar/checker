/* eslint-disable radix */
import axios from 'axios';
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Activity from '../Components/Activity';
import ActivityForm from './ActivityForm';
import '../assets/styles/DetailsPage.css';

const CategoryDetails = () => {
  const [activities, setActivities] = useState([]);
  const [title, setTitle] = useState('');
  const localUser = JSON.parse(localStorage.getItem('user'));
  const id = useParams();
  const comparer = parseInt(id.id);

  const getActivitties = async () => {
    try {
      const response = await axios.get(`https://dry-atoll-78054.herokuapp.com/api/users/${localUser.id}/categories/${comparer}/activities`);
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
      axios.post(`https://dry-atoll-78054.herokuapp.com/api/users/${localUser.id}/categories/${comparer}/activities`, activityData)
        .then((response) => {
          setActivities([response.data.activity, ...activities]);
        });
    } catch (error) {
      return error.message;
    }
    setTitle('');
    return null;
  };

  return (
    <div className="details-page-wrapper">
      <div className="Activity-main-wrapper">
        {
      activities.length !== 0 && activities.map((activity) => (
        activity.category_id === comparer
        && (
          <Activity
            key={activity.id}
            title={activity.title}
            timer={activity.timer}
            complete={activity.complete}
            activityId={activity.id}
          />
        )
      ))
    }
      </div>
      <ActivityForm
        handleChangeTitle={handleChangeTitle}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default CategoryDetails;
