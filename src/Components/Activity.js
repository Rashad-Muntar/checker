/* eslint-disable radix */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { updateTimer } from '../APIs/calls';
import '../assets/styles/Activity.css';

const Activity = ({
  activityId,
  title,
  complete,
}) => {
  const [timerOn, setTimerOn] = useState(false);
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [hour, setHour] = useState(0);
  const id = useParams();
  const comparer = parseInt(id.id);

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

  const updateTimerhandler = () => {
    setTimerOn(false);
    updateTimer(hour, minute, comparer);
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
    <div className="activity-wrapper">
      {complete === false ? <p className="title Notcomplete">{title}</p> : <p className="title complete">{title}</p>}

      <div>
        <span>
          {hour}
          hr
          {' '}
          :
          {' '}
        </span>
        <span>
          {minute}
          min
          {' '}
          :
          {' '}
        </span>
        <span>
          {second}
          sec
        </span>
      </div>
      { complete === false && (
        <>
          <button id={activityId} onClick={() => setTimerOn(true)} type="button">Start timer</button>
          <button id={activityId} onClick={updateTimerhandler} type="button">Stop timer</button>
        </>
      )}
    </div>
  );
};

Activity.propTypes = {
  title: PropTypes.string.isRequired,
  complete: PropTypes.bool.isRequired,
  activityId: PropTypes.number.isRequired,

};

export default Activity;
