import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Community from './Community';
import CarbonFootprint from './CarbonFootprint';
import Dashboard from './Dashboard';
import HealthTrackingPage from './HealthTrackingPage';
import Settings from './Settings';
import Profile from './Profile';
import Navbar from './components/Navbar'; // Optional: If you have a Navbar
import Footer from './components/Footer'; // Optional: If you have a Footer

const App = () => {
  return (
    <Router>
      <div className="app-container">
        {/* Navbar */}
        <Navbar />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/community" element={<Community />} />
          <Route path="/carbon-footprint" element={<CarbonFootprint />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/health-tracking" element={<HealthTrackingPage />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
