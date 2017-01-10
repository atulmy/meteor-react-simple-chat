// Imports
import { Meteor } from 'meteor/meteor';
import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';

// App Imports
import DirectMessages from './direct-messages';

// Direct Messages Container
const DirectMessagesContainer = createContainer((props) => {

    const usersAllLoaded = Meteor.subscribe('users-all-publication').ready();
    const usersAll = Meteor.users.find({ _id: { $ne: Meteor.userId() } }, { sort: { createdAt: -1 }}).fetch();

    return {
        usersAllLoaded,
        usersAll,

        user:  Meteor.user() ? Meteor.user() : {}
    };
}, DirectMessages);

// Finally, export the Container
export default DirectMessagesContainer;