import { combineReducers } from 'redux';
// import categoryReducer from './categoryReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({ userReducer });

export default rootReducer;
