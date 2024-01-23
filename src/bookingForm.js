import React, { useState, useEffect } from 'react';

const BookingForm = ({ onFormSubmit, availableTimes }) => {
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    time: '',
    guests: '',
    occasion: '',
  });

  const [formIsValid, setFormIsValid] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    // Validate the form whenever form data changes
    const validateForm = () => {
      // Perform your validation logic here
      const isValid =
        formData.date &&
        formData.time &&
        formData.guests &&
        formData.occasion !== '';

      // Update the formIsValid state
      setFormIsValid(isValid);
    };

    validateForm(); 
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Date:
        <input
          type="date"
          name="date"
          value={formData.date}
          disabled
          required 
        />
      </label>

      <label>
        Time:
        <select
          name="time"
          value={formData.time}
          required 
          onChange={handleInputChange}
        >
          <option value="">Select a Time</option>
          {Array.isArray(availableTimes) ? (
            availableTimes.map((time, index) => (
              <option key={index} value={time}>
                {time}
              </option>
            ))
          ) : (
            // Handle the case when availableTimes is not an array
            <option value="">No available times</option>
          )}
        </select>
      </label>

      <label>
        Number of Guests:
        <input
          type="number"
          name="guests"
          value={formData.guests}
          required 
          min="1" 
          onChange={handleInputChange}
        />
      </label>

      <label>
        Occasion:
        <select
          name="occasion"
          value={formData.occasion}
          required
          onChange={handleInputChange}
        >
          <option value="">Select an Occasion</option>
          <option value="birthday">Birthday</option>
          <option value="anniversary">Anniversary</option>
        </select>
      </label>

      <button type="submit" disabled={!formIsValid}>
        Submit Reservation
      </button>
    </form>
  );
};

export default BookingForm;
