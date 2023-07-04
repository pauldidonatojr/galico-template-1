import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
  return (
      <BrowserRouter>

          <Routes>
              <Route path="/" element={<HomePage />} />
              {/* <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} /> */}
          </Routes>
      </BrowserRouter>
  )
}

export default App;
