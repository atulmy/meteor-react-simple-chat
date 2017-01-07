// Imports
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { Accounts } from 'meteor/accounts-base';

export const register = new ValidatedMethod({
    name: 'users.register',

    validate: new SimpleSchema({
        username: {
            type: String
        },

        password: {
            type: String
        }
    }).validator(),

    run({ username, password }) {
        console.log('M - users.register / run');

        let response = {
            success: false,
            message: 'There was some sever error.'
        };

        if(username != '' && password != '') {
            let success = Accounts.createUser({
                username,
                password
            });

            if(success) {
                response.success = true;
                response.message = 'Registered successfully. Please login to continue.';
            }
        }

        return response;
    }
});