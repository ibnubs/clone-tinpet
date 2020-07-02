import React, { Fragment } from 'react';
import {Route} from 'react-router-dom';
import RegisterPage from "../pages/RegisterPage";
import HomePage from '../pages/HomePage';
import Profile from '../pages/Profile';

const Routes = () => {
    return(
      <Fragment>
        <Route path='/register' exact component={RegisterPage} />
        <Route path='/' exact component={HomePage} />
        <Route path='/profile' exact component={Profile} />
      </Fragment>
    )
}

export default Routes;