import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Security, ImplicitCallback } from '@okta/okta-react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to HeyTeam Slack App</h1>
        </header>
        <p className="App-intro">
          This will be HeyTeam Slack App
        </p>
      </div>
    );
  }
}

export default App;
