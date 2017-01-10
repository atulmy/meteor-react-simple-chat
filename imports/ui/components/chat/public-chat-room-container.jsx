// Imports
import { Meteor } from 'meteor/meteor';
import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';

// App Imports
import ChatRooms from '../../../api/chat-rooms/collection';
import ChatRoomMembers from '../../../api/chat-room-members/collection';
import Chats from '../../../api/chats/collection';
import PublicChatRoom from './public-chat-room';

// Public Chat Room Container
const PublicChatRoomContainer = createContainer((props) => {

    const publicChatRoomsLoaded = Meteor.subscribe('public-chat-rooms-publication').ready();
    const publicChatRooms = ChatRooms.find({}, { sort: { createdAt: -1 }}).fetch();
    publicChatRooms.forEach((chatRoom, i) => {
        publicChatRooms[i].user = Meteor.users.findOne(chatRoom.userId);
    });

    const chatRoomLoaded = Meteor.subscribe('chat-room-publication', props.params.chatRoomId).ready();
    const chatRoom = ChatRooms.findOne(props.params.chatRoomId);

    const chatRoomMembersLoaded = Meteor.subscribe('chat-room-members-publication', props.params.chatRoomId).ready();
    const chatRoomMembers = ChatRoomMembers.find({ chatRoomId: props.params.chatRoomId }).fetch();
    chatRoomMembers.forEach((chatRoomMember, i) => {
        chatRoomMembers[i].user = Meteor.users.findOne(chatRoomMember.userId);
    });

    const chatsLoaded = Meteor.subscribe('chats-publication', props.params.chatRoomId).ready();
    const chats = Chats.find({ chatRoomId: props.params.chatRoomId }, { sort: { createdAt: 1 }}).fetch();
    chats.forEach((chat, i) => {
        chats[i].user = Meteor.users.findOne(chat.userId);
    });

    return {
        chatRoomId: props.params.chatRoomId,

        publicChatRoomsLoaded,
        publicChatRooms,

        chatRoomLoaded,
        chatRoom,

        chatRoomMembersLoaded,
        chatRoomMembers,

        chatsLoaded,
        chats,

        user:  Meteor.user() ? Meteor.user() : {}
    };
}, PublicChatRoom);

// Finally, export the Container
export default PublicChatRoomContainer;