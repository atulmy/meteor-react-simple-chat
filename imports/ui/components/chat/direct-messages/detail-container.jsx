// Imports
import { Meteor } from 'meteor/meteor';
import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';

// App Imports
import ChatRooms from '../../../../api/chat-rooms/collection';
import Chats from '../../../../api/chats/collection';
import DirectMessageDetail from './detail';

// Direct Message Detail Container
const DirectMessageDetailContainer = createContainer((props) => {

    const usersAllLoaded = Meteor.subscribe('users-all-publication').ready();
    const usersAll = Meteor.users.find({ _id: { $ne: Meteor.userId() } }, { sort: { createdAt: -1 }}).fetch();

    const chatRoomLoaded = Meteor.subscribe('chat-room-publication', props.params.chatRoomId).ready();
    const chatRoom = ChatRooms.findOne(props.params.chatRoomId);

    const chatsLoaded = Meteor.subscribe('chats-publication', props.params.chatRoomId).ready();
    const chats = Chats.find({ chatRoomId: props.params.chatRoomId }, { sort: { createdAt: 1 }}).fetch();
    chats.forEach((chat, i) => {
        chats[i].user = Meteor.users.findOne(chat.userId, { fields: { _id: 1, username: 1 }});
    });


    return {
        usersAllLoaded,
        usersAll,

        chatRoomLoaded,
        chatRoom,

        chatsLoaded,
        chats,

        user:  Meteor.user() ? Meteor.user() : {}
    };
}, DirectMessageDetail);

// Finally, export the Container
export default DirectMessageDetailContainer;