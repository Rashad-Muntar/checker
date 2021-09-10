import '../assets/styles/Navbar.css';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="uk-navbar-container" uk-navbar>
    <div className="uk-navbar-left">
      <ul className="uk-navbar-nav">
        <li className="nav-item"><Link to="/">dayTrack+</Link></li>
      </ul>

    </div>

    <div className="uk-navbar-right">

      <ul className="uk-navbar-nav">
        {/* <li><a href="https://getuikit.com/docs/navbar">{loginUser}</a></li> */}
        <li className="nav-item"><Link to="/login">Login</Link></li>
        <li className="nav-item"><Link to="/signup">SignUp</Link></li>
        <li className="nav-item"><a href="https://getuikit.com/docs/navbar">Logout</a></li>
      </ul>

    </div>

  </nav>
);

// Navbar.propTypes = {
//   loginUser: PropTypes.string.isRequired,
//   // handleSuccesfullAuth: PropTypes.func.isRequired,

// };

export default Navbar;
