/* eslint-disable radix */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Activity = ({
  activityId,
  title,
  complete,
  buttonClick,
}) => {
  const [timerOn, setTimerOn] = useState(false);
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [hour, setHour] = useState(0);
  const [newTitle, setNewTitle] = useState(title);
  const id = useParams();
  const comparer = parseInt(id.id);
  const localUser = JSON.parse(localStorage.getItem('user'));

  const titleChangeandler = () => {
    setNewTitle('title chnageed');
  };

  useEffect(() => {
    if (second === 59) {
      setSecond(0);
      setMinute(((prevMinute) => prevMinute + 1));
    }
    if (minute === 59) {
      setMinute(0);
      setHour((prevHour) => prevHour + 1);
    }
    if (hour === 24) {
      setHour(0);
    }
  }, [second]);

  const upDateTimer = () => {
    try {
      axios.get(`http://localhost:3000/api/users/${localUser.id}/categories`)
        .then((response) => {
          console.log(response.data);
          response.data.map((cat) => {
            if (cat.user_id === localUser.id && cat.id === comparer) {
              let newHour = cat.hour;
              let newMinute = cat.minute;
              newHour += hour;
              newMinute += minute;
              console.log(newHour);
              console.log(newMinute);
              const upData = {
                hour: newHour,
                minute: newMinute,
              };
              axios.put(`http://localhost:3000/api/users/${localUser.id}/categories/${comparer}`, upData)
                .then((res) => {
                  console.log(res.data);
                });
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

  const updateTimerhandler = () => {
    setTimerOn(false);
    upDateTimer();
  };

  useEffect(() => {
    let interval = null;
    if (timerOn) {
      interval = setInterval(() => {
        setSecond((prevSecond) => prevSecond + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerOn]);

  return (
    <div>
      <p>{newTitle}</p>
      <div>
        <span>
          {hour}
          hr.
          {' '}
          :
          {' '}
        </span>
        <span>
          {minute}
          min.
          {' '}
          :
          {' '}
        </span>
        <span>
          {second}
          sec.
        </span>
      </div>
      { complete === false ? (
        <>
          <button id={activityId} onClick={buttonClick} type="button">Not complete</button>
          <button id={activityId} onClick={() => setTimerOn(true)} type="button">Start timer</button>
          <button id={activityId} onClick={updateTimerhandler} type="button">Stop timer</button>
          <button onClick={titleChangeandler} type="button">Change title</button>
        </>
      ) : (
        <button id={activityId} onClick={buttonClick} type="button">Complete</button>

      )}
    </div>
  );
};

Activity.propTypes = {
  title: PropTypes.string.isRequired,
  complete: PropTypes.bool.isRequired,
  buttonClick: PropTypes.func.isRequired,
  activityId: PropTypes.number.isRequired,

};

export default Activity;
