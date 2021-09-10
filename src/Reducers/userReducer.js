// const User = (state = { user: {}, loggedIn: false }, action) => {
//   switch (action.type) {
//     case 'SIGN-IN':
//       return { ...state, user: { ...action.signup }, loggedIn: true };
//     case 'SIGN-UP':
//       return { ...state, user: { ...action.loginUSer }, loggedIn: true };
//     case 'SET-LOGIN-USER':
//       return { ...state, user: { ...action.loggedUser }, loggedIn: true };
//     case 'LOGOUT-USER':
//       return { user: {}, loggedIn: false };
//     default:
//       return state;
//   }
// };

const initialState = {
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGN-UP':
      return {
        ...state,
        user: { ...action.signup },
      };
    case 'SIGN-IN':
      return {
        ...state,
        user: { ...action.login },
      };
    default:
      return state;
  }
};

export default userReducer;
