// Imports
import { Meteor } from 'meteor/meteor';
import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';

// App Imports
import DirectMessagesList from './list';

// Direct Messages List Container
const DirectMessagesListContainer = createContainer((props) => {

    const usersAllLoaded = Meteor.subscribe('users-all-publication').ready();
    const usersAll = Meteor.users.find({ _id: { $ne: Meteor.userId() } }, { sort: { createdAt: -1 }}).fetch();

    return {
        usersAllLoaded,
        usersAll,

        user:  Meteor.user() ? Meteor.user() : {}
    };
}, DirectMessagesList);

// Finally, export the Container
export default DirectMessagesListContainer;