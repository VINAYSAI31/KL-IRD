import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Briefcase, Calendar, ArrowRight, BarChart } from 'lucide-react';
import Adminnavbar from '../Components/Adminnavbar';

const clubs = [
  {
    id: 'sods',
    name: 'SODS',
    description: 'Society of Data Scientists',
    fullDescription: 'Promoting data science and analytics skills among students through workshops, competitions, and industry collaborations.',
    color: 'bg-blue-600',
    icon: <BarChart size={32} className="text-white" />,
    stats: {
      members: 120,
      projects: 8,
      events: 15
    }
  },
  {
    id: 'garuda',
    name: 'Garuda',
    description: 'Robotics & Innovation Club',
    fullDescription: 'Fostering innovation and robotics development through hands-on projects, competitions, and technical workshops.',
    color: 'bg-green-600',
    icon: <Briefcase size={32} className="text-white" />,
    stats: {
      members: 85,
      projects: 12,
      events: 9
    }
  },
  {
    id: 'vega',
    name: 'Vega',
    description: 'Astronomy & Space Club',
    fullDescription: 'Exploring astronomy and space sciences through stargazing events, seminars, and collaborative research projects.',
    color: 'bg-purple-600',
    icon: <Calendar size={32} className="text-white" />,
    stats: {
      members: 65,
      projects: 5,
      events: 7
    }
  }
];

const ManageClubs = () => {
  const navigate = useNavigate();

  const handleClubSelect = (clubId) => {
    navigate(`/club/${clubId}`);
  };

  return (
    <>
   
    <Adminnavbar/>
       {/* Main Content */}
       <div className="main-content">
         <div className="card-container">
           {/* Top Card */}
           <div className="top-card ">
             <h1>
               <h1 className="text-3xl font-bold tracking-tight">Welcome back, Admin!</h1>
               <p className="text-lg text-muted-foreground mt-4">
               Here's what's happening in the KL-IRD
             </p>
             </h1>
             <div className="top-actions">
               <div className="search-bar">
                 <input type="text" placeholder="Search..." />
                 <i className="fas fa-search"></i>
               </div>
               <div className="bell-icon">
                 <i className="fas fa-bell"></i>
               </div>
             </div>
           </div>
 
           {/* Main Dashboard Card */} <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Club Management</h1>
        <p className="text-gray-600 mt-2 max-w-3xl">
          Manage club activities, members, and projects. Select a club below to access its dashboard and administrative functions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {clubs.map((club) => (
          <div
            key={club.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className={`${club.color} p-6`}>
              <div className="flex justify-between items-center">
                <div className="bg-white/20 p-3 rounded-lg">
                  {club.icon}
                </div>
                <span className="text-white text-xl font-bold">{club.name}</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{club.description}</h3>
              <p className="text-gray-600 text-sm mb-4 h-12 line-clamp-2">{club.fullDescription}</p>
              
              <div className="grid grid-cols-3 gap-2 mb-6 text-center">
                <div className="bg-gray-50 rounded-lg p-2">
                  <p className="text-gray-500 text-xs mb-1">Members</p>
                  <p className="text-gray-800 font-semibold">{club.stats.members}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-2">
                  <p className="text-gray-500 text-xs mb-1">Projects</p>
                  <p className="text-gray-800 font-semibold">{club.stats.projects}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-2">
                  <p className="text-gray-500 text-xs mb-1">Events</p>
                  <p className="text-gray-800 font-semibold">{club.stats.events}</p>
                </div>
              </div>
              
              <button
                onClick={() => handleClubSelect(club.id)}
                className={`w-full flex items-center justify-center px-4 py-3 border border-transparent text-sm font-medium rounded-lg text-white ${club.color} hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200`}
              >
                Manage Club
                <ArrowRight size={16} className="ml-2" />
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 bg-blue-50 rounded-xl p-6 border border-blue-100">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Club Management Guidelines</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-md font-medium text-gray-700 mb-2">Club Administration</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Update club information and leadership details regularly</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Maintain accurate member records and participation data</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Schedule regular meetings and track attendance</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-md font-medium text-gray-700 mb-2">Event Management</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Plan and schedule events at least 2 weeks in advance</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Document all activities with proper descriptions and images</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Submit post-event reports within 3 days of completion</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
           
         </div>
       </div>
     </>
  );
};

export default ManageClubs; 