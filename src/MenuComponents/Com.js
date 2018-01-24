import React from 'react';

export const Com = () => {
  return (
    <article className='menu-cat'>
      <div className='menu-cat-header'>
        <div id='menu-header-description'>
          Served with Fresh Salad, Peanut Garnish & Vietnamese Chili-Lime Sauce (spicy).
        </div>
        <div id='description-addition'>Add $2.50 for One Additional Crispy Spring Roll</div>
        <div id='description-addition'>Add $3.00 for Each Additional Ingredient</div>
      </div>
      <div className='menu-line'>
        <div className='menu-item-name'>C1 – CRISPY SPRING ROLLS</div>
        <div className='price'>$10.50</div>
      </div>
      <div className='menu-line'>
        <div className='menu-item-name'>C2 – GRILLED CHICKEN<div className='menu-modifier'>Gluten Free</div></div>
        <div className='price'>$10.50</div>
      </div>
      <div className='menu-line'>
        <div className='menu-item-name'>C3 – GRILLED PORK<div className='menu-modifier'>Gluten Free</div></div>
        <div className='price'>$10.50</div>
      </div>
      <div className='menu-line'>
        <div className='menu-item-name'>C4 – GRILLED BEEF<div className='menu-modifier'>Gluten Free</div></div>
        <div className='price'>$10.50</div>
      </div>
      <div className='menu-line'>
        <div className='menu-item-name'>C5 – LIGHTLY FRIED TOFU<div className='menu-modifier'>Gluten Free</div></div>
        <div className='price'>$10.50</div>
      </div>
      <div className='menu-line'>
        <div className='menu-item-name'>C6 – GRILLED SHRIMP & CHICKEN<div className='menu-modifier'>Gluten Free</div></div>
        <div className='price'>$12.95</div>
      </div>
      <div className='menu-line'>
        <div className='menu-item-name'>C7 – GRILLED SHRIMP<div className='menu-modifier'>Gluten Free</div></div>
        <div className='price'>$12.95</div>
      </div>
      <div className='menu-line'>
        <div className='menu-item-name'>C8 – COMBINATION <div className='menu-item-description'>(Rare steak, flank, brisket, tendon, tripe)</div></div>
        <div className='price'>$12.95</div>
      </div>
    </article>
  )
}