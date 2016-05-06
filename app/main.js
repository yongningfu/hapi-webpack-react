// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './component';
//
// ReactDOM.render(<App />, document.getElementById('app'));
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
render(
  <Router routes={routes} history={browserHistory} />,
  document.getElementById('app')
);
