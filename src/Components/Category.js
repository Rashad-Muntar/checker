import React from 'react';
import '../assets/styles/category.css';
import PropTypes from 'prop-types';

const Category = ({
  title, hour, minute,
}) => (
  <div className="card-wrapper">
    {
        title === 'Exercise' && <i className="futbol outline icon" />
      }
    {
        title === 'Diet' && <i className="utensils icon" />
      }
    {
        title === 'Sleep' && <i className="bed icon" />
      }
    {
        title === 'Social' && <i className="users icon" />
      }
    {
        title === 'Read' && <i className="book icon" />
      }
    {
        title === 'Work' && <i className="briefcase icon" />
      }
    <span>{title}</span>
    <div className="timer-area">
      <span>
        {hour}
        hr. :
      </span>
      <span>
        {minute}
        min.
      </span>
    </div>
  </div>
);

Category.propTypes = {
  title: PropTypes.string.isRequired,
  hour: PropTypes.number.isRequired,
  minute: PropTypes.number.isRequired,
};

export default Category;
