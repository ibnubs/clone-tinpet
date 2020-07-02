import React, { Fragment } from 'react';
import {Route} from 'react-router-dom';
import RegisterPage from "../pages/RegisterPage";
import HomePage from '../pages/HomePage';
import CreatePostModal from '../components/modals/CreatePostModal';

const Routes = () => {
    return(
      <Fragment>
      	<Route path='/createpost' exact component={CreatePostModal} />
      	<Route path='/' exact component={RegisterPage} />
        <Route path='/homepage' exact component={HomePage} />
      </Fragment>
    )
}

export default Routes;