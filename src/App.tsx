import NotFound from './pages/NotFound/NotFound';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import AboutUs from './pages/AboutUs/AboutUs';
import Nav from './components/Nav/Nav';
import Form from './pages/Form/Form';

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/form" element={<Form />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
