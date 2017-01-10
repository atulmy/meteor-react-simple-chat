// Imports
import { Meteor } from 'meteor/meteor';

// App Imports
import ChatRooms from './collection';

// All chat rooms (with creator user details)
Meteor.publishComposite('public-chat-rooms-publication', () => {
    return {
        find: function () {
            return ChatRooms.find({ isPubic: true }, { sort: { createdAt: -1 } });
        },
        children: [,
            {
                find: function(chatRoom) {
                    return Meteor.users.find(chatRoom.userId, { fields: { _id: 1, username: 1, createdAt: 1 } });
                }
            }
        ]
    }
});

// Single chat rooms
Meteor.publish('chat-room-publication', (chatRoomId) => {
    return ChatRooms.find({ _id: chatRoomId }, { sort: { createdAt: -1 } });
});
