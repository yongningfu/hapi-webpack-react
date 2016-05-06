import React from 'react';
import { Route, IndexRoute } from 'react-router';
module.exports = (
  <Route path="/" component={require('react-router?name=default!../modules/App')}>
    <IndexRoute component={require('react-router?name=default!../modules/Home')} />
    <Route path="/repos" component={require('react-router?name=user!../modules/Repos')}>
      <Route path="/repos/:userName/:repoName" component={require('react-router?name=user!../modules/Repo')} />
    </Route>
    <Route path="/about" component={require('react-router?name=admin!../modules/About')} />
    <Route path="*" component={require('react-router?name=default!../modules/NotFound')} />
  </Route>
);
