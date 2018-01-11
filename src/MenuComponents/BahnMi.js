import React from 'react';

export const BahnMi = () => {
  return (
    <section className='menu-cat' label='Banh Mi menu'>
      <div className='menu-cat-header'>
        <div id='menu-header-description'>
          Tasty Baguette Sandwich topped with Cucumbers, Cilantro, Carrot & Radish Garnish & Jalapeño. Served with Vietnamese Chili-Lime Sauce.
        </div>
        <div id='description-addition'>(+$2.00 for Shrimp or Combination)</div>
      </div>
      <div className='menu-line'>
        <div className='menu-item-name'>BÁNH MÍ – VIETNAMESE SANDWICH <div className='menu-item-description'>Choice Of Grilled Chicken, Pork, Beef, Or Tofu</div><div className='menu-modifier'>spicy</div></div>
        <div className='price'>$5.95</div>
      </div>
    </section>
  )
}