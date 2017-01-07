// Imports
import { Meteor } from 'meteor/meteor';

// App Imports
import ChatRooms from './collection';

// All chat rooms
Meteor.publish('chat-rooms', () => {
    return ChatRooms.find({}, { sort: { createdAt: -1 } });
});
