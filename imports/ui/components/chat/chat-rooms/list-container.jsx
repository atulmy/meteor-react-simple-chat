// Imports
import { Meteor } from 'meteor/meteor';
import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';

// App Imports
import ChatRooms from '../../../../api/chat-rooms/collection';
import ChatRoomsList from './list';

//  Chat Rooms List Container
const ChatRoomsListContainer = createContainer(() => {

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
}, ChatRoomsList);

// Finally, export the Container
export default ChatRoomsListContainer;