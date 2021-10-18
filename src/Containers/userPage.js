import PropTypes from 'prop-types';

const UserPage = ({ loginUser }) => <h2>{loginUser}</h2>;

UserPage.propTypes = {
  loginUser: PropTypes.string.isRequired,

};
export default UserPage;
