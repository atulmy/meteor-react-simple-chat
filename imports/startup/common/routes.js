// Imports
import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// App Imports
import App from '../../ui/components/app';
// Pages
import PublicChatRoomsContainer from '../../ui/components/chat/public-chat-rooms-container';
import MyChats from '../../ui/components/chat/my-chats';
import About from '../../ui/components/about';
// User
import UserLogin from '../../ui/components/user/login';
import UserRegister from '../../ui/components/user/register';

const AppRoutes = (
    <Router history={browserHistory}>
        <Route path="/" component={ App }>
            <IndexRoute component={ PublicChatRoomsContainer } />

            <Route path="my-chats" component={ MyChats } />

            <Route path="about" component={ About } />

            <Route path="login" component={ UserLogin } />
            <Route path="register" component={ UserRegister } />
        </Route>
    </Router>
);

export default AppRoutes;