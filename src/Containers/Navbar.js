import React, { useEffect, useState } from 'react';
import '../assets/styles/Navbar.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const user = useSelector((state) => state.userReducer);
  const [navName, setNavName] = useState(null);
  const [login, setLogin] = useState(null);
  const [signup, setSignup] = useState(null);
  const [logout, setLogout] = useState(null);

  const logoutHandler = () => {
    console.log('Log out');
  };
  useEffect(() => {
    if (user.user) {
      setNavName(user.user.username);
      setLogin(null);
      setSignup(null);
      setLogout('Log out');
    } else {
      setNavName(null);
      setSignup('Sign up');
      setLogin('Login');
      setLogout(null);
    }
  });
  return (
    <nav className="uk-navbar-container" uk-navbar>
      <div className="uk-navbar-left">
        <ul className="uk-navbar-nav">
          <li className="nav-item"><Link to="/">dayTrack+</Link></li>
        </ul>

      </div>

      <div className="uk-navbar-right">

        <ul className="uk-navbar-nav">
          <li>
            <a href="https://getuikit.com/docs/navbar">
              {
            navName
          }
            </a>
          </li>
          {
            login != null && <li className="nav-item"><Link to="/login">{login}</Link></li>
          }
          {signup != null && <li className="nav-item"><Link to="/signup">{signup}</Link></li> }
          {
            logout != null && <li onClick={logoutHandler} className="nav-item"><a href="https://getuikit.com/docs/navbar">{logout}</a></li>
          }
        </ul>

      </div>

    </nav>
  );
};


export default Navbar;
