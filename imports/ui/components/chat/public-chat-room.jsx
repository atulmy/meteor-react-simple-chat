// Imports
import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactHelmet from 'react-helmet';
import { Link } from 'react-router';

// App Imports
import * as ChatMethods from '../../../api/chats/methods';
import * as ChatRoomMemberMethods from '../../../api/chat-room-members/methods';
import PublicChatRoomCreate from './public-chat-room-create';
import PublicChatRoomList from './public-chat-room-list';
import ChatItem from './chat-item';

// Pubic Chat Room Component
class PublicChatRoom extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            chatRoomId: props.params.chatRoomId,
            message: '',
            currentUserIsAMember: false,
            isLoading: false,
            error: ''
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            chatRoomId: nextProps.params.chatRoomId
        });

        let currentUserIsAMember = false;
        this.props.chatRoomMembers.forEach((chatRoomMember, i) => {
            if(this.props.user) {
                if (this.props.chatRoomMembers[i].user._id == this.props.user._id) {
                    currentUserIsAMember = true;
                }
            }
        });
        this.setState({ currentUserIsAMember });
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
                        No messages to show.
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

    joinRoom(event) {
        event.preventDefault();

        console.log('E - join room');

        this.setState({ isLoading: true });

        if(this.state.chatRoomId != '') {
            const input = {
                chatRoomId: this.state.chatRoomId.trim()
            };

            try {
                ChatRoomMemberMethods.add.call(input, (error, response) => {
                    console.log('M - Chats.add / callback');

                    this.setState({ isLoading: false });

                    if(error) {
                        this.setState({ error: error.reason });
                    } else {
                        this.setState({ message: '' });
                    }
                });
            } catch(e) {
                this.setState({ isLoading: false, error: 'Please try again.' });
            }
        } else {
            this.setState({ isLoading: false, error: 'The message cannot be blank.' });
        }
    }

    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onSubmitSendChat(event) {
        event.preventDefault();

        console.log('E - submit form chat room message send');

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
                    title="Chat Room - Simple Chat"
                />

                { this.state.error ? <p className="alert alert-danger">{ this.state.error }</p> : '' }
                { this.state.isLoading ? <p className="alert alert-info">Please wait...</p> : '' }

                <div className="col s12 m4">
                    <PublicChatRoomList
                        publicChatRoomsLoaded={ this.props.publicChatRoomsLoaded }
                        publicChatRooms={ this.props.publicChatRooms }
                    />

                    <PublicChatRoomCreate user={ this.props.user } />
                </div>

                <div className="col s12 m6">
                    { this.renderChatRoomDetails() }

                    { this.renderChats() }

                    {
                        (this.props.chatRoomMembersLoaded && this.state.currentUserIsAMember)
                            ?
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
                            :
                        (
                            this.props.user._id
                                ?
                            <button type="submit" className="width100" onClick={ this.joinRoom.bind(this) }>Join this room</button>
                                :
                            <Link to="/login"><button type="button" className="mt1 width100">Join this room</button></Link>
                        )
                    }
                </div>
            </div>
        )
    }

}

// Properties
PublicChatRoom.propTypes = {
    publicChatRoomsLoaded: React.PropTypes.bool,
    publicChatRooms: React.PropTypes.array,

    chatRoomLoaded: React.PropTypes.bool,
    chatRoom: React.PropTypes.object,

    chatRoomMembersLoaded: React.PropTypes.bool,
    chatRoomMembers: React.PropTypes.array,

    chatsLoaded: React.PropTypes.bool,
    chats: React.PropTypes.array,

    user: React.PropTypes.object
};

// Contexts
PublicChatRoom.contextTypes = {
    router: React.PropTypes.object.isRequired
};

// Finally, export the Component
export default PublicChatRoom;
