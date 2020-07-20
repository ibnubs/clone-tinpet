import { combineReducers } from 'redux';
import auth from './authentication';

import createPost from './createPost';
import post from './post';
import profile from './profile';
import getSinglePets from './getSinglePets';
import searchPet from './searchPet';

export default combineReducers({
    auth, 
    createPost, 
    post, 
    profile,
    getSinglePets,
    searchPet
});