// Imports
import React from 'react';
import ReactHelmet from 'react-helmet';

// App Imports
import DirectMessageItems from './items';

// Direct Messages List Component
class DirectMessagesList extends React.Component {

    render() {
        return (
            <div>
                <ReactHelmet
                    title="Direct Messages - Simple Chat"
                />

                <div className="col s12 m4">
                    <DirectMessageItems
                        usersAllLoaded={ this.props.usersAllLoaded }
                        usersAll={ this.props.usersAll }
                        user={ this.props.user }
                    />
                </div>

                <div className="col s12 m6">
                    <p className="tx-grey">Select a user to send direct messages.</p>
                </div>
            </div>
        )
    }

}

// Properties
DirectMessagesList.propTypes = {
    usersAllLoaded: React.PropTypes.bool,
    usersAll: React.PropTypes.array,
    user: React.PropTypes.object
};

// Contexts
DirectMessagesList.contextTypes = {
    router: React.PropTypes.object.isRequired
};

// Finally, export the Component
export default DirectMessagesList;
