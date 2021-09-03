import PropTypes from 'prop-types';

const ActivityForm = ({ handleChangeTitle, handleChangeReminder, handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <input onChange={handleChangeTitle} type="text" placeholder="Enter your next Activity" />
    <input onChange={handleChangeReminder} type="date" />
    <button type="submit">Submit</button>
  </form>
);

ActivityForm.propTypes = {
  handleChangeTitle: PropTypes.func.isRequired,
  handleChangeReminder: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default ActivityForm;
