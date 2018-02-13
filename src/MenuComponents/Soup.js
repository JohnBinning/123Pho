import React from 'react';

export const Soup = () => {
  return (
    <div className='menu-cat'>
      <div className='menu-line'>
        <div className='menu-item-name'></div>
        <div className='price'>
          <span className='small'>SMALL</span>
          <span className='large'>LARGE</span>
        </div>
      </div>
      <div className='menu-line'>
        <div className='menu-item-name'>HOT & SOUR SOUP<div className='menu-modifier mm-spicy'>Spicy</div></div>
        <div className='price'>
          <span className='small-price left-table'>$3.50</span>
          <span className='large-price right-table'>$5.95</span>
        </div>
      </div>
      <div className='menu-line'>
        <div className='menu-item-name'>EGG DROP SOUP</div>
        <div className='price'>
          <span className='small-price left-table'>$3.50</span>
          <span className='large-price right-table'>$5.95</span>
        </div>
      </div>
      <div className='menu-line'>
        <div className='menu-item-name'>WONTON SOUP</div>
        <div className='price'>
          <span className='small-price left-table'>$3.50</span>
          <span className='large-price right-table'>$6.25</span>
        </div>
      </div>
      <div className='menu-line'>
        <div className='menu-item-name'>MISO SOUP</div>
        <div className='price'>
          <span className='small-price left-table'>— </span>
          <span className='large-price right-table'>$6.50</span>
        </div>
      </div>
      <div className='menu-line'>
        <div className='menu-item-name'>WONTON NOODLE SOUP</div>
        <div className='price'>
          <span className='small-price left-table'>—</span>
          <span className='large-price right-table'>$9.95</span>
        </div>
      </div>
      <div className='menu-line'>
        <div className='menu-item-name'>CHICKEN & SHRIMP RAMEN OR UDON</div>
        <div className='price'>
          <span className='small-price left-table'>—</span>
          <span className='large-price right-table-2'>$12.95</span>
        </div>
      </div>
    </div>
  )
}