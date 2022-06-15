import './App';

import React from 'react';

import Homepage from './pages/Homepage';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/globals/Navbar';

function App() {
  return (
    <div className="App">
      <Homepage />
      {/* <Router>
        <Navbar />
        <Routes>
          <Route path="*" element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
