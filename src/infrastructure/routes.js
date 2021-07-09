import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

// pages
import Login from '../pages/auth/login';

const RouterMaps = () => (
    <Router>
        <Switch>
            <Route path='/login'>
                <Login />
            </Route>
            <Route path='/register'>
                <div>Register</div>
            </Route>
            <Route path='/'>
                <div>Base</div>
            </Route>
        </Switch>
    </Router>
);

export default RouterMaps;