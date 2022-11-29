import React from 'react';
import './styles/App.css';
import Home from './components/Home/Home';
import DeleteFitnessActivity from './components/DeleteFitnessActivity';
import ReserveFitnessActivity from './components/ReserveFitnessActivity';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/makereserve" element={<MakeReservation />} />
          <Route path="/myreserve" element={<MyReservation />} />
          <Route path="/addreserve" element={<AddReservation />} />
          <Route path="/deletereserve" element={<DeleteReservation />} />
        </Routes>
      </Router>
      <Home />
      <DeleteFitnessActivity />
      <ReserveFitnessActivity />
    </div>
  );
}

export default App;
