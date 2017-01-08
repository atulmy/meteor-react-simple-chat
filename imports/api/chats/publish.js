// Imports
import { Meteor } from 'meteor/meteor';

// App Imports
import Chats from './collection';

// All chat rooms
Meteor.publish('chats-publication', (chatRoomId) => {
    return Chats.find({ chatRoomId }, { sort: { createdAt: -1 } });
});
