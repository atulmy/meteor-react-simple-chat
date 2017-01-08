// Imports
import React from 'react';
import ReactHelmet from 'react-helmet';

// About Component
class About extends React.Component {

    render() {
        return (
            <div className="col s12 m10">
                <ReactHelmet
                    title="About - Simple Chat"
                />

                <h2>About</h2>

                <p>A simple chat application build with Meteor and React</p>

                <p>Github Repository: <a href="https://github.com/atulmy/meteor-react-simple-chat" className="tx-underlined">https://github.com/atulmy/meteor-react-simple-chat</a></p>

                <p>Demo: <a href="http://meteor-react-simple-chat.demo.atulmy.com/" className="tx-underlined">http://meteor-react-simple-chat.demo.atulmy.com</a></p>
            </div>
        )
    }

}

// Contexts
About.contextTypes = {
    router: React.PropTypes.object.isRequired
};

// Finally, export the Component
export default About;
