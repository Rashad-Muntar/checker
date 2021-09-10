import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
// import CategoryList from '../Containers/CategoryList';
import CategoryDetails from '../Containers/CategoryDetails';
import Signup from '../Containers/SignUp';
import Login from '../Containers/Login';
import UserPage from '../Containers/userPage';
// import { setLogginAction, setLogoutAction } from '../Actions';
import Navbar from '../Containers/Navbar';
// import localUser from '../Helpers/userState';

function App() {
  const user = useSelector((state) => state.userReducer);
  // console.log(user);
  const dispatch = useDispatch();
  // const [loginUser, setLoginUser] = useState('Not Logged_in');

  const checkLoginStatus = () => {
    try {
      axios.get('http://localhost:3000/api/logged_in', { withCredentials: true })
        .then((response) => {
          // if (response.data.logged_in && loginUser === 'Not Logged_in') {
          //   setLoginUser({
          //     loginUser: 'Logged in now',
          //     user: response.data.user,
          //   });
          // } else if (response.data.logged_in && loginUser === 'Logged in now') {
          //   setLoginUser({
          //     loginUser: 'Logged in now',
          //     user: {},
          //   });
          // }
          // console.log(response);
          // if (response.data.logged_in && user.loggedIn === false) {
          //   dispatch(setLogginAction(response.data.user));
          //   console.log(user);
          // } else if (!response.data.logged_in && user.loggedIn === true) {
          //   localStorage.removeItem('current_user');
          //   dispatch(setLogoutAction());
          // }
        });
    } catch (error) {
      return error.message;
    }
    return null;
  };

  const handleSuccesfullAuth = (data) => {
    // setLoginUser('Logged in now');
    console.log(data);
  };

  useEffect(() => {
    // checkLoginStatus();
  }, []);

  return (
    <>
      <Navbar loginUser={loginUser} />
      <Switch>
        {/* <Route path="/" component={CategoryList} exact /> */}
        <Route path="/category/:id" component={CategoryDetails} exact />
        <Route
          path="/signup"
          render={() => (
            <Signup handleSuccesfullAuth={handleSuccesfullAuth} />
          )}
          exact
        />
        <Route
          path="/login"
          render={() => (
            <Login handleSuccesfullAuth={handleSuccesfullAuth} />
          )}
          exact
        />
        <Route
          path="/user"
          render={() => (
            <UserPage loginUser={loginUser} />
          )}
          exact
        />
      </Switch>
    </>
  );
}

export default App;
