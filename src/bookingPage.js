import React, { useReducer } from 'react';
import BookingForm from './bookingForm';
import { useNavigate } from 'react-router-dom';
import './App.css';
import Navigation from './navigation';

let availableTimes = [
  "08:00", "09:30", "11:15", "13:45", "15:20",
  "17:00", "18:45", "20:30", "22:15", "23:45"
];
let bookedTimes = [
  "09:00", "10:30", "11:30"];

const timesReducer = (state) => {
  switch (state.type) {
    case 'GET_TIMES':
      // Use fetchData API function to get available times for the selected date
      return fetchTimes();
    case 'UPDATE_TIMES':
      // Use fetchData API function to get available times for the selected date
      updateTimes(state.time);
      break;
    default:
      return state;
  }
};

const updateTimes = (timeToUpdate) => {
  availableTimes = availableTimes.filter(time => time !== timeToUpdate);
  bookedTimes = [...bookedTimes, timeToUpdate];
};

const submitAPI = (formData, navigate) => {
  try {
    const isSubmissionSuccessful = true;
    if (isSubmissionSuccessful) {
      navigate('/confirmed'); // Navigate to the confirmedBooking.js route
      return { success: true, date: formData.date };
    }
    return { success: false };
  } catch (error) {
    console.error('Error submitting data:', error);
    return { success: false };
  }
};

const fetchTimes = () => {
  try {
    return availableTimes;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

const fetchBooked = () => {
  try {
    return bookedTimes;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

const BookingPage = () => {
  const [bookedTimes] = useReducer(timesReducer, [], fetchBooked);
  const navigate = useNavigate();

  const submitForm = (formData) => {
    try {
      const isBookingSuccessful = submitAPI(formData, navigate);
      if (isBookingSuccessful) {
        // If booking is successful, update available times
        timesReducer({ type: 'UPDATE_TIMES', time: formData.time });
      } else {
        console.error('Booking failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="App">
      <header>
        <div className="logo">
          <img src={process.env.PUBLIC_URL + '/img/little_lemon_logo.jpg'} alt="Little Lemon Logo" />
        </div>
        <Navigation></Navigation>
      </header>

      <main className='booking'>
        <div>
        <h1>Reserve a Table</h1>
        <h3>Booked Times</h3>
          <ul>
            {bookedTimes.map((slot, index) => (
              <li key={index}>{slot}</li>
            ))}
          </ul>
        </div>
        <div>
          <BookingForm availableTimes={availableTimes}
            onFormSubmit={submitForm} />
        </div>
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

export default BookingPage;
