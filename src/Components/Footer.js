import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import '../assets/styles/Footer.css';

const Footer = ({ logoutHandler }) => {
  const user = useSelector((state) => state.userReducer);
  return (
    user.user && user.user.loggedIn ? (
      <footer>
        <Link to="/">
          <i className="home icon" />
          <span>Home</span>
        </Link>
        <Link to="/signup">
          <button type="button" className="logout" onClick={logoutHandler}>
            <i className="sign out alternate icon" />
            Logout
          </button>
        </Link>
      </footer>
    )

      : (
        <footer>
          <Link to="/">
            <i className="home icon" />
            <span>Home</span>
          </Link>
          <Link to="signup/">
            <i className="edit outline icon" />
            <span>Signup</span>
          </Link>
          <Link to="/login">
            <i className="sign in alternate icon" />
            <span>Login</span>
          </Link>
        </footer>
      )
  );
};

Footer.propTypes = {
  logoutHandler: PropTypes.func.isRequired,
};

export default Footer;
