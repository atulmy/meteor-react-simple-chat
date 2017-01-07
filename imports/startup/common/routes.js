// Imports
import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// App Imports
import App from '../../ui/components/app';
// User
import UserLogin from '../../ui/components/user/login';
import UserRegister from '../../ui/components/user/register';
// Pages
import Home from '../../ui/components/home';
import About from '../../ui/components/about';

const AppRoutes = (
    <Router history={browserHistory}>
        <Route path="/" component={ App }>
            <IndexRoute component={ Home } />
            <Route path="login" component={ UserLogin } />
            <Route path="register" component={ UserRegister } />
            <Route path="about" component={ About } />
        </Route>
    </Router>
);

export default AppRoutes;