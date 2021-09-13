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
    case 'LOGOUT-USER':
      return { user: {} };
    default:
      return state;
  }
};

export default userReducer;
