import React, { Fragment } from 'react';
import {Route} from 'react-router-dom';
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import HomePage from '../pages/HomePage';
import CreatePostModal from '../components/modals/CreatePostModal';
import RequestMeeting from '../components/modals/RequestMeeting';

const Routes = () => {
    return(
      <Fragment>
        <Route path='/register' exact component={RegisterPage} />
        <Route path='/login' exact component={LoginPage} />
        <Route path='/' exact component={HomePage} />
      	<Route path='/modal' exact component={CreatePostModal} />
        <Route path='/meeting' exact component={RequestMeeting} />
        <Route path='/homepage' exact component={HomePage} />
      </Fragment>
    )
}

export default Routes;