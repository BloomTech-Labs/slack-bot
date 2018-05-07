import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './Homepage.css';
import logo from '../logo.svg';

class Homepage extends Component {
  render() {
    return (
      <div>
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

export default Homepage;

