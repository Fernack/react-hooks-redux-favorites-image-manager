import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Favorites } from '../features/favorites/Favorites';
import { Navbar } from '../features/navbar/Navbar';
import { Gallery } from '../features/gallery/Gallery';

function App() { 
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Gallery/>} />
        <Route path="/favorites" element={<Favorites/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
