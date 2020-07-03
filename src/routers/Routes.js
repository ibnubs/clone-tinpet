import React, { Fragment } from 'react';
import {Route} from 'react-router-dom';
import RegisterPage from "../pages/RegisterPage";
import HomePage from '../pages/HomePage';
import CreatePostModal from '../components/modals/CreatePostModal';
import Profile from '../pages/Profile';

const Routes = () => {
    return(
      <Fragment>
        <Route path='/modal' exact component={CreatePostModal} />
        <Route path='/' exact component={RegisterPage} />
        <Route path='/homepage' exact component={HomePage} />
        <Route path='/register' exact component={RegisterPage} />
        <Route path='/profile' exact component={Profile} />
      </Fragment>
    )
}

export default Routes;