import React, { Fragment } from 'react';
import {Route} from 'react-router-dom';
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import HomePage from '../pages/HomePage';
import CreatePostModal from '../components/modals/CreatePostModal';


const Routes = () => {
    return(
      <Fragment>
        <Route path='/register' exact component={RegisterPage} />
        <Route path='/login' exact component={LoginPage} />
        <Route path='/' exact component={HomePage} />
      	<Route path='/modal' exact component={CreatePostModal} />
        <Route path='/homepage' exact component={HomePage} />
      </Fragment>
    )
}

export default Routes;