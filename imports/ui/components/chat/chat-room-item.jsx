// Imports
import React from 'react';
import moment from 'moment';
import { Link } from 'react-router';

// Chat Room Component
class ChatRoomItem extends React.Component {

    render() {
        const { _id, title, description, createdAt } = this.props.chatRoom;

        return (
            <Link to={ `/chat-room/${ _id }` }>
                <div className="card">
                    <div className="card-header">
                        { title }
                    </div>

                    <div className="card-body">
                        { description }
                    </div>

                    <div className="card-footer">
                        { moment(createdAt).fromNow() }
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
