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

export const getActivityAction = (data) => ({
  type: 'GET-ACTIVITY',
  data,
});

export const addActivityAction = (data) => ({
  type: 'ADD-ACTIVITY',
  data,
});
