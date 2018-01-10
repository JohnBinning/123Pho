import React from 'react';

export const Soup = () => {
  return (
    <div className='menu-cat'>
      <div className='menu-line'>
        <div className='menu-item-description'></div>
        <div className='price'>
          <span className='large'>LARGE</span>
          <span className='small'>SMALL</span>
        </div>
      </div>
      <div className='menu-line'>
        <div className='menu-item-description'>HOT & SOUR SOUP<div className='menu-modifier'>Spicy</div></div>
        <div className='price'>
          <span className='small-price left-table'>$3.50</span>
          <span className='large-price right-table'>$5.95</span>
        </div>
      </div>
      <div className='menu-line'>
        <div className='menu-item-description'>EGG DROP SOUP</div>
        <div className='price'>
          <span className='small-price left-table'>$3.50</span>
          <span className='large-price right-table'>$5.95</span>
        </div>
      </div>
      <div className='menu-line'>
        <div className='menu-item-description'>WONTON SOUP</div>
        <div className='price'>
          <span className='small-price left-table'>$3.50</span>
          <span className='large-price right-table'>$6.25</span>
        </div>
      </div>
      <div className='menu-line'>
        <div className='menu-item-description'>MISO SOUP</div>
        <div className='price'>
          <span className='small-price left-table'>— </span>
          <span className='large-price right-table'>$6.50</span>
        </div>
      </div>
      <div className='menu-line'>
        <div className='menu-item-description'>WONTON NOODLE SOUP</div>
        <div className='price'>
          <span className='small-price left-table'>—</span>
          <span className='large-price right-table'>$9.95</span>
        </div>
      </div>
      <div className='menu-line'>
        <div className='menu-item-description'>CHICKEN & SHRIMP RAMEN OR UDON</div>
        <div className='price'>
          <span className='small-price left-table'>—</span>
          <span className='large-price right-table-2'>$12.95</span>
        </div>
      </div>
    </div>
  )
}