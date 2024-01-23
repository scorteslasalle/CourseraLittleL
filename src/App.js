
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home'; // Make sure to replace 'Home' with the actual component name
import BookingPage from './bookingPage';
import ConfirmedBooking from './confirmedBooking';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservations" element={<BookingPage />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </Router>
  );
}

export default App;
