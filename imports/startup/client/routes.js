// Frontend
// imports / startup / client / routes.jsx

import { render } from 'react-dom';

import AppRoutes from '../common/routes';

Meteor.startup(() => {
    render(AppRoutes, document.getElementById('app'));
});