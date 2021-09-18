import React from 'react';
import '../assets/styles/category.css';
import PropTypes from 'prop-types';

const Category = ({
  title, hour, minute,
}) => (
  <div className="body">
    <i className="chess king icon" />
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

Category.propTypes = {
  title: PropTypes.string.isRequired,
  hour: PropTypes.number.isRequired,
  minute: PropTypes.number.isRequired,
};

export default Category;
