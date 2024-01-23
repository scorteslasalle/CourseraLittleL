import './App.css';
import Navigation from './navigation';

import React from 'react';

const ConfirmedBooking = () => {
  return (

    <div className="App">
      <header>
        <div className="logo">
          <img src={process.env.PUBLIC_URL + '/img/little_lemon_logo.jpg'} alt="Little Lemon Logo" />
        </div>
        <Navigation></Navigation>
      </header>
      <main className='confirmation'>
        <h2>Booking Confirmed!</h2>
        <p>Your table has been reserved. We look forward to serving you!</p>
      </main>
      <footer>
        <div className="footer-column">
          <img src={process.env.PUBLIC_URL + '/img/little_lemon_logo_small.jpg'} alt="Little Lemon Small Logo" />
        </div>
        <div className="footer-column">
          <p>&copy; 2023 Little Lemon. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ConfirmedBooking;
