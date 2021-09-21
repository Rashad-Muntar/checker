import { Link } from 'react-router-dom';
import '../assets/styles/Footer.css';

const Footer = () => (
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
);

export default Footer;
