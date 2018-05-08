import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import { Security, ImplicitCallback } from '@okta/okta-react';

const config = {
  issuer: 'https://dev-262012.oktapreview.com/oauth2/default',
  redirect_uri: window.location.origin + '/implicit/callback',
  client_id: '0oaexy0vsuGGEK8vi0h7'
}

class App extends Component {
  render() {
    return (
      <Router>
	<Security issuer={config.issuer}
                  client_id={config.client_id}
                  redirect_uri={config.redirect_uri}
        >
	  <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to HeyTeam Slack App</h1>
            </header>
            <p className="App-intro">
              This will be HeyTeam Slack App
            </p>
	  </div>
	</Security>
      </Router>
    );
  }
}

export default App;
