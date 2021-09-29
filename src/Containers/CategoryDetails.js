/* eslint-disable radix */
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams, useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Activity from '../Components/Activity';
import ActivityForm from './ActivityForm';
import { getActivityAction } from '../Actions';
import {
  postActivitties, activitiesFetcher, baseUrl,
} from '../APIs/calls';
import '../assets/styles/DetailsPage.css';

const CategoryDetails = () => {
  const activities = useSelector((state) => state.activityReducer);
  const [title, setTitle] = useState('');
  const localUser = JSON.parse(localStorage.getItem('user'));
  const id = useParams();
  const comparer = parseInt(id.id);
  const dispatch = useDispatch();
  const history = useHistory();

  const updateActivities = async () => {
    if (localStorage.getItem('user') != null) {
      const response = await activitiesFetcher(`${baseUrl}/users/${localUser.id}/categories/${comparer}/activities`);
      const activityData = await response.data.activities;
      dispatch(getActivityAction(activityData));
      history.push(`/category/${comparer}`);
    }
  };

  useEffect(() => {
    updateActivities();
  }, []);

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const activityData = {
      title,
      category_id: comparer,
      user_id: localUser.id,
    };
    dispatch(postActivitties(`${baseUrl}/users/${localUser.id}/categories/${comparer}/activities`, activityData));
  };

  return (
    <div className="details-page-wrapper">
      <Link to="/" className="go-back">
        <i className="long arrow alternate left icon" />
        {' '}
        Go back
      </Link>
      <div className="main-content-wrapper">
        <div className="Activity-main-wrapper">
          {
      activities.length !== 0 && activities.data.map((activity) => (
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
    </div>
  );
};

export default CategoryDetails;
