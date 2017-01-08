// Imports
import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// App Imports
import App from '../../ui/components/app';
// Pages
import PublicChatRoomsContainer from '../../ui/components/chat/public-chat-rooms-container';
import ChatRoomContainer from '../../ui/components/chat/chat-room-container';
import DirectMessages from '../../ui/components/chat/direct-messages';
import About from '../../ui/components/about';
// User
import UserLogin from '../../ui/components/user/login';
import UserRegister from '../../ui/components/user/register';

const AppRoutes = (
    <Router history={browserHistory}>
        <Route path="/" component={ App }>
            <IndexRoute component={ PublicChatRoomsContainer } />

            <Route path="chat-room/:chatRoomId" component={ ChatRoomContainer } />
            <Route path="direct-messages" component={ DirectMessages } />

            <Route path="about" component={ About } />

            <Route path="login" component={ UserLogin } />
            <Route path="register" component={ UserRegister } />
        </Route>
    </Router>
);

export default AppRoutes;