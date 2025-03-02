import React from 'react';
import { FaHome, FaImage, FaTasks, FaUsers, FaUserPlus, FaProjectDiagram, FaShieldAlt } from 'react-icons/fa';
import { Menu, User, LayoutDashboard } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

// Navigation Item Component (Moved to the top)
const NavItem = ({ icon: Icon, text, to }) => {
  return (
    <Link to={to} className="flex items-center gap-3 p-3 rounded-lg hover:bg-indigo-700/50 transition-colors">
      <Icon size={20} />
      <span>{text}</span>
    </Link>
  );
};

// Admin Navbar Component
const Adminnavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("Logging out...");
    navigate('/login');
  };

  return (
    <nav className="w-64 h-screen bg-gray-900 fixed left-0 top-0 border-r border-gray-800">
      <div className="flex flex-col h-full">
        {/* Header */}
        <header className="p-6 border-b border-gray-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Menu className="w-6 h-6 text-primary-500" /> {/* Fixed height */}
            <h1 className="text-xl font-bold text-white">Admin</h1>
          </div>
        </header>

        {/* User Info */}
        <div className="p-6 border-b border-gray-800">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
              <User className="w-5 h-5 text-gray-300" />
            </div>
            <div>
              <h2 className="text-sm font-medium text-white">Welcome</h2>
              <p className="text-xs text-gray-200">Admin</p>
            </div>
          </div>
        </div>
 
        {/* Navigation Links */}
        <div className="flex-1 py-6 space-y-1 px-3 text-gray-100 overflow-y-auto">
          <div className="space-y-2 px-3">
            <NavItem icon={FaHome} text="Home" to="/" />
            <NavItem icon={FaImage} text="Clubs" to="/clubs" />
            <NavItem icon={LayoutDashboard} text="Add Events" to="/add-activity" />
            <NavItem icon={FaTasks} text="Search Event" to="/search-event" />
            {/* <NavItem icon={FaTasks} text="View Activities" to="/view-activities" /> */}
            <NavItem icon={FaUsers} text="Team Members" to="/team-members" />
            <NavItem icon={FaProjectDiagram} text="Projects" to="/projects" />
            <NavItem icon={FaShieldAlt} text="Admins" to="/admins" />
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-indigo-700">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 p-3 rounded-lg text-red-200 hover:bg-red-900/50 transition-colors"
          >
            <span>Logout</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Adminnavbar;
