import React from 'react';

export const MenuList = (props) => {
  const { menuChoice, toggleChoice } = props;
  return (
    <div>
      <section className='menu-list'>
        <div 
          className='option appetizers'
          onClick={toggleChoice.bind(this, 'appetizers')}
          >Appetizers
        </div>
        <div 
          className='option soup'
          onClick={toggleChoice.bind(this, 'soup')}
          >Soup
        </div>
        <div 
          className='option salad'
          onClick={toggleChoice.bind(this, 'salad')}
          >Vietnamese Salad
        </div>
        <div 
          className='option bahnmi'
          onClick={toggleChoice.bind(this, 'bahnmi')}
          >Bánh Mí – Vietnamese Sandwich
        </div>
        <div 
          className='option pho'
          onClick={toggleChoice.bind(this, 'pho')}
          >Pho Noodle Soup
        </div>
        <div 
          className='option asian'
          onClick={toggleChoice.bind(this, 'asian')}
          >Asian Specialties</div>
        <div 
          className='option bun'
          onClick={toggleChoice.bind(this, 'bun')}
          >Bún - Rice Noodle Bowl
        </div>
        <div 
          className='option bun'
          onClick={toggleChoice.bind(this, 'com')}
          >Com - Rice Plate
        </div>
        <div 
          className='option kids'
          onClick={toggleChoice.bind(this, 'kids')}
          >Kid's Menu
        </div>
        <div 
          className='option boba'
          onClick={toggleChoice.bind(this, 'boba')}
          >Boba Smoothies
        </div>
        <div 
          className='option beverages'
          onClick={toggleChoice.bind(this, 'beverages')}
          >Beverages
        </div>
        <div 
          className='option desserts'
          onClick={toggleChoice.bind(this, 'desserts')}
          >Desserts
        </div>
      </section>
    </div>
  )
}