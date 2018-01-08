import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { NavBar } from './NavBar';
import { Contact } from './Contact';


class App extends Component {
    constructor() {
    super();
    this.state = {
    }
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <a href='http://123phorestaurant.com' role='link'>
          <img className='logo' alt="123Pho logo" src='assets/123pho-logo.jpg'/>
        </a>
        <div className='routes'>
            <Route path='/' component={ Contact } />
        </div>

      </div>
    );
  }
}

export default App;
