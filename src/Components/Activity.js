import PropTypes from 'prop-types';

const Activity = ({ title, complete, createdAt }) => (
  <div>
    <p>{title}</p>
    <p>{complete}</p>
    <p>{createdAt}</p>
  </div>
);

Activity.propTypes = {
  title: PropTypes.string.isRequired,
  complete: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default Activity;
