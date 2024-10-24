import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import LandingPage from './pages/home/home2/LandingPage';
import AboutUs from './pages/aboutUs/AboutUs';
import { UserProvider } from './context/userContext';
import ProfilePage from './pages/home/home2/fragments/ProfilePage '

function App() {
  return (
    <UserProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/landingpage" element={<LandingPage/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/edit-profile" element={<ProfilePage/>} />
      </Routes>
    </Router>
    </UserProvider>
  );
}

export default App;
