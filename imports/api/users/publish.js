// Imports
import { Meteor } from 'meteor/meteor';

// All users
Meteor.publish('users-all-publication', () => {
    return Meteor.users.find({}, { fields: { _id: 1, username: 1, createdAt: 1 } });
});
