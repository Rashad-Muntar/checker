/* eslint-disable */
import { combineReducers } from 'redux';
import categoryReducer from './categoryReducer';
import userReducer from './userReducer';
import activityReducer from './activityReducer';

const appReducer = combineReducers({ activityReducer, categoryReducer, userReducer });

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT-USER') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
