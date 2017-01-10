// Imports
import React from 'react';
import moment from 'moment';
import { Link } from 'react-router';

// Public Chat Room Component
class PublicChatRoomItem extends React.Component {

    render() {
        const { _id, title, description, createdAt, user } = this.props.chatRoom;

        return (
            <Link to={ `/chat-room/${ _id }` }>
                <div className="card" title={ `Created by ${ user.username }` }>
                    <div className="card-header">
                        { title }
                    </div>

                    <div className="card-body">
                        { description }
                    </div>

                    <div className="card-footer">
                        { user.username } &bull; { moment(createdAt).fromNow() }
                    </div>
                </div>
            </Link>
        )
    }

}

// Properties
PublicChatRoomItem.propTypes = {
    chatRoom: React.PropTypes.object
};

// Finally, export the Component
export default PublicChatRoomItem;
