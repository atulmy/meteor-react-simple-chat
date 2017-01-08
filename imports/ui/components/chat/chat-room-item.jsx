// Imports
import React from 'react';
import moment from 'moment';
import { Link } from 'react-router';

// Chat Room Component
class ChatRoomItem extends React.Component {

    render() {
        const chatRoom = this.props.chatRoom;

        return (
            <Link to={ `/chat-room/${ chatRoom._id }` }>
                <div className="card">
                    <div className="card-header">
                        { chatRoom.title }
                    </div>

                    <div className="card-body">
                        Some description
                    </div>

                    <div className="card-footer">
                        { moment(chatRoom.createdAt).fromNow() }
                    </div>
                </div>
            </Link>
        )
    }

}

// Properties
ChatRoomItem.propTypes = {
    chatRoom: React.PropTypes.object
};

// Finally, export the Component
export default ChatRoomItem;
