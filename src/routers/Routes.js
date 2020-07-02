import React, { Fragment } from 'react';
import {Route} from 'react-router-dom';
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import HomePage from '../pages/HomePage';
import CreatePostModal from '../components/modals/CreatePostModal';

const Routes = () => {
    return(
      <Fragment>
      	<Route path='/modal' exact component={CreatePostModal} />
      	<Route path='/' exact component={RegisterPage} />
        <Route path='/homepage' exact component={HomePage} />
        <Route path='/login' exact component={LoginPage} />
      </Fragment>
    )
}

export default Routes;