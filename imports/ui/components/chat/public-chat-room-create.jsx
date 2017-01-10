// Imports
import React from 'react';
import { Link } from 'react-router';

// App Imports
import * as ChatRoomMethods from '../../../api/chat-rooms/methods';

// Chat Room Create Component
class PublicChatRoomCreate extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            roomTitle: '',
            roomDescription: '',
            isLoading: false,
            error: ''
        }
    }

    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onSubmitCreateRoom(event) {
        event.preventDefault();

        console.log('E - submit form create room');

        this.setState({ isLoading: true });

        if(this.state.roomTitle != '' && this.state.roomDescription != '') {
            const input = {
                title: this.state.roomTitle.trim(),
                description: this.state.roomDescription.trim(),
                isPubic: true
            };

            try {
                ChatRoomMethods.add.call(input, (error, response) => {
                    console.log('M - ChatRooms.add / callback');

                    this.setState({ isLoading: false });

                    if(error) {
                        this.setState({ error: error.reason });
                    } else {
                        this.setState({ roomTitle: '', roomDescription: '' });

                        this.context.router.push(`/chat-room/${ response.data.chatRoomId }`);
                    }
                });
            } catch(e) {
                this.setState({ isLoading: false, error: 'Please try again.' });
            }
        } else {
            this.setState({ isLoading: false, error: 'Room title and description cannot be blank.' });
        }
    }

    render() {
        return (
            <div>
                {
                    this.props.user._id
                        ?
                    <form className="mt1" onSubmit={ this.onSubmitCreateRoom.bind(this) }>
                        <div className="row">
                            <div className="col s12 p0">
                                <input
                                    type="text"
                                    name="roomTitle"
                                    id="room-title"
                                    placeholder="Room title"
                                    autoComplete="off"
                                    required="required"
                                    onChange={ this.onChange.bind(this) }
                                    value={ this.state.roomTitle }
                                />
                            </div>

                            <div className="col s12 p0">
                                <input
                                    type="text"
                                    name="roomDescription"
                                    id="room-description"
                                    placeholder="Room description"
                                    autoComplete="off"
                                    required="required"
                                    onChange={ this.onChange.bind(this) }
                                    value={ this.state.roomDescription }
                                />
                            </div>

                            <div className="col s12 p0">
                                <button type="submit" className="width100">Create Room</button>
                            </div>
                        </div>
                    </form>
                        :
                    <Link to="/login"><button type="button" className="mt1 width100">Create Room</button></Link>
                }
            </div>
        )
    }
}

// Properties
PublicChatRoomCreate.propTypes = {
    user: React.PropTypes.object
};

// Contexts
PublicChatRoomCreate.contextTypes = {
    router: React.PropTypes.object.isRequired
};

// Finally, export the Component
export default PublicChatRoomCreate;
