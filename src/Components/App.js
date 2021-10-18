import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router, Route, Switch, useHistory,
} from 'react-router-dom';
import CategoryList from '../Containers/CategoryList';
import CategoryDetails from '../Containers/CategoryDetails';
import Signup from '../Containers/SignUp';
import Login from '../Containers/Login';
import UserPage from '../Containers/userPage';
import LandingPage from './landingPage';
import { signInUserAction, setLogoutAction } from '../Actions';
import Navbar from '../Containers/Navbar';
import Footer from './Footer';
import { logoutHandler } from '../APIs/calls';

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

  const userlogoutHandler = () => {
    logoutHandler();
    dispatch(setLogoutAction());
    history.push('/signup');
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <Router>
      <Navbar logoutHandler={userlogoutHandler} />

      <Switch>
        <Route path="/" component={CategoryList} exact />
        <Route path="/success-auth" component={LandingPage} exact />
        <Route path="/category/:id" component={CategoryDetails} exact />
        <Route path="/signup" component={Signup} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/user" component={UserPage} exact />
        <Route>Oooops 404 NOT FOUND</Route>
      </Switch>
      <Footer logoutHandler={userlogoutHandler} />
    </Router>
  );
}

export default App;
