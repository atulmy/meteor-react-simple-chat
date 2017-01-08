// Imports
import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Link } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';

// Menu Secondary Component
class MenuSecondary extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            open: true
        };
    }

    openToggle() {
        this.setState({
            open: !this.state.open
        });
    }

    render() {
        return (
            <div className="menu-secondary">
                <a href="javascript:void(0);" className="header-icon float-right" onClick={ this.openToggle.bind(this) }><i className="material-icons">menu</i></a>

                <ul className={ this.state.open ? '' : 'display-none' }>
                    <li><Link to="/about" onClick={ this.openToggle.bind(this) }>About</Link></li>
                    <li><a href="https://github.com/atulmy/meteor-react-simple-chat" target="_blank" onClick={ this.openToggle.bind(this) }>Github</a></li>
                </ul>
            </div>
        )
    }
}

// Contexts
MenuSecondary.contextTypes = {
    router: React.PropTypes.object.isRequired
};

// Finally, export the Container
export default MenuSecondary;