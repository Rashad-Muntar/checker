/* eslint-disable radix, consistent-return, no-unused-expressions */
import axios from 'axios';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Activity from '../Components/Activity';
import ActivityForm from './ActivityForm';

const CategoryDetails = () => {
  const [activities, setActivities] = useState([]);
  const [title, setTitle] = useState('');
  const [reminder, setReminder] = useState('');
  console.log(activities);
  const id = useParams();
  const comparer = parseInt(id.id);

  const getActivitties = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/categories/${id.id}/activities`);
      const returnData = response.data;
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

  const handleChangeReminder = (e) => {
    setReminder(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const activityData = {
      title,
      reminder: new Date(reminder),
      complete: false,
      category_id: comparer,
    };
    try {
      axios.post(`http://localhost:3000/api/categories/${comparer}/activities/`, activityData)
        .then((response) => {
          setActivities([response.data, ...activities]);
        });
    } catch (error) {
      return error.message;
    }
    setReminder('');
    setTitle('');
  };

  const buttonClick = (e) => {
    activities.map((activity) => {
      activity.id === parseInt(e.target.id) && console.log(true);
      return null;
    });
    console.log(e);
  };

  return (
    <>

      {
      activities.map((activity) => (
        activity.category_id === comparer && (
        <Activity
          key={activity.id}
          title={activity.title}
          complete={activity.complete}
          buttonClick={buttonClick}
          activityId={activity.id}
        />
        )
      ))
    }
      <ActivityForm
        handleChangeTitle={handleChangeTitle}
        handleChangeReminder={handleChangeReminder}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default CategoryDetails;
