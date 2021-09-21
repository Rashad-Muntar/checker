import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../assets/styles/Footer.css';

const Footer = () => {
  const user = useSelector((state) => state.userReducer);
  return (
    user.user && user.user.loggedIn ? (
      <footer>
        <Link to="/">
          <i className="home icon" />
          <span>Home</span>
        </Link>
        <Link to="signup/">
          <i className="edit outline icon" />
          <span>Logout</span>
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
            <i className="phone square icon" />
            <span>Login</span>
          </Link>
        </footer>
      )
  );
};

export default Footer;
