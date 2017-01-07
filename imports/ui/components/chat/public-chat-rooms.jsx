// Imports
import React from 'react';
import ReactHelmet from 'react-helmet';
import moment from 'moment';

// Public Chat Rooms Component
class PublicChatRooms extends React.Component {

    renderChatRooms() {
        let tweetsHtml;

        if (this.props.publicChatRoomsLoaded) {
            tweetsHtml = (
                this.props.publicChatRooms.map((chatRoom) => (
                    <div className="card" key={ chatRoom._id }>
                        <div className="card-body">
                            { chatRoom.title }
                        </div>

                        <div className="card-footer">
                            { moment(chatRoom.createdAt).fromNow() }
                        </div>
                    </div>
                ))
            )
        } else {
            tweetsHtml = (
                <p>Please wait...</p>
            )
        }

        return tweetsHtml;
    }

    render() {
        return (
            <div>
                <ReactHelmet
                    title="Public Chat Rooms - Simple Chat"
                />

                <div className="col s12 m4">
                    { this.renderChatRooms() }
                </div>

                <div className="col s12 m6">
                    b
                </div>
            </div>
        )
    }

}

// Properties
PublicChatRooms.propTypes = {
    publicChatRoomsLoaded: React.PropTypes.bool,
    publicChatRooms: React.PropTypes.array
};

// Contexts
PublicChatRooms.contextTypes = {
    router: React.PropTypes.object.isRequired
};

// Finally, export the Component
export default PublicChatRooms;
