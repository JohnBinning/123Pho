import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';

import { NavBar } from './NavBar';


class App extends Component {
    constructor() {
    super();
    this.state = {
    }
  }

  render() {
    return (
      <div className="App">
        <div className='routes'>
            <Route path='/' component={ NavBar } />
=          </div>
        <a href='http://123phorestaurant.com' role='link'>
          <img className='logo' alt="123Pho logo" src='assets/123pho-logo.jpg'/>
        </a>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
