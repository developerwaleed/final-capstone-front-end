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
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={(
            <>
              <Navigation />
              <Home />
            </>
)}
        />
        <Route
          path="/fitness_activities/:id/reserve"
          element={(
            <>
              <Navigation />
              <ReserveFitnessActivity />
            </>
)}
        />
        <Route
          path="/reservations"
          element={(
            <>
              <Navigation />
              <MyReservationsPage />
            </>
)}
        />
        <Route
          path="/fitness/new"
          element={(
            <>
              <Navigation />
              <AddFitnessActivity />
            </>
)}
        />
        <Route
          path="/fitness/delete"
          element={(
            <>
              <Navigation />
              <DeleteFitnessActivity />
            </>
)}
        />
        <Route
          path="/fitness_activities/:id"
          element={(
            <>
              <Navigation />
              <DetailsPage />
            </>
)}
        />
      </Routes>
    </Router>
  );
}

export default App;
