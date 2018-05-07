import React, { Component } from 'react';

import { Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import About from './components/About';


// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <div className="App">
        
        
          <Route path='/' exact component={Homepage} />
          <Route path='/about' component={About} />
        </div>
      </div>
    );
  }
}

export default App;
