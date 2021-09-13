import React, { useEffect } from 'react';
// import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
// import CategoryList from '../Containers/CategoryList';
import axios from 'axios';
import CategoryDetails from '../Containers/CategoryDetails';
import Signup from '../Containers/SignUp';
import Login from '../Containers/Login';
import UserPage from '../Containers/userPage';
import { signInUserAction } from '../Actions';
import Navbar from '../Containers/Navbar';

function App() {
  const dispatch = useDispatch();

  const checkUser = () => {
    if (localStorage.getItem('user') != null) {
      const localUser = JSON.parse(localStorage.getItem('user'));
      dispatch(signInUserAction(localUser));
    }
  };

  const testCat = () => {
    axios.get('http://localhost:3000/api/current_user')
      .then((res) => {
        console.log(res);
      });
  };
  const handleSuccesfullAuth = (data) => {
    // setLoginUser('Logged in now');
    console.log(data);
  };

  useEffect(() => {
    checkUser();
  }, []);

  useEffect(() => {
    testCat();
  }, []);

  return (
    <>
      <Navbar />
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
            <UserPage />
          )}
          exact
        />
      </Switch>
    </>
  );
}

export default App;
