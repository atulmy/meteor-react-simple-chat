// Imports
import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

// App Imports
import { ChatRooms } from './collection';

export const add = new ValidatedMethod({
    name: 'ChatRooms.add',

    validate: new SimpleSchema({
        title: {
            type: String
        }
    }).validator(),

    run({ title }) {
        console.log('M - ChatRooms.add / run');

        let response = {
            success: false,
            message: 'There was some sever error.'
        };

        if(title != '') {
            let success = ChatRooms.insert({
                title,
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
