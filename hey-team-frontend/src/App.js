import React, { Component } from 'react';

import { Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import About from './components/About';
import LandingPage from "./components/LandingPage";
import Billing from "./components/Billing";
import CreateConversation from "./components/CreateConversation";
import ConversationDetail from "./components/ConversationDetail";
import ConversationEdit from "./components/ConversationEdit";
import ConversationList from "./components/ConversationList";
import ConversationListEmp from "./components/ConversationListEmp";
import Navigation from "./components/Navigation";

// import logo from './logo.svg';
import './App.css';

// import config from './.config';
// console.log('CONFIG=>', config);

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <Navigation />
          <Route path='/' exact component={Homepage} />
          <Route path='/about' component={About} />
          <Route path='/signin' component={LogIn} />
          <Route path='/signup' component={SignUp} />
        </div>
      </div>
    );
  }
}

export default App;
