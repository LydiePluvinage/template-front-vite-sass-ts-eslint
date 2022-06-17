import './App.scss';

import React from 'react';

import { HashRouter, Route, Routes } from 'react-router-dom';
import Footer from '../src/components/globals/Footer';
import Navbar from './components/globals/Navbar';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="*" element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
