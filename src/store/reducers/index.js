import { combineReducers } from 'redux';
import auth from './authentication';

import createPost from './createPost';
import post from './post';
import profile from './profile';
import ownpets from './ownpets';

export default combineReducers({
    auth, createPost, post, profile,ownpets
});