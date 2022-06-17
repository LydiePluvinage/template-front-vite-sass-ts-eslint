import './App.scss';

import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import Footer from '../src/components/globals/Footer';
import Navbar from '../src/components/globals/Navbar';
import Collection from './pages/Collection';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Contact from './pages/Contact';
import Account from './pages/Account';
import Cart from './pages/Cart';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="*" element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/univers" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/compte" element={<Account />} />
          <Route path="/panier" element={<Cart />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
