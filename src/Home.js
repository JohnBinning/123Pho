import React from 'react';
import { NavLink } from 'react-router-dom';

import './Home.css';

export const Home = () => {
  return (
    <article id='home'>
      <h2 id='welcome'> WELCOME TO 123 PHO!</h2>
      <div id='welcome-message'>
        We are a family-owned restaurant with a focus on fresh and delicious Vietnamese & Asian cuisine. We strive to bring our carefully-crafted dishes, made from our homemade recipes, to you and your family at an affordable price. Whether you decide to dine-in or carry-out, we hope that you will allow us to make your next meal satisfying and easy as 1-2-3!
      </div>
      <div className='inner-divider cs'></div>
      <div id='homemade'>
        COME ENJOY OUR HOMEMADE FAMILY RECIPES
      </div>
      <div id='external-menus'>
        <a class="eat24-stnd ext-menu-link" href="http://eat24hrs.com/restaurants/order2/index.php?id=81379" target="_blank" title="Order Online with EAT24">View our menu &amp; order take out</a>
        <a class="chow-now ext-menu-link" href='https://ordering.chownow.com/order/9341/locations' target="_blank">View our menu &amp; order delivery </a>
      </div>
      <div id='photo-wrapper'>
        <img className='menu-photo' alt='pic of grilled shrimp vermicelli bowl' src='assets/B7-Grilled-Shrimp-Vermicelli-Bowl.jpg'/>
        <img className='menu-photo' alt='pic of Lightly Fried Tofu Rice Plate.' src='assets/C5-Lightly-Fried-Tofu-Rice-Plate.jpg'/>
        <img className='menu-photo' alt='pic of Banh Mi Sandwitch' src='assets/Banh-Mi-Sandwich-2.jpg'/>
        <img className='menu-photo C3' alt='pic of Grilled Pork Rice Plate' src='assets/C3-Grilled-Pork-Rice-Plate.jpg'/>
      </div>
      <NavLink to='/Menu' className='bottom-menu-nav-link' activeClassName='selected'>See Our Full Menu</NavLink>
    </article>
  )
}