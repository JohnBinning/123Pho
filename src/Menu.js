import React, { Component } from 'react';
import { Appetizers } from './MenuComponents/Appetizers.js'
import { MenuList } from './MenuComponents/MenuList.js'
import './Menu.css';

class Menu extends Component  {
  constructor() {
    super();
    this.state = {
      menuChoice: 'appetizers'
    }
  }

  toggleChoice(input) {
    this.setState({
      menuChoice: input
    })
  }

  render() {
    return (
      <div>Menu goes here
        <MenuList 
          menuChoice={ this.state.menuChoice }
          toggleChoice={ this.toggleChoice.bind(this) }/>
        <Appetizers />
      </div>
    )
  }

}

export default Menu;