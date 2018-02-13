import React from 'react';
import './Contact.css';

export const Contact = () => {
  return (
    <div>

      <section className='customer-service'>
        <div className='cs-serving cs'>WE LOOK FORWARD TO SERVING YOU</div>
        <div className='inner-divider cs'></div>
        <div className='cs-feeback cs'>We are always striving to improve, so we welcome your suggestions and feedback. Or got a question?</div>
      </section>

      <section className='contact-info'>

        <div className='contact-topic'>
          <h4 className='topic-header'>FOLLOW US</h4>
          <a href='https://www.facebook.com/123PhoRestaurant/'>
            <img src='assets/facebook.svg' id='facebook-logo' alt='facebook logo'/>
          </a>
        </div>
        <div className='contact-topic'>
          <h4 className='topic-header'>VISIT US</h4>
          <div id='address' className='contact-content'>
            11804 E. Oswego Street, Suite C
            Englewood, CO  80112
          </div>
        </div>
        <div className='contact-topic'>
          <h4 className='topic-header'>CONTACT US</h4>
          <div id='phone' className='contact-content'>
            Phone: <a href="tel:303-471-2228">(303) 471-2228</a>
          </div>
        </div>
        <div className='contact-topic'>
          <h4 className='topic-header'>OUR HOURS</h4>
          <article id='hours' className='contact-content'>
            <div>Dine-In & Carry-Out</div>
            <div>Monday-Saturday:  11:00am – 8:30pm</div>
            <div>Sunday:  Closed</div>
          </article>
        </div>

      </section>

    </div>
  )
}