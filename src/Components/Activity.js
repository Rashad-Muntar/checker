import PropTypes from 'prop-types';

const Activity = ({
  activityId, title, complete, buttonClick,
}) => (
  <div>
    <p>{title}</p>
    { complete === false ? (
      <button id={activityId} onClick={buttonClick} type="button">Not complete</button>
    ) : (
      <button id={activityId} onClick={buttonClick} type="button">Complete</button>
    )}
  </div>
);

Activity.propTypes = {
  title: PropTypes.string.isRequired,
  complete: PropTypes.bool.isRequired,
  buttonClick: PropTypes.func.isRequired,
  activityId: PropTypes.string.isRequired,
};

export default Activity;
