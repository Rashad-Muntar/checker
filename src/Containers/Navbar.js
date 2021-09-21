import React from 'react';
import axios from 'axios';
import '../assets/styles/Navbar.css';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setLogoutAction } from '../Actions';

const Navbar = () => {
  const user = useSelector((state) => state.userReducer);
  console.log(user);
  const dispatch = useDispatch();
  const history = useHistory();
  // const localUser = JSON.parse(localStorage.getItem('user'));

  const logoutHandler = () => {
    axios.delete('http://localhost:3000/api/logout', {
      withCredentials: true,
    })
      .then(() => {
        localStorage.removeItem('user');
        dispatch(setLogoutAction());
        history.push('/');
      });
  };

  return (
    <nav>

      <div />
      <div className="content-wrapper">
        <div className="left"><Link to="/">dayTrack+</Link></div>
        <div className="right">
          {/* {user.user.loggedIn === true && <span>I am logged in</span>} */}
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
