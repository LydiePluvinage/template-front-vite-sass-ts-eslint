import './App';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Footer from '../src/components/globals/Footer';
import Navbar from './components/globals/Navbar';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="App">
      <Homepage />
      <Router>
        <Navbar />
        <Routes>
          <Route path="*" element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
