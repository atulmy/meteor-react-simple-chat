// Imports
import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// App Imports
import App from '../../ui/components/app';
// Pages
import PublicChatRoomsContainer from '../../ui/components/chat/public-chat-rooms-container';
import PublicChatRoomContainer from '../../ui/components/chat/public-chat-room-container';
import DirectMessagesContainer from '../../ui/components/chat/direct-messages-container';
import DirectMessageContainer from '../../ui/components/chat/direct-message-container';
import About from '../../ui/components/about';
import PageNotFound from '../../ui/components/page-not-found';
// User
import UserLogin from '../../ui/components/user/login';
import UserRegister from '../../ui/components/user/register';

const AppRoutes = (
    <Router history={browserHistory}>
        <Route path="/" component={ App }>
            <IndexRoute component={ PublicChatRoomsContainer } />

            <Route path="chat-room/:chatRoomId" component={ PublicChatRoomContainer } />
            <Route path="direct-messages" component={ DirectMessagesContainer } />
            <Route path="direct-message/:chatRoomId" component={ DirectMessageContainer } />

            <Route path="about" component={ About } />

            <Route path="login" component={ UserLogin } />
            <Route path="register" component={ UserRegister } />

            <Route path="*" component={ PageNotFound } status={404}/>
        </Route>
    </Router>
);

export default AppRoutes;