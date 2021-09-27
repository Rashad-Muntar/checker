import { combineReducers } from 'redux';
import categoryReducer from './categoryReducer';
import userReducer from './userReducer';
import activityReducer from './activityReducer';

const rootReducer = combineReducers({ activityReducer, categoryReducer, userReducer });

export default rootReducer;
