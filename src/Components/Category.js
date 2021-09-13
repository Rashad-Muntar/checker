import React from 'react';
import PropTypes from 'prop-types';

const Category = ({ title, progress }) => (
  <div>
    <p>{title}</p>
    <p>{progress}</p>
  </div>
);

Category.propTypes = {
  title: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
};

export default Category;
