// Imports
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

// App Imports
import ChatRooms from '../../api/chat-rooms/collection';
import ChatRoomMembers from '../../api/chat-room-members/collection';
import Chats from '../../api/chats/collection';

// User
if(Meteor.users.find().count() == 0) {
    let users = [
        { username: 'jonsnow', password: '123456'  },
        { username: 'aryastark', password: '123456'  },
        { username: 'tyron', password: '123456'  }
    ];

    users.forEach((user) => {
        Accounts.createUser(user);
    });

    const jonsnow = Meteor.users.findOne({ username: 'jonsnow' });
    const aryastark = Meteor.users.findOne({ username: 'aryastark' });
    const tyron = Meteor.users.findOne({ username: 'tyron' });

    // Chat Rooms
    if(ChatRooms.find().count() == 0) {
        const chatRoomId = ChatRooms.insert({ userId: jonsnow._id, title: 'Jon Snow Room', description: 'And my watch has ended.', isPubic: true });
        const chatRoomTwoId = ChatRooms.insert({ userId: aryastark._id, title: 'Arya Stark Room', description: 'A lady has no name.', isPubic: true });

        // Chat Room Members
        if(ChatRoomMembers.find().count() == 0) {
            ChatRoomMembers.insert({ chatRoomId, userId: jonsnow._id });
            ChatRoomMembers.insert({ chatRoomId, userId: aryastark._id });
            ChatRoomMembers.insert({ chatRoomId, userId: tyron._id });
        }

        // Chats
        if(Chats.find().count() == 0) {
            Chats.insert({ chatRoomId, userId: jonsnow._id, message: 'Hello from jonsnow' });
            Chats.insert({ chatRoomId, userId: aryastark._id, message: 'Hello from aryastark' });
            Chats.insert({ chatRoomId, userId: tyron._id, message: 'Hello from tyron' });
        }
    }
}