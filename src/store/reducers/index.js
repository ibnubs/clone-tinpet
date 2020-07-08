import { combineReducers } from 'redux';
import auth from './authentication';
import post from './post';

export default combineReducers({
    auth,
    post
});