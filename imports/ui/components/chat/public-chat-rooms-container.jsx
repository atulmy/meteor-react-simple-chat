// Imports
import { Meteor } from 'meteor/meteor';
import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';

// App Imports
import ChatRooms from '../../../api/chat-rooms/collection';
import PublicChatRooms from './public-chat-rooms';

// Public Chat Rooms Container
const PublicChatRoomsContainer = createContainer(() => {
    const publicChatRoomsHandle = Meteor.subscribe('public-chat-rooms-publication');
    const publicChatRoomsLoaded = publicChatRoomsHandle.ready();
    const publicChatRooms = ChatRooms.find().fetch();

    return {
        publicChatRoomsLoaded,
        publicChatRooms
    };
}, PublicChatRooms);

// Finally, export the Container
export default PublicChatRoomsContainer;