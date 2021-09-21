import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import CategoryList from '../Containers/CategoryList';
import CategoryDetails from '../Containers/CategoryDetails';
import Signup from '../Containers/SignUp';
import Login from '../Containers/Login';
import UserPage from '../Containers/userPage';
import { signInUserAction, setLogoutAction } from '../Actions';
import Navbar from '../Containers/Navbar';

function App() {
  const dispatch = useDispatch();

  const checkUser = () => {
    if (localStorage.getItem('user') != null) {
      const localUser = JSON.parse(localStorage.getItem('user'));
      dispatch(signInUserAction({ ...localUser, loggedIn: true }));
    } else {
      localStorage.removeItem('user');
      dispatch(setLogoutAction());
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <>

      <Navbar />

      <Switch>
        <Route path="/" component={CategoryList} exact />
        <Route path="/category/:id" component={CategoryDetails} exact />
        <Route path="/signup" component={Signup} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/user" component={UserPage} exact />
      </Switch>
    </>
  );
}

export default App;
