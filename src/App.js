import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<AdminHome />} />
        <Route path="/add-activity" element={<AddActivity />} />
        <Route path="/view-activities" element={<ViewActivities />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/search-event" element={<SearchEvent />} />
        <Route path="/team-members" element={<TeamMembers />} />
        <Route path="/add-member" element={<AddMember />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/admins" element={<Admins />} />
      </Routes>
    </Router>
  );
}

export default App;
