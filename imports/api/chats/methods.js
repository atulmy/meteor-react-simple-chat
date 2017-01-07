// Imports
import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

// App Imports
import { Chats } from './collection';

export const add = new ValidatedMethod({
    name: 'ChatRooms.add',

    validate: new SimpleSchema({
        tweet: {
            type: String
        }
    }).validator(),

    run({ chatRoomId, message }) {
        console.log('M - ChatRooms.add / run');

        let response = {
            success: false,
            message: 'There was some sever error.'
        };

        if(chatRoomId != '' && message != '') {
            let success = Chats.insert({
                chatRoomId,
                message,
                userId: Meteor.userId()
            });

            if(success) {
                response.success = true;
                response.message = 'Chat room added.';
            }
        }

        return response;
    }
});
