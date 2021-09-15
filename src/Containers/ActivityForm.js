import PropTypes from 'prop-types';

const ActivityForm = ({ handleChangeTitle, handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <input onChange={handleChangeTitle} type="text" placeholder="Enter your next Activity" />
    <button type="submit">Submit</button>
  </form>
);

ActivityForm.propTypes = {
  handleChangeTitle: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default ActivityForm;
