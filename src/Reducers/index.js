import { combineReducers } from 'redux';
import categoryReducer from './categoryReducer';

const rootReducer = combineReducers({ categoryReducer });

export default rootReducer;
