// Imports
import React from 'react';
import ReactHelmet from 'react-helmet';

// Direct Messages Component
class DirectMessages extends React.Component {

    render() {
        return (
            <div>
                <ReactHelmet
                    title="Direct Messages - Simple Chat"
                />

                <div className="col s12 m4">
                    a
                </div>
                <div className="col s12 m6">
                    b
                </div>
            </div>
        )
    }

}

// Contexts
DirectMessages.contextTypes = {
    router: React.PropTypes.object.isRequired
};

// Finally, export the Component
export default DirectMessages;
