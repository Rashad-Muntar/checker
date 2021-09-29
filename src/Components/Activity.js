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
  const [startBtn, setStartBtn] = useState(<button id={activityId} onClick={() => setTimerOn(true)} type="button">Start timer</button>);
  const [stopBtn, setStopBtn] = useState(<button id={activityId} type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Stop timer</button>);
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
    updateTimer(hour, minute, comparer, activityId);
    setStartBtn('');
    setStopBtn('');
    setHour(0);
    setSecond(0);
    setMinute(0);
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

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">End Activity</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              Are sure you want to stop the activity timer?...
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={updateTimerhandler}>Yes</button>
            </div>
          </div>
        </div>
      </div>

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
          {startBtn}
          {stopBtn}
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
