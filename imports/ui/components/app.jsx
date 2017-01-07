// Imports
import React from 'react';
import ReactHelmet from 'react-helmet';

// App Imports
import Header from '../components/common/header';
import MenuPrimaryContainer from '../components/common/menus/primary_container';

// App (Layout) Component
class App extends React.Component {
    render() {
        return (
            <div>
                <ReactHelmet
                    title="Simple Chat"
                    meta={[
                        { "name": "description", "content": "Chat!" },
                        { "property": "og:type", "content": "website" }
                    ]}
                />

                <Header />

                <div className="row">
                    <div className="col s12 m2">
                        <MenuPrimaryContainer />
                    </div>

                    { this.props.children }
                </div>
            </div>
        );
    }
}

// Finally, export the Component
export default App;