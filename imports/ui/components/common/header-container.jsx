// Imports
import { Meteor } from 'meteor/meteor';
import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';

// App Imports
import Header from './header';

// Header Container
const HeaderContainer = createContainer(() => {
    return {
        user:  Meteor.user() ? Meteor.user() : {}
    };
}, Header);

// Finally, export the Container
export default HeaderContainer;