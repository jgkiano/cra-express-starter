import React from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';
import Pages from 'pages';

// track page navigation
const history = createBrowserHistory({});
history.listen(location => location);

export default () => (
  <Router history={history}>
    <Switch>
      <Route path="/" exact component={Pages.Home} />
    </Switch>
  </Router>
);
