import React, { Component } from 'react';
import { Appetizers } from './MenuComponents/Appetizers.js';
import { AsianSpecialties } from './MenuComponents/AsianSpecialties.js';
import { BahnMi } from './MenuComponents/BahnMi.js';
import { Beverages } from './MenuComponents/Beverages.js';
import { Boba } from './MenuComponents/Boba.js';
import { Bun } from './MenuComponents/Bun.js';
import { Com } from './MenuComponents/Com.js';
import { Desserts } from './MenuComponents/Desserts.js';
import { Kids } from './MenuComponents/Kids.js';
import { Pho } from './MenuComponents/Pho.js';
import { Salad } from './MenuComponents/Salad.js';
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
        case 'asain':
          menuItem = <AsianSpecialties />;
          break;
        case 'bahnmi':
          menuItem = <BahnMi />;
          break;
        case 'beverages':
          menuItem = <Beverages />;
          break;
        case 'boba':
          menuItem = <Boba />;
          break;
        case 'bun':
          menuItem = <Bun />;
          break;
        case 'com':
          menuItem = <Com />;
          break;
        case 'desserts':
          menuItem = <Desserts />;
          break;
        case 'kids':
          menuItem = <Kids />;
          break;
        case 'pho':
          menuItem = <Pho />;
          break;
        case 'salad':
          menuItem = <Salad />;
          break;
        case 'soup':
          menuItem = <Soup />;
          break;
        default:
          menuItem = <Appetizers />;
      }
    
    return (
      <section id='menu-wrapper'>
        <div id='menu'>
          <MenuList 
            menuChoice={ this.state.menuChoice }
            toggleChoice={ this.toggleChoice.bind(this) }/>
          {menuItem}
        </div>
        <div id='disclosure'>Call (303) 471-2228 to order. All prices are subject to change without notice.</div>
      </section>
    )
  }

}

export default Menu;