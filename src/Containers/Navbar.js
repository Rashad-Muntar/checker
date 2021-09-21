import React from 'react';
import axios from 'axios';
import '../assets/styles/Navbar.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = ({logoutHandler}) => {
  const user = useSelector((state) => state.userReducer);
  console.log(user);
 
  
  // const localUser = JSON.parse(localStorage.getItem('user'));

  return (
    <nav>

      <div />
      <div className="content-wrapper">
        <div className="left"><Link to="/">dayTrack+</Link></div>
        <div className="right">
          {user.user && user.user.loggedIn === true
            ? (
              <>
                {}
                <i className="user outline icon" />
                <span className="name">{user.user.username}</span>
                <button type="button" className="logout" onClick={logoutHandler}>Logout</button>
              </>
            ) : (
              <>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
              </>
            )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
