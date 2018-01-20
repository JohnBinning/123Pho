import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

export const NavBar = () => {
  return (
    <article className='navbar'>
      <div className='inner-nav'>
        <nav className='nav-link-wrapper'>
          <NavLink to='/Home' className='nav-link' activeClassName='selected'>HOME</NavLink>
          <NavLink to='/Menu' className='nav-link' activeClassName='selected'>OUR MENU</NavLink>
          <NavLink to='/Contact' className='nav-link' activeClassName='selected'>CONTACT</NavLink>
        </nav>
      </div>
    </article>
  )
}