// Imports
import React from 'react';

// App Imports
import * as ChatMethods from '../../../api/chats/methods';

// Send Chat Component
class SendChat extends React.Component {

    constructor(props) {
        super(props);
        console.log(props.chatRoomId);

        this.state = {
            chatRoomId: props.chatRoomId,
            message: '',
            isLoading: false,
            error: ''
        }
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

    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <div>
                <form className="mt1" onSubmit={ this.onSubmitSendChat.bind(this) }>
                    { this.state.error ? <p className="alert alert-danger">{ this.state.error }</p> : '' }
                    { this.state.isLoading ? <p className="alert alert-info">Please wait...</p> : '' }

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
        )
    }

}

// Properties
SendChat.propTypes = {
    chatRoomId: React.PropTypes.string
};

// Finally, export the Component
export default SendChat;
