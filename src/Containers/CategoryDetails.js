/* eslint-disable radix */
import axios from 'axios';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Activity from '../Components/Activity';
import { categoryFetcher } from '../Actions/index';
import newActivity from './newActivity';

const CategoryDetails = () => {
  const [activities, setActivities] = useState({ data: [] });
  console.log(activities);
  const id = useParams();
  const comparer = parseInt(id.id);

  console.log(typeof id.id);
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

  const handleChange = (e) => {
    console.log(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault
  }

  const categoryData = useSelector((state) => state.categoryReducer.data);
  console.log(categoryData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(categoryFetcher());
  }, []);

  return (
    <div>
      {
      activities.data.map((activity) => (
        activity.attributes.category_id === comparer && (
        <Activity
          key={activity.id}
          title={activity.attributes.title}
        />
        )
      ))
    }
    <newActivity 
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
    </div>
  );
};

export default CategoryDetails;
