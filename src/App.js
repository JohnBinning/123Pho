import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { NavBar } from './NavBar';
import { Home } from './Home';
import Menu from './Menu';
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
        <header>To Place Your Order, Call Us at (303) 471-2228 or Visit Us at 11804 E. Oswego Street, Suite C, Englewood, CO 80112</header>
        <NavBar />
        <a href='http://123phorestaurant.com' role='link'>
          <img className='logo' alt="123Pho logo" src='assets/123pho-logo.jpg'/>
        </a>
        <div className='routes'>
            <Route path='/contact' component={ Contact } />
            <Route path='/menu' component={ Menu } />
            <Route path='/' exact component={ Home } />
        </div>
        <a className="chownow" href='https://ordering.chownow.com/order/9341/locations' target="_blank">VIEW MENU &amp; ORDER PICKUP OR DELIVERY</a>
        <div id='copyright'>© 2017 1-2-3 Pho, Inc. All rights reserved.</div>

      </div>
    );
  }
}

export default App;
