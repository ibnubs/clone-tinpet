import React, { Fragment } from 'react';
import {Switch, Route} from 'react-router-dom';
import RegisterPage from "../pages/RegisterPage";
import Homepage from '../pages/Homepage';
import CreatePostModal from '../components/modals/CreatePostModal';

const Routes = () => {
    return(
      <Fragment>
      	<Route path='/modal' exact component={CreatePostModal} />
      	<Route path='/' exact component={RegisterPage} />
        <Route path='/homepage' exact component={Homepage} />
      </Fragment>
    )
}

export default Routes;