// Imports
// Libraries
import React from 'react';
import ReactHelmet from 'react-helmet';
import { Link } from 'react-router';

// App Imports
import * as UserMethods from '../../../api/users/methods';

// User Register Component
class UserRegister extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            isLoading: false,
            error: ''
        };
    }

    onSubmit(event) {
        event.preventDefault();

        console.log('E - submit #form-register');

        this.setState({ isLoading: true });

        let input = {};
        input.username = this.state.username;
        input.password = this.state.password;
        console.log(input);

        if(input.username != '' && input.password != '') {
            UserMethods.register.call(input, (error, response) => {
                console.log('M - users.register / callback');

                this.setState({ isLoading: false });

                if(error) {
                    this.setState({ error: error.reason });
                } else {
                    if(response.success) {
                        this.context.router.push('/login');
                    }
                }
            });
        } else {
            this.setState({ isLoading: false, error: 'Please provide username and password.' });
        }
    }

    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <div className="col s12 m4">
                <ReactHelmet
                    title="Register - Simple Chat"
                />

                <h2>Register</h2>

                { this.state.error ? <p className="alert alert-danger">{ this.state.error }</p> : '' }

                <form id="form-register" onSubmit={ this.onSubmit.bind(this) }>
                    <label htmlFor="user-username">Username</label>

                    <input
                        type="text"
                        className="form-control"
                        id="user-username"
                        name="username"
                        placeholder="Eg: jonsnow"
                        value={ this.state.username }
                        onChange={ this.onChange.bind(this) }
                    />

                    <label htmlFor="user-password" className="mt1">Password</label>

                    <input
                        type="password"
                        className="form-control"
                        id="user-password"
                        name="password"
                        placeholder="Password"
                        value={ this.state.password }
                        onChange={ this.onChange.bind(this) }
                    />

                    <div className="mt1">
                        <button type="submit" className="btn btn-default mr1" disabled={ this.state.isLoading }>Register</button>

                        <Link to="/login">Login</Link>
                    </div>
                </form>
            </div>
        )
    }
}

// Contexts
UserRegister.contextTypes = {
    router: React.PropTypes.object.isRequired
};

// Finally, export the Component
export default UserRegister;