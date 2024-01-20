import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Tortrix from './Tortrix'
import Jarritos from './Jarritos';
import Sublime from './Sublime';
import Navigation from './Navigation';
import './styles/styles.css';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<VendingMachine />} />
        <Route path="/tortrix" element={<Tortrix />} />
        <Route path="/jarito" element={<Jarritos />} />
        <Route path="/sublime" element={<Sublime />} />
      </Routes>
    </Router>
  );
}

export default App;
