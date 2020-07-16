import React, { Fragment } from 'react';
import {Route} from 'react-router-dom';
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import HomePage from '../pages/HomePage';
import Profile from '../pages/Profile';
import SearchResult from '../pages/SearchResult';
import Notification from '../pages/Notification';
import Message from '../pages/Message';
// import PrivateRoute from './PrivateRoute';


const Routes = () => {
    return(
      <Fragment>
        <Route path='/searchresult' exact component={SearchResult} />
        <Route path='/login' exact component={LoginPage} />
        <Route path='/' exact component={RegisterPage} />
        <Route path='/homepage' exact component={HomePage} />
        <Route path='/profile' exact component={Profile} />
        <Route path='/notif' exact component={Notification} />
        <Route path='/message' exact component={Message} />
      </Fragment>
    )
}

export default Routes;
        // {*/// <PrivateRoute exact path="/" component={RegisterPage}  />*/}