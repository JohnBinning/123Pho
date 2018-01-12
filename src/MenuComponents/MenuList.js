import React from 'react';

export const MenuList = (props) => {
  const list = [
    {name: 'appetizers', display: 'Appetizers'},
    {name: 'soup', display: 'Soup'},
    {name: 'salad', display: 'Vietnamese Salad'},
    {name: 'bahnmi', display: 'Bánh Mí – Vietnamese Sandwich'},
    {name: 'pho', display: 'Pho Noodle Soup'},
    {name: 'asain', display: 'Asian Specialties'},
    {name: 'bun', display: 'Bún - Rice Noodle Bowl'},
    {name: 'com', display: 'Com - Rice Plate'},
    {name: 'kids', display: 'Kid\'s Menu'},
    {name: 'boba', display: 'Boba Smoothies'},
    {name: 'beverages', display: 'Beverages'},
    {name: 'desserts', display: 'Desserts'}
  ];

  const { menuChoice, toggleChoice } = props;

  const listHtml = list.map((listItem, i) => {
    if(listItem.name === menuChoice) {
      return <div key={i} className={`option ${listItem.name} selected-list`}
          onClick={toggleChoice.bind(this, listItem.name)}
          >{listItem.display}
        </div>
    }
    return <div key={i} className={`option ${listItem.name}`}
        onClick={toggleChoice.bind(this, listItem.name)}
        >{listItem.display}
      </div>
  })
  return (
    <div>
      <section className='menu-list'>
        {listHtml}
      </section>
    </div>
  )
}