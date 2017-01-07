// Imports
import { Accounts } from 'meteor/accounts-base';

// User
if(Meteor.users.find().count() == 0) {
    let user = { username: 'jonsnow', password: '123456'  };

    Accounts.createUser(user);
}