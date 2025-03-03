import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import AdminHome from './Components/AdminHome';
import AddActivity from './Pages/AddActivity';
import ViewActivities from './Pages/ViewActivities';
import Clubs from './Pages/Clubs';
import SearchEvent from './Pages/SearchEvent';
import TeamMembers from './Pages/TeamMembers';
import AddMember from './Pages/AddMember';
import Projects from './Pages/Projects';
import Admins from './Pages/Admins';
import LoginPage from './Pages/LoginPage';
import ClubDashboard from './Pages/ClubDashboard';

// Protected Route Component
const ProtectedRoute = ({ children, isAuthenticated }) => {
  if (isAuthenticated === null) return null; // Prevents flickering on first render
  return isAuthenticated ? children : <Navigate to="/" replace />;
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // Initially null to prevent flicker

  useEffect(() => {
    const storedAuth = localStorage.getItem('isAuthenticated') === 'true';
    setIsAuthenticated(storedAuth);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/home" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <AdminHome />
          </ProtectedRoute>
        } />
        <Route path="/add-activity" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <AddActivity />
          </ProtectedRoute>
        } />
        <Route path="/view-activities" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <ViewActivities />
          </ProtectedRoute>
        } />
        <Route path="/clubs" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Clubs />
          </ProtectedRoute>
        } />
        <Route path="/search-event" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <SearchEvent />
          </ProtectedRoute>
        } />
        <Route path="/team-members" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <TeamMembers />
          </ProtectedRoute>
        } />
        <Route path="/add-member" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <AddMember />
          </ProtectedRoute>
        } />
        <Route path="/projects" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Projects />
          </ProtectedRoute>
        } />
        <Route path="/admins" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Admins />
          </ProtectedRoute>
        } />
        <Route path="/club/:clubId" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <ClubDashboard />
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;
