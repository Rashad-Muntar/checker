import React, { useEffect, useState } from 'react';
import '../assets/styles/Navbar.css';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setLogoutAction } from '../Actions';

const Navbar = () => {
  const user = useSelector((state) => state.userReducer);
  const [navName, setNavName] = useState(null);
  const [login, setLogin] = useState(null);
  const [signup, setSignup] = useState(null);
  const [logout, setLogout] = useState(null);
  const history = useHistory();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    console.log('Log out');
    localStorage.removeItem('user');
    history.push('/');
    dispatch(setLogoutAction());
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
    <nav>
      <div className="content-wrapper">
        <div className="left"><Link to="/">dayTrack+</Link></div>
        <div className="right">
          <span className="name">{navName}</span>
          {
            login != null && <Link to="/login">{login}</Link>
          }
          {
          signup != null && <Link to="/signup">{signup}</Link>
          }

          {
            logout != null && <button type="button" className="logout" onClick={logoutHandler}>{logout}</button>
          }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
