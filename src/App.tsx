import './App';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Footer from '../src/components/globals/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="*" element={0} />
          <Route path="/home" element={0} />
          <Route path="/about" element={0} />
          <Route path="/eshop" element={0} />
          <Route path="/home" element={0} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
