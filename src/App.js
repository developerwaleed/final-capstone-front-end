import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/navigation';

import './styles/Navigation.css';
import './styles/App.css';
import './styles/Form.css';
import Home from './components/Home/Home';
import AddFitnessActivity from './components/AddFitnessActivity';
import DeleteFitnessActivity from './components/DeleteFitnessActivity';
import ReserveFitnessActivity from './components/ReserveFitnessActivity';
import MyReservationsPage from './components/MyReservationsPage/MyReservationsPage';

function App() {
  return (
    <div className="App vh-100">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/make-reservation" element={<ReserveFitnessActivity />} />
          <Route path="/reservations" element={<MyReservationsPage />} />
          <Route path="/fitness/new" element={<AddFitnessActivity />} />
          <Route path="/fitness/delete" element={<DeleteFitnessActivity />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
