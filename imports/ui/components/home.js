// Imports
import React from 'react';
import ReactHelmet from 'react-helmet';

// Home Component
class Home extends React.Component {

    render() {
        return (
            <div>
                <ReactHelmet
                    title="Home - Chat"
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
Home.contextTypes = {
    router: React.PropTypes.object.isRequired
};

// Finally, export the Component
export default Home;
