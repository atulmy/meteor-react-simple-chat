// Imports
import React from 'react';
import moment from 'moment';
import { Link } from 'react-router';

// Chat Component
class ChatItem extends React.Component {

    render() {
        const chat = this.props.chat;

        return (
            <div className="list">
                <div className="list-body font-handwriting font-size-1-3">
                    { chat.message }
                </div>

                <div className="list-footer">
                    { chat.user.username } &bull; { moment(chat.createdAt).fromNow() }
                </div>
            </div>
        )
    }

}

// Properties
ChatItem.propTypes = {
    chat: React.PropTypes.object
};

// Finally, export the Component
export default ChatItem;
