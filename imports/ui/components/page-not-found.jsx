// Imports
import React from 'react';
import ReactHelmet from 'react-helmet';
import { Link } from 'react-router';

// Page Not Found Component
class PageNotFound extends React.Component {

    render() {
        return (
            <div className="col s12 m10">
                <ReactHelmet
                    title="Page Not Found - Simple Chat"
                />

                <h2>Page Not Found</h2>

                <p>The page you are looking for perhaps never existed  😛</p>

                <p><Link to="/">Click here</Link> to go home.</p>
            </div>
        )
    }

}

// Contexts
PageNotFound.contextTypes = {
    router: React.PropTypes.object.isRequired
};

// Finally, export the Component
export default PageNotFound;
