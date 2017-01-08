// Imports
import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Link } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';

// Menu Primary Component
class MenuPrimary extends React.Component {

    constructor(props) {
        super(props);
    }

    renderLinks() {
        let links;

        if (this.props.user && typeof this.props.user._id != 'undefined') {
            links = (
                <li><Link to="/direct-messages" activeClassName="active">Direct Messages</Link></li>
            )
        } else {
            links = (
                <li><Link to="/login" activeClassName="active">My Chats</Link></li>
            )
        }

        return links;
    }

    render() {
        return (
            <ul className="menu-primary">
                <li><Link to="/" activeClassName="active" onlyActiveOnIndex={ true }>Public Chat Rooms</Link></li>

                { this.renderLinks() }
            </ul>
        )
    }
}

// Properties
MenuPrimary.propTypes = {
    user: React.PropTypes.object
};

// Contexts
MenuPrimary.contextTypes = {
    router: React.PropTypes.object.isRequired
};

// Finally, export the Container
export default MenuPrimary;