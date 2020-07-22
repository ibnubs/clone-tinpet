import { combineReducers } from 'redux';
import auth from './authentication';

import createPost from './createPost';
import post from './post';
import profile from './profile';
import getSinglePets from './getSinglePets';
import like from './like';
import notif from './notif';
import messageTampung from './messages';
import mesCount from './mesCount';

export default combineReducers({
    auth, createPost, post, profile,getSinglePets, like, notif, messageTampung, mesCount
});