// const initialState = [

// ];

const activityReducer = (state = { data: [] }, action) => {
  switch (action.type) {
    case 'GET-ACTIVITY':
      return {
        ...state,
        data: action.data,
      };

    case 'ADD-ACTIVITY':
      return { data: [action.data, ...state.data] };
    default:
      return state;
  }
};

export default activityReducer;
