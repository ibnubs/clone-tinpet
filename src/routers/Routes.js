import React, { Fragment } from 'react';
import {Route} from 'react-router-dom';
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import HomePage from '../pages/HomePage';
import RequestMeeting from '../components/modals/RequestMeeting';
import CreatePostModal from '../components/modals/CreatePostModal';
import Profile from '../pages/Profile';
import SearchResult from '../pages/SearchResult';
import UpdateProfileModal from '../components/modals/UpdateProfileModal';



const Routes = () => {
    return(
      <Fragment>

      	<Route path='/updateprofile' exact component={UpdateProfileModal} />
      	<Route path='/searchresult' exact component={SearchResult} />
        <Route path='/login' exact component={LoginPage} />
        <Route path='/' exact component={RegisterPage} />
        <Route path='/homepage' exact component={HomePage} />
        <Route path='/register' exact component={RegisterPage} />
        <Route path='/profile' exact component={Profile} />
        <Route path='/req' exact component={RequestMeeting} />
      </Fragment>
    )
}

export default Routes;