import React from 'react';
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
      <div id='photo-wrapper'>
        <img className='menu-photo' src='assets/B7-Grilled-Shrimp-Vermicelli-Bowl.jpg'/>
        <img className='menu-photo' src='assets/C5-Lightly-Fried-Tofu-Rice-Plate.jpg'/>
        <img className='menu-photo' src='assets/Banh-Mi-Sandwich-2.jpg'/>
        <img className='menu-photo C3' src='assets/C3-Grilled-Pork-Rice-Plate.jpg'/>
      </div>
      <a className="chownow" href='https://ordering.chownow.com/order/9341/locations' target="_blank">VIEW MENU &amp; ORDER PICKUP OR DELIVERY</a>
    </article>
  )
}