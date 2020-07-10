import { combineReducers } from 'redux';
import auth from './authentication';

import createPost from './createPost';
import post from './post';

export default combineReducers({
    auth, createPost, post
});