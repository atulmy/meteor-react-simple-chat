// Imports
import React from 'react';
import ReactHelmet from 'react-helmet';

// App Imports
import ChatRoomItem from './chat-room-item';
import ChatItem from './chat-item';

// Chat Room Component
class ChatRoom extends React.Component {

    renderChatRooms() {
        let chatRoomsList;

        if (this.props.publicChatRoomsLoaded) {
            chatRoomsList = (
                this.props.publicChatRooms.map((chatRoom) => (
                    <ChatRoomItem chatRoom={ chatRoom } key={ chatRoom._id }/>
                ))
            )
        } else {
            chatRoomsList = (
                <p>Please wait...</p>
            )
        }

        return chatRoomsList;
    }

    renderChats() {
        let chatsList;

        if (this.props.chatsLoaded) {
            if(this.props.chats.length > 0) {
                chatsList = (
                    this.props.chats.map((chat) => (
                        <ChatItem chat={ chat } key={ chat._id }/>
                    ))
                )
            } else {
                chatsList = (
                    <p>No message to show.</p>
                )
            }
        } else {
            chatsList = (
                <p>Please wait...</p>
            )
        }

        return chatsList;
    }

    renderChatRoomDetails() {
        let chatRoomDetails;

        if (this.props.chatRoomLoaded) {
            chatRoomDetails = (
                <p className="chat-room-header">{ this.props.chatRoom.title }</p>
            )
        }

        return chatRoomDetails;
    }

    render() {
        return (
            <div>
                <ReactHelmet
                    title="Chat Room - Simple Chat"
                />

                <div className="col s12 m4">
                    { this.renderChatRooms() }
                </div>

                <div className="col s12 m6">
                    { this.renderChatRoomDetails() }

                    { this.renderChats() }
                </div>
            </div>
        )
    }

}

// Properties
ChatRoom.propTypes = {
    publicChatRoomsLoaded: React.PropTypes.bool,
    publicChatRooms: React.PropTypes.array,

    chatRoomLoaded: React.PropTypes.bool,
    chatRoom: React.PropTypes.object,

    chatsLoaded: React.PropTypes.bool,
    chats: React.PropTypes.array
};

// Contexts
ChatRoom.contextTypes = {
    router: React.PropTypes.object.isRequired
};

// Finally, export the Component
export default ChatRoom;
