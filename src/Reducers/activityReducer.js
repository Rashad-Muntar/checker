const initialState = {
  data: [

  ],
};

const activityReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET-ACTIVITY':
      return {
        ...state,
        data: action.data,
      };

    case 'ADD-ACTIVITY':
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
};

export default activityReducer;
