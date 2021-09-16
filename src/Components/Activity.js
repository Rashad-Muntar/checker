import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

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
          <button id={activityId} onClick={() => setTimerOn(false)} type="button">Stop timer</button>
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
