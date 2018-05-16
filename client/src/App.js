import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import { Security, ImplicitCallback, withAuth } from '@okta/okta-react';

const config = {
  issuer: 'https://dev-262012.oktapreview.com/oauth2/default',
  redirect_uri: window.location.origin + '/implicit/callback',
  client_id: '0oaey1jb0ehljxYdI0h7'
}

const Home = withAuth(class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      userinfo: 'no user'
    }
    this.login = this.login.bind(this);
    this.logout= this.logout.bind(this);
    this.checkAuthentication = this.checkAuthentication.bind(this);
  }

  async checkAuthentication() {
    console.log('checking authentication...');
    const authenticated = await this.props.auth.isAuthenticated();
    if (authenticated) {
      const userinfo = await this.props.auth.getUser();
      this.setState(userinfo);
    }
  }

  async componentDidMount() {
    console.log('componentDidMount...');
    this.checkAuthentication()
      .then(state => console.log(state))
      .catch(err => console.error(err));
  }

  // async componentDidUpdate() {
  //   console.log('componentDidUpdate...');
  //   this.checkAuthentication()
  //     .then(state => console.log(state))
  //     .catch(err => console.error(err));
  // }

  async login() {
    console.log('logging in...');
    this.props.auth.login('/');
  }
  async logout() {
    console.log('logging out...');
    this.props.auth.logout('/');
  }

  render () {
    return (
      <div>
	<button onClick={this.login}>Login</button>
	<button onClick={this.logout}>Logout</button>
      </div>
    )
  }
});

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
              This is HeyTeam Slack App
            </p>
	  </div>
	  <Route path='/' exact component={Home} />
	  <Route path='/implicit/callback' component={ImplicitCallback}/>
	</Security>
      </Router>
    );
  }
}

export default App;
