import React, { Fragment } from 'react';
import {Switch, Route} from 'react-router-dom';
import RegisterPage from "../pages/RegisterPage";
import Homepage from '../pages/HomePage';

const Routes = () => {
    return(
      <Fragment>
        <Route path='/register' exact component={RegisterPage} />
        <Route path='/' exact component={Homepage} />
      </Fragment>
    )
}

export default Routes;