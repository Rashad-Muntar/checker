import React from 'react';
import '../assets/styles/category.css';
import PropTypes from 'prop-types';

const Category = ({
  title, hour, minute,
}) => {
  const iconSetter = () => {
    switch ({ title }) {
      case 'Sleep':
  <i className="bed icon" />;
        break;
      case 'Diet':
  <i className="utensils icon" />;
        break;
      case 'Work':
  <i className="utensils icon" />;
        break;
      case 'Exercise':
  <i className="futbol outline icon" />;
        break;
      case 'Social':
  <i className="users icon" />;
        break;
      case 'Read':
  <i className="book icon" />;
        break;
      default:
        break;
    }
  };

  return (
    <div className="body">
      {iconSetter}
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
      <h3>{title}</h3>
      <div>
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
};

Category.propTypes = {
  title: PropTypes.string.isRequired,
  hour: PropTypes.number.isRequired,
  minute: PropTypes.number.isRequired,
};

export default Category;
