//  Dependencies
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//  Components
import {
  Home,
  Page404
} from './views';

const routes = [
  {path: '/', component: Home, exact: true},
  {component: Page404},
];

const routesMap = routes.map((route, i) => <Route key={i} {...route} />);

export default () => (
  <Router>
    <Switch>
      {routesMap}
    </Switch>
  </Router>
);
