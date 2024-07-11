import React, { useState, useEffect } from 'react';
import { initializeTimes, updateTimes } from './times';

const BookingForm = () => {
  const [availableTimes, setAvailableTimes] = useState([]);
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '',
    occasion: ''
  });

  useEffect(() => {
    const times = initializeTimes();
    setAvailableTimes(times);
  }, []);

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setFormData({ ...formData, date: newDate });
    const times = updateTimes(availableTimes, { payload: newDate });
    setAvailableTimes(times);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isSubmitted = window.submitAPI(formData);
    if (isSubmitted) {
      alert('Reservation successful');
    } else {
      alert('Failed to make reservation');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" name="date" value={formData.date} onChange={handleDateChange} />

      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" name="time" value={formData.time} onChange={handleInputChange}>
        {availableTimes.map(time => (
          <option key={time} value={time}>{time}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input type="number" id="guests" name="guests" value={formData.guests} onChange={handleInputChange} />

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" name="occasion" value={formData.occasion} onChange={handleInputChange}>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <button type="submit">Submit reservation</button>
    </form>
  );
};

export default BookingForm;
