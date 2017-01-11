// Imports
import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// App Imports
import App from '../../ui/components/app';
// Pages
import PublicChatRoomsListContainer from '../../ui/components/chat/chat-rooms/list-container';
import PublicChatRoomsDetailContainer from '../../ui/components/chat/chat-rooms/detail-container';
import DirectMessagesListContainer from '../../ui/components/chat/direct-messages/list-container';
import DirectMessagesDetailContainer from '../../ui/components/chat/direct-messages/detail-container';
import About from '../../ui/components/about';
import PageNotFound from '../../ui/components/page-not-found';
// User
import UserLogin from '../../ui/components/user/login';
import UserRegister from '../../ui/components/user/register';

const AppRoutes = (
    <Router history={browserHistory}>
        <Route path="/" component={ App }>
            <IndexRoute component={ PublicChatRoomsListContainer } />
            <Route path="chat-room/:chatRoomId" component={ PublicChatRoomsDetailContainer } />

            <Route path="direct-messages" component={ DirectMessagesListContainer } />
            <Route path="direct-message/:chatRoomId" component={ DirectMessagesDetailContainer } />

            <Route path="about" component={ About } />

            <Route path="login" component={ UserLogin } />
            <Route path="register" component={ UserRegister } />

            <Route path="*" component={ PageNotFound } status={404}/>
        </Route>
    </Router>
);

export default AppRoutes;