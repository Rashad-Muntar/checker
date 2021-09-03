const initialState = {
  // data: {
  data: [

  ],
  // },
};
const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH-CATEGORIES':
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
};

export default categoryReducer;
