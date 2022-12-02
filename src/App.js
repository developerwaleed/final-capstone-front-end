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
import DetailsPage from './components/DetailsPage/DetailsPage';
import SignUp from './components/SignUp';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/make-reservation" element={<ReserveFitnessActivity />} />
        <Route path="/reservations" element={<MyReservationsPage />} />
        <Route path="/fitness/new" element={<AddFitnessActivity />} />
        <Route path="/fitness/delete" element={<DeleteFitnessActivity />} />
        <Route path="/fitness_activities/:id" element={<DetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
