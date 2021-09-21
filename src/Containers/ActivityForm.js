import PropTypes from 'prop-types';
import '../assets/styles/ActivityForm.css';

const ActivityForm = ({ handleChangeTitle, handleSubmit }) => (
  <div className="new-activity">
    <i className="clock outline icon" />
    <p>Create a new Activity</p>
    <small>Start the timer of the activity you are about to take</small>
    <form onSubmit={handleSubmit}>
      <input onChange={handleChangeTitle} type="text" placeholder="Enter your next Activity" />
      <button type="submit">Submit</button>
    </form>
  </div>
);

ActivityForm.propTypes = {
  handleChangeTitle: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default ActivityForm;
