import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BookingPage from './bookingPage';

// Mock the react-router-dom useNavigate hook
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('BookingPage component', () => {
  test('renders BookingPage component', () => {
    render(<BookingPage />);
    expect(screen.getByText(/Reserve a Table/i)).toBeInTheDocument();
  });

  test('submits the form successfully', async () => {
    render(<BookingPage />);
    // Assuming you have some form elements with labels 'Date', 'Time', 'Guests', 'Occasion'
    userEvent.type(screen.getByLabelText(/Date/i), '2023-01-09');
    userEvent.selectOptions(screen.getByLabelText(/Time/i), '15:20');
    userEvent.type(screen.getByLabelText(/Number of Guests/i), '4');
    userEvent.selectOptions(screen.getByLabelText(/Occasion/i), 'Birthday');

    fireEvent.click(screen.getByText(/Submit Reservation/i));

    // Check if it navigates to '/confirmed'
    expect(window.location.pathname).toBe('/confirmed');
  });

  // Add more tests for different scenarios and edge cases

  // Test timesReducer function
  test('updates times reducer correctly', () => {
    const initialState = ['08:00', '09:30', '11:15'];
    const action = { type: 'UPDATE_TIMES', time: '09:30' };

    const newState = timesReducer(initialState, action);
    expect(newState).toEqual(['08:00', '11:15']);
  });

  // Test fetchTimes and fetchBooked functions
  test('fetches available times and booked times successfully', () => {
    expect(fetchTimes()).toEqual(['08:00', '09:30', '11:15', '13:45', '15:20', '17:00', '18:45', '20:30', '22:15', '23:45']);
    expect(fetchBooked()).toEqual(['09:00', '10:30', '11:30']);
  });
});
