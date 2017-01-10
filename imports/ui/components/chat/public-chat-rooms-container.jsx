// Imports
import { Meteor } from 'meteor/meteor';
import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';

// App Imports
import ChatRooms from '../../../api/chat-rooms/collection';
import PublicChatRooms from './public-chat-rooms';

// Public Chat Rooms Container
const PublicChatRoomsContainer = createContainer(() => {

    const publicChatRoomsLoaded = Meteor.subscribe('public-chat-rooms-publication').ready();
    const publicChatRooms = ChatRooms.find().fetch();
    publicChatRooms.forEach((chatRoom, i) => {
        publicChatRooms[i].user = Meteor.users.findOne(chatRoom.userId);
    });

    return {
        publicChatRoomsLoaded,
        publicChatRooms,

        user:  Meteor.user() ? Meteor.user() : {}
    };
}, PublicChatRooms);

// Finally, export the Container
export default PublicChatRoomsContainer;