// Imports
import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

// App Imports
import ChatRoomMembers from './collection';

export const add = new ValidatedMethod({
    name: 'ChatRoomMembers.add',

    validate: new SimpleSchema({
        tweet: {
            type: String
        }
    }).validator(),

    run({ chatRoomId }) {
        console.log('M - ChatRoomMembers.add / run');

        let response = {
            success: false,
            message: 'There was some sever error.'
        };

        if(chatRoomId != '') {
            let success = ChatRoomMembers.insert({
                chatRoomId,
                userId: Meteor.userId()
            });

            if(success) {
                response.success = true;
                response.message = 'Chat room member added.';
            }
        }

        return response;
    }
});
