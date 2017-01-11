// Imports
import React from 'react';
import moment from 'moment';
import { Link } from 'react-router';

// App Imports
import * as ChatRoomMethods from '../../../../api/chat-rooms/methods';

// Direct Message Item Component
class DirectMessageItem extends React.Component {

    startChatWithUser(id) {
        console.log(id);

        let input = {};
        input.friendUserId = id;

        ChatRoomMethods.getDirectMessageRoom.call(input, (error, response) => {
            console.log('M - ChatRoomMethods.getDirectMessageRoom / callback');

            this.setState({ isLoading: false });

            if(error) {
                this.setState({ error: error.reason });
            } else {
                this.context.router.push(`/direct-message/${ response.data.chatRoomId }`);
            }
        });
    }

    render() {
        const { _id, username, createdAt } = this.props.user;

        return (
            <div className="card" onClick={ this.startChatWithUser.bind(this, _id) }>
                <div className="card-header">
                    { username }
                </div>

                <div className="card-footer">
                    Joined { moment(createdAt).fromNow() }
                </div>
            </div>
        )
    }

}

// Properties
DirectMessageItem.propTypes = {
    user: React.PropTypes.object
};

// Contexts
DirectMessageItem.contextTypes = {
    router: React.PropTypes.object.isRequired
};

// Finally, export the Component
export default DirectMessageItem;
