const initialState = {
  user: {},
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
