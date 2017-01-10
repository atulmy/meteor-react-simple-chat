// Imports
import React from 'react';

// App Imports
import PublicChatRoomItem from './public-chat-room-item';

// Public Chat Room List Component
class PublicChatRoomList extends React.Component {

    renderChatRooms() {
        let chatRoomsList;

        if (this.props.publicChatRoomsLoaded) {
            if(this.props.publicChatRooms.length > 0) {
                chatRoomsList = (
                    this.props.publicChatRooms.map((chatRoom) => (
                        <PublicChatRoomItem chatRoom={ chatRoom } key={ chatRoom._id }/>
                    ))
                )
            } else {
                chatRoomsList = (
                    <div className="card tx-grey">
                        No chat rooms available. Why don't you create one?
                    </div>
                )
            }
        } else {
            chatRoomsList = (
                <p className="tx-grey">Please wait...</p>
            )
        }

        return chatRoomsList;
    }

    render() {
        return (
            <div>
                { this.renderChatRooms() }
            </div>
        )
    }

}

// Properties
PublicChatRoomList.propTypes = {
    publicChatRoomsLoaded: React.PropTypes.bool,
    publicChatRooms: React.PropTypes.array
};

// Contexts
PublicChatRoomList.contextTypes = {
    router: React.PropTypes.object.isRequired
};

// Finally, export the Component
export default PublicChatRoomList;
