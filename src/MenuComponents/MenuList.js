import React from 'react';

export const MenuList = (props) => {
  const { menuChoice, toggleChoice } = props;
  return (
    <div>MenuList goes here
      <section className='menu-list'>
        <div 
          className='option appetizers'
          onClick={toggleChoice.bind(this, 'appetizers')}
          >Appetizers</div>
        <div 
          className='option soup'
          onClick={toggleChoice.bind(this, 'soup')}
          >Soup</div>
        <div 
          className='option salad'
          onClick={toggleChoice.bind(this, 'salad')}
          >Vietnamese Salad</div>
      </section>
    </div>
  )
}