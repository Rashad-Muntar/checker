import React, { useEffect, useState } from 'react';
import '../assets/styles/Navbar.css';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setLogoutAction } from '../Actions';

const Navbar = () => {
  const user = useSelector((state) => state.userReducer);
  const [navName, setNavName] = useState('');
  const [login, setLogin] = useState('');
  const [signup, setSignup] = useState('');
  const [logout, setLogout] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  const navItemsLogic = () => {
    if (user.user) {
      setNavName(user.user.username);
      setLogin('');
      setSignup('');
      setLogout('Log out');
    } else {
      setNavName('');
      setSignup('Sign up');
      setLogin('Login');
      setLogout('');
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem('user');
    history.push('/');
    dispatch(setLogoutAction());
    navItemsLogic();
  };

  useEffect(() => {
    navItemsLogic();
  });
  return (
    <nav>
      <div className="content-wrapper">
        <div className="left"><Link to="/">dayTrack+</Link></div>
        <div className="right">
          <span className="name">{navName}</span>
          {
            login !== '' && <Link to="/login">{login}</Link>
          }
          {
          signup !== '' && <Link to="/signup">{signup}</Link>
          }

          {
            logout !== '' && <button type="button" className="logout" onClick={logoutHandler}>{logout}</button>
          }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
