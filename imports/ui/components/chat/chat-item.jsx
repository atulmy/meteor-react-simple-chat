// Imports
import React from 'react';
import moment from 'moment';
import { Link } from 'react-router';

// Chat Component
class ChatItem extends React.Component {

    render() {
        const chat = this.props.chat;

        return (
            <div className="card">
                <div className="card-header">
                    { chat.message }
                </div>

                <div className="card-body">
                    Some description
                </div>

                <div className="card-footer">
                    { moment(chat.createdAt).fromNow() }
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
