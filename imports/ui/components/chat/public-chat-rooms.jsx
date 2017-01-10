// Imports
import React from 'react';
import ReactHelmet from 'react-helmet';
import { Link } from 'react-router';

// App Imports
import PublicChatRoomCreate from './public-chat-room-create';
import PublicChatRoomList from './public-chat-room-list';

// Public Chat Rooms Component
class PublicChatRooms extends React.Component {

    render() {
        return (
            <div>
                <ReactHelmet
                    title="Public Chat Rooms - Simple Chat"
                />

                <div className="col s12 m4">
                    <PublicChatRoomList
                        publicChatRoomsLoaded={ this.props.publicChatRoomsLoaded }
                        publicChatRooms={ this.props.publicChatRooms }
                    />

                    <PublicChatRoomCreate user={ this.props.user } />
                </div>

                <div className="col s12 m6">
                    <p className="tx-grey">Select a chat room to begin.</p>
                </div>
            </div>
        )
    }

}

// Properties
PublicChatRooms.propTypes = {
    publicChatRoomsLoaded: React.PropTypes.bool,
    publicChatRooms: React.PropTypes.array,

    user: React.PropTypes.object
};

// Contexts
PublicChatRooms.contextTypes = {
    router: React.PropTypes.object.isRequired
};

// Finally, export the Component
export default PublicChatRooms;
