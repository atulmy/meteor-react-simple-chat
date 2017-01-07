// Imports
import { Meteor } from 'meteor/meteor';

// App Imports
import { ChatRoomMembers } from './collection';

// All chat rooms
Meteor.publish('chat-room-members', () => {
    return ChatRoomMembers.find({}, { sort: { createdAt: -1 } });
});
