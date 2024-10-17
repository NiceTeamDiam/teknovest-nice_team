import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx';
import Navbar from './components/Navbar.jsx';
import Porto from './pages/Porto.jsx';
import About from './pages/About.jsx';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Navbar />}>
        <Route path='/' element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portofolio" element={<Porto />} />
        <Route path="/about" element={<About />} />
    </Route>
    </Routes>
  </BrowserRouter>
  )
}


export default App
