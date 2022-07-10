import './App.scss';

import React, { useContext } from 'react';
import { HashRouter as Router, Link, Route, Routes } from 'react-router-dom';

import AddressList from './components/AddressList';
import Home from './components/Home';
import Login from './components/Login';
import TestContext from './components/TestContext';
import { CurrentTestContextProvider } from './contexts/CurrentTest';
import CurrentUserContext from './contexts/CurrentUser';

function App() {
  const { id, logout, admin } = useContext(CurrentUserContext);

  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/address">Adresses</Link>
          <Link to="/click">Click</Link>
          {admin === true && (
            <a href={`${import.meta.env.VITE_ADMIN_URL}`}>Admin panel</a>
          )}
          {id === 0 ? (
            <Link to="/login">Se connecter</Link>
          ) : (
            <button className="logout" onClick={() => logout()}>
              Se déconnecter
            </button>
          )}
        </nav>
        <main>
          <CurrentTestContextProvider>
            <Routes>
              <Route path="*" element={<Home />} />
              <Route path="/" element={<Home />} />
              <Route path="/click" element={<TestContext />} />
              <Route path="/address" element={<AddressList onlyMine={id != 0} />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </CurrentTestContextProvider>
        </main>
      </Router>
    </div>
  );
}

export default App;
