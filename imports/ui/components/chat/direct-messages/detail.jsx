// Imports
import React from 'react';
import ReactHelmet from 'react-helmet';

// App Imports
import * as ChatMethods from '../../../../api/chats/methods';
import ChatItem from '../chat-item';
import DirectMessageItems from './items';

// Direct Message Component
class DirectMessage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            chatRoomId: props.params.chatRoomId,
            roomTitle: '',
            roomDescription: '',
            message: '',
            isLoading: false,
            error: '',
            currentUserIsAMember: false
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            chatRoomId: nextProps.params.chatRoomId
        });
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
                    <div className="list tx-grey">
                        No direct messages sent or received yet.
                    </div>
                )
            }
        } else {
            chatsList = (
                <div className="list tx-grey">
                    Please wait...
                </div>
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

    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onSubmitSendChat(event) {
        event.preventDefault();

        console.log('E - submit form chat room message send');
        console.log(this.state);

        this.setState({ isLoading: true });

        if(this.state.chatRoomId != '' && this.state.message != '') {
            const input = {
                chatRoomId: this.state.chatRoomId.trim(),
                message: this.state.message.trim(),
            };

            ChatMethods.add.call(input, (error, response) => {
                console.log('M - Chats.add / callback');

                this.setState({ isLoading: false });

                if(error) {
                    this.setState({ error: error.reason });
                } else {
                    this.setState({ message: '' });
                }
            });
        } else {
            this.setState({ isLoading: false, error: 'The message cannot be blank.' });
        }
    }

    render() {
        return (
            <div>
                <ReactHelmet
                    title="Direct Message - Simple Chat"
                />

                { this.state.error ? <p className="alert alert-danger">{ this.state.error }</p> : '' }
                { this.state.isLoading ? <p className="alert alert-info">Please wait...</p> : '' }

                <div className="col s12 m4">
                    <DirectMessageItems
                        usersAllLoaded={ this.props.usersAllLoaded }
                        usersAll={ this.props.usersAll }
                        user={ this.props.user }
                    />
                </div>

                <div className="col s12 m6">
                    { this.renderChatRoomDetails() }

                    { this.renderChats() }

                    <form className="mt1" onSubmit={ this.onSubmitSendChat.bind(this) }>
                        <div className="row">
                            <div className="col s8 m10 p0">
                                <input
                                    type="text"
                                    name="message"
                                    id="message"
                                    className="font-handwriting"
                                    placeholder="Type your message here..."
                                    autoComplete="off"
                                    required="required"
                                    onChange={ this.onChange.bind(this) }
                                    value={ this.state.message }
                                />
                            </div>

                            <div className="col s4 m2 p0">
                                <button type="submit" className="width100">Send</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}

// Properties
DirectMessage.propTypes = {
    usersAllLoaded: React.PropTypes.bool,
    usersAll: React.PropTypes.array,

    chatRoomLoaded: React.PropTypes.bool,
    chatRoom: React.PropTypes.object,

    chatsLoaded: React.PropTypes.bool,
    chats: React.PropTypes.array,

    user: React.PropTypes.object,
};

// Contexts
DirectMessage.contextTypes = {
    router: React.PropTypes.object.isRequired
};

// Finally, export the Component
export default DirectMessage;
