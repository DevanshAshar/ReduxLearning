import authReducer from './authReducer.js';
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
    authReducer
});
export default rootReducer;