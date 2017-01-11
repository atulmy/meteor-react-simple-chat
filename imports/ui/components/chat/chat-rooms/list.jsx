// Imports
import React from 'react';
import ReactHelmet from 'react-helmet';
import { Link } from 'react-router';

// App Imports
import ChatRoomsCreate from './create';
import ChatRoomItems from './items';

//  Chat Rooms List Component
class ChatRoomsList extends React.Component {

    render() {
        return (
            <div>
                <ReactHelmet
                    title=" Chat Rooms - Simple Chat"
                />

                <div className="col s12 m4">
                    <ChatRoomItems
                        publicChatRoomsLoaded={ this.props.publicChatRoomsLoaded }
                        publicChatRooms={ this.props.publicChatRooms }
                    />

                    <ChatRoomsCreate user={ this.props.user } />
                </div>

                <div className="col s12 m6">
                    <p className="tx-grey">Select a chat room to begin.</p>
                </div>
            </div>
        )
    }

}

// Properties
ChatRoomsList.propTypes = {
    publicChatRoomsLoaded: React.PropTypes.bool,
    publicChatRooms: React.PropTypes.array,

    user: React.PropTypes.object
};

// Contexts
ChatRoomsList.contextTypes = {
    router: React.PropTypes.object.isRequired
};

// Finally, export the Component
export default ChatRoomsList;
