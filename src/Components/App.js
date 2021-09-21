import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { Route, Switch, useHistory } from 'react-router-dom';
import CategoryList from '../Containers/CategoryList';
import CategoryDetails from '../Containers/CategoryDetails';
import Signup from '../Containers/SignUp';
import Login from '../Containers/Login';
import UserPage from '../Containers/userPage';
import { signInUserAction, setLogoutAction } from '../Actions';
import Navbar from '../Containers/Navbar';
import Footer from './Footer';

function App() {
  const dispatch = useDispatch();
  const history = useHistory();

  const checkUser = () => {
    if (localStorage.getItem('user') != null) {
      const localUser = JSON.parse(localStorage.getItem('user'));
      dispatch(signInUserAction({ ...localUser, loggedIn: true }));
    } else {
      localStorage.removeItem('user');
      dispatch(setLogoutAction());
    }
  };

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

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <>

      <Navbar logoutHandler={logoutHandler} />

      <Switch>
        <Route path="/" component={CategoryList} exact />
        <Route path="/category/:id" component={CategoryDetails} exact />
        <Route path="/signup" component={Signup} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/user" component={UserPage} exact />
      </Switch>
      <Footer logoutHandler={logoutHandler} />
    </>
  );
}

export default App;
