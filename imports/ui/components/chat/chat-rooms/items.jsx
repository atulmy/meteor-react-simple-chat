// Imports
import React from 'react';

// App Imports
import ChatRoomsItem from './item';

//  Chat Room Items Component
class ChatRoomItems extends React.Component {

    renderChatRooms() {
        let chatRoomsList;

        if (this.props.publicChatRoomsLoaded) {
            if(this.props.publicChatRooms.length > 0) {
                chatRoomsList = (
                    this.props.publicChatRooms.map((chatRoom) => (
                        <ChatRoomsItem chatRoom={ chatRoom } key={ chatRoom._id }/>
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
ChatRoomItems.propTypes = {
    publicChatRoomsLoaded: React.PropTypes.bool,
    publicChatRooms: React.PropTypes.array
};

// Contexts
ChatRoomItems.contextTypes = {
    router: React.PropTypes.object.isRequired
};

// Finally, export the Component
export default ChatRoomItems;
