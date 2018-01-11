import React from 'react';

export const Kids = () => {
  return (
    <section className='menu-cat'>
       <div className='menu-cat-header'>
        <div id='menu-header-description'>
          Ages 10 and under.
        </div>
        <div id='description-addition'>$5.95</div>
      </div>
      <article id='kids-menu-wrapper'>
        <div className='kids-cat'>
          <div className='kids-cat-header' role='list'>PHO – BEEF BROTH</div>
          <div className='kids-menu-listing' role='listitem'>K1. Noodles Only</div>
          <div className='kids-menu-listing' role='listitem'>K2. Chicken</div>
          <div className='kids-menu-listing' role='listitem'>K3. Beef</div>
        </div>
        <div className='kids-cat'>
          <div className='kids-cat-header' role='list'>BÚN – RICE NOODLE</div>
          <div className='kids-menu-listing' role='listitem'>K4. Chicken</div>
          <div className='kids-menu-listing' role='listitem'>K5. Pork</div>
          <div className='kids-menu-listing' role='listitem'>K6. Beef</div>
        </div>
        <div className='kids-cat'>
          <div className='kids-cat-header' role='list'>COM – RICE PLATE</div>
            <div className='kids-menu-listing' role='listitem'>K4. Chicken</div>
            <div className='kids-menu-listing' role='listitem'>K5. Pork</div>
            <div className='kids-menu-listing' role='listitem'>K6. Beef</div>
        </div>
      </article>
     
    </section>
  )
}