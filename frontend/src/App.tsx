import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import Header from './components/Header';
import Home from './pages/Home';
import TutorSearch from './pages/TutorSearch';
import TutorProfile from './pages/TutorProfile';
import BookingPage from './pages/BookingPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tutors" element={<TutorSearch />} />
          <Route path="/tutor/:id" element={<TutorProfile />} />
          <Route path="/booking/:tutorId" element={<BookingPage />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
