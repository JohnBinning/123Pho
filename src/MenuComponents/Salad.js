import React from 'react';

export const Salad = () => {
  return (
    <section className='menu-cat' label='salad menu'>
      <div className='menu-cat-header'>
        <div id='menu-header-description'>
          Fresh Vietnamese Salad with Shredded Cabbage, Cucumber, Sprouts, Mint, Carrots, Tomatoes, Onions & Thai Basil. Served with Peanut Garnish & Vietnamese Chili-Lime Sauce.
        </div>
        <div id='description-addition'>(+$2.00 for Shrimp or Combination)</div>
      </div>
      <div className='menu-line'>
        <div className='menu-item-name'>VIETNAMESE SALAD  <div className='menu-item-description'>Choice Of Grilled Chicken, Pork, Or Beef</div><div className='menu-modifier mm-gf'>Gluten Free</div></div>
        <div className='price'>$9.95</div>
      </div>
    </section>
  )
}