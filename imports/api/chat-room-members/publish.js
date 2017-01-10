// Imports
import { Meteor } from 'meteor/meteor';

// App Imports
import ChatRoomMembers from './collection';

// Chat room members by chat room id
Meteor.publishComposite('chat-room-members-publication', (chatRoomId) => {
    return {
        find: function () {
            return ChatRoomMembers.find({ chatRoomId }, { sort: { createdAt: -1 } });
        },
        children: [,
            {
                find: function(chatRoomMember) {
                    return Meteor.users.find(chatRoomMember.userId);
                }
            }
        ]
    }
});