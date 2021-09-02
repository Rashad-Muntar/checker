import React from 'react';
import PropTypes from 'prop-types';

const Category = ({ title, percentage }) => (
  <div>
    <p>{title}</p>
    <p>{percentage}</p>
  </div>
);

Category.propTypes = {
  title: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Category;
