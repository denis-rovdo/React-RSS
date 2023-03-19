import NotFound from './components/NotFound/NotFound';
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import stule from './App.module.scss';
import HomePage from './components/HomePage/HomePage';
import AboutUs from './components/AboutUs/AboutUs';

function App() {
  return (
    <div>
      <div className={stule.navigationBarContainer}>
        <ul className={stule.navigationBarList}>
          <li className={stule.navigationBarItem}>
            <Link to="/">Home page</Link>
          </li>
          <li className={stule.navigationBarItem}>
            <Link to="/aboutUs">About Us</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
