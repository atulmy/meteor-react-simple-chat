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
            open: false
        };
    }

    openToggle() {
        this.setState({
            open: !this.state.open
        });
    }

    logout() {
        Meteor.logout();

        this.context.router.push('/');

        this.openToggle();
    }

    render() {
        return (
            <div className="menu-secondary">
                <a href="javascript:void(0);" className="header-icon float-right" onClick={ this.openToggle.bind(this) }><i className="material-icons">menu</i></a>

                <div onClick={ this.openToggle.bind(this) } className={ this.state.open ? 'menu-secondary-overlay' : 'menu-secondary-overlay display-none' }></div>

                <ul className={ this.state.open ? '' : 'display-none' }>
                    {
                        this.props.user && typeof this.props.user._id != 'undefined'
                            ?
                        <li><a href="javascript:void(0);" target="_blank" onClick={ this.logout.bind(this) }>Logout</a></li>
                            :
                        <li><Link to="/login" onClick={ this.openToggle.bind(this) }>Login</Link></li>
                    }
                    <li><Link to="/about" onClick={ this.openToggle.bind(this) }>About</Link></li>
                    <li><a href="https://github.com/atulmy/meteor-react-simple-chat" target="_blank" onClick={ this.openToggle.bind(this) }>Github</a></li>
                </ul>
            </div>
        )
    }
}

// Properties
MenuSecondary.propTypes = {
    user: React.PropTypes.object
};

// Contexts
MenuSecondary.contextTypes = {
    router: React.PropTypes.object.isRequired
};

// Finally, export the Container
export default MenuSecondary;