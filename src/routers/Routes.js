import React from 'react';
import {Switch, Route} from 'react-router-dom';



//page
import Homepage from '../pages/Homepage';

const Routes = () => {
    return(
        <Switch>
            <Route path='/' exact component={Homepage} />
        </Switch>
    )
}

export default Routes;