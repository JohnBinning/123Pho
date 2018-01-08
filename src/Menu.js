import React, { Component } from 'react';
import { Appetizers } from './MenuComponents/Appetizers.js';
import { Soup } from './MenuComponents/Soup.js';
import { MenuList } from './MenuComponents/MenuList.js';
import './Menu.css';

class Menu extends Component  {
  constructor() {
    super();
    this.state = {
      menuChoice: 'appetizers'
    };
  }

  toggleChoice(input) {
    this.setState({
      menuChoice: input
    })
  }

  render() {
    let menuItem = <Appetizers />;
      switch(this.state.menuChoice) {
        case 'appetizers':
          menuItem = <Appetizers />;
          break;
        case 'soup':
          menuItem = <Soup />;
          break;
        default:
          menuItem = <Appetizers />;
      }
    
    return (
      <div id='menu'>
        <MenuList 
          menuChoice={ this.state.menuChoice }
          toggleChoice={ this.toggleChoice.bind(this) }/>
        {menuItem}
      </div>
    )
  }

}

export default Menu;