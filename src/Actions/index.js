import axios from 'axios';

export const categoryAction = (data) => ({
  type: 'FETCH-CATEGORIES',
  data,
});

export const signInUserAction = (login) => ({
  type: 'SIGN-IN',
  login,
});

export const signUpUserAction = (signup) => ({
  type: 'SIGN-UP',
  signup,
});

export const setLogginAction = (logout) => ({
  type: 'SET-LOGIN-USER',
  logout,
});

export const setLogoutAction = () => ({
  type: 'LOGOUT-USER',
});

export const categoryFetcher = () => async (dispatch) => {
  if (localStorage.getItem('user') != null) {
    const localUser = JSON.parse(localStorage.getItem('user'));
    try {
      const response = await axios.get(`https://gentle-taiga-27732.herokuapp.com/api/users/${localUser.id}/categories`);
      const category = await response.data;
      dispatch(categoryAction(category));
    } catch (error) {
      return error.message;
    }
  }
  return null;
};
