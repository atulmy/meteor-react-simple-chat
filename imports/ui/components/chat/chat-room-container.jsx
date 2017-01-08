// Imports
import { Meteor } from 'meteor/meteor';
import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';

// App Imports
import ChatRooms from '../../../api/chat-rooms/collection';
import Chats from '../../../api/chats/collection';
import ChatRoom from './chat-room';

// Chat Room Container
const ChatRoomContainer = createContainer((props) => {

    const publicChatRoomsHandle = Meteor.subscribe('public-chat-rooms-publication');
    const publicChatRoomsLoaded = publicChatRoomsHandle.ready();
    const publicChatRooms = ChatRooms.find().fetch();

    const chatRoomHandle = Meteor.subscribe('chat-room-publication', props.params.chatRoomId);
    const chatRoomLoaded = chatRoomHandle.ready();
    const chatRoom = ChatRooms.findOne(props.params.chatRoomId);

    const chatsHandle = Meteor.subscribe('chats-publication', props.params.chatRoomId);
    const chatsLoaded = chatsHandle.ready();
    const chats = Chats.find({ chatRoomId: props.params.chatRoomId }).fetch();

    chats.forEach((chat, i) => {
        chats[i].user = Meteor.users.findOne(chats[i].userId, { fields: { _id: 1, username: 1 }});
    });

    return {
        publicChatRoomsLoaded,
        publicChatRooms,

        chatRoomLoaded,
        chatRoom,

        chatsLoaded,
        chats
    };
}, ChatRoom);

// Finally, export the Container
export default ChatRoomContainer;