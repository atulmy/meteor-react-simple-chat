// Imports
import { Meteor } from 'meteor/meteor';

// App Imports
import Chats from './collection';

// Chats by chat room id
Meteor.publishComposite('chats-publication', (chatRoomId) => {
    return {
        find: function () {
            return Chats.find({ chatRoomId }, { sort: { createdAt: -1 } });
        },
        children: [,
            {
                find: function(chat) {
                    return Meteor.users.find(chat.userId);
                }
            }
        ]
    }
});