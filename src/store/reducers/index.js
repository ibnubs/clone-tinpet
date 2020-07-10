import { combineReducers } from 'redux';
import auth from './authentication';
import createPost from './createPost';

export default combineReducers({
    auth, createPost
});