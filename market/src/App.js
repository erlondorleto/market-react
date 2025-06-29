import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import Company from './components/pages/Company';
import NewProject from './components/pages/NewProject';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import Alimentos from './components/pages/Alimentos';
import Bebidas from './components/pages/Bebidas';
import Pets from './components/pages/Pets';
import Limpeza from './components/pages/Limpeza';


import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Container from './components/layout/Container';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const [busca, setBusca] = useState('');

  return (
    <Router>
      <Navbar onSearch={setBusca} />

      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home filtro={busca} />} />
          <Route path="/home" element={<Home filtro={busca} />} />
          <Route path="/company" element={<Company />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/newproject" element={<NewProject />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/alimentos" element={<Alimentos />} />
          <Route path="/bebidas" element={<Bebidas />} />
          <Route path="/pets" element={<Pets />} />
          <Route path="/limpeza" element={<Limpeza />} />
    
        </Routes>
      </Container>

      <Footer />
    </Router>
  );
}

export default App;