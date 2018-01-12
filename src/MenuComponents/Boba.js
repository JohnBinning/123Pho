import React from 'react';

export const Boba = () => {
  return (
    <section className='menu-cat'>
       <div className='menu-cat-header'>
        <div id='menu-header-description'>
          Refreshing, ice-blended smoothies with chewy tapioca pearls and topped with whipped cream.
        </div>
        <div id='description-addition'>$4.95</div>
      </div>
      <article id='boba-menu-wrapper'>
        <div className='boba-cat'>
          <div className='boba-cat-header' role='list'>FRUIT FLAVORS</div>
          <div className='boba-menu-listing' role='listitem'>Strawberry</div>
          <div className='boba-menu-listing' role='listitem'>Mango</div>
          <div className='boba-menu-listing' role='listitem'>Pineapple</div>
          <div className='boba-menu-listing' role='listitem'>Avocado</div>
          <div className='boba-menu-listing' role='listitem'>Coconut</div>
        </div>
        <div className='boba-cat'>
          <div className='boba-cat-header' role='list'>MORE DELICIOUS FLAVORS</div>
          <div className='boba-menu-listing' role='listitem'>Taro</div>
          <div className='boba-menu-listing' role='listitem'>Thai Tea</div>
          <div className='boba-menu-listing' role='listitem'>Green Tea</div>
          <div className='boba-menu-listing' role='listitem'>Milk Tea</div>
          <div className='boba-menu-listing' role='listitem'>Mocha</div>
       </div>
      </article>
     
    </section>
  )
}