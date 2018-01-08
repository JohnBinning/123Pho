import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <article className='navbar'>
      <div className='inner-nav'>
        <div className='nav-link-wrapper'>
          <NavLink to='/Home' className='nav-link' activeClassName='selected'>HOME</NavLink>
          <NavLink to='/Menu' className='nav-link' activeClassName='selected'>OUR MENU</NavLink>
        </div>
      </div>
    </article>
  )
}