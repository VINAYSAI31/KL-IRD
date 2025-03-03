import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Users, 
  Briefcase, 
  Calendar, 
  ArrowLeft, 
  BarChart, 
  Award, 
  Clock, 
  ChevronRight,
  Activity,
  Settings,
  FileText,
  PieChart
} from 'lucide-react';
import Adminnavbar from '../Components/Adminnavbar';

const clubData = {
  sods: {
    name: 'SODS',
    fullName: 'Society of Data Scientists',
    color: 'bg-blue-600',
    lightColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    textColor: 'text-blue-600',
    description: 'Promoting data science and analytics skills among students through workshops, competitions, and industry collaborations.',
    stats: {
      members: 120,
      projects: 8,
      events: 15,
      upcoming: 3
    },
    recentActivities: [
      { id: 1, name: 'Data Visualization Workshop', date: '2025-03-15', status: 'Completed' },
      { id: 2, name: 'Machine Learning Hackathon', date: '2025-04-10', status: 'Upcoming' },
      { id: 3, name: 'Python for Data Science', date: '2025-02-28', status: 'Completed' }
    ]
  },
  garuda: {
    name: 'Garuda',
    fullName: 'Robotics & Innovation Club',
    color: 'bg-green-600',
    lightColor: 'bg-green-50',
    borderColor: 'border-green-200',
    textColor: 'text-green-600',
    description: 'Fostering innovation and robotics development through hands-on projects, competitions, and technical workshops.',
    stats: {
      members: 85,
      projects: 12,
      events: 9,
      upcoming: 2
    },
    recentActivities: [
      { id: 1, name: 'Drone Building Workshop', date: '2025-03-20', status: 'Upcoming' },
      { id: 2, name: 'Robotics Competition', date: '2025-02-15', status: 'Completed' },
      { id: 3, name: 'IoT Project Showcase', date: '2025-01-30', status: 'Completed' }
    ]
  },
  vega: {
    name: 'Vega',
    fullName: 'Astronomy & Space Club',
    color: 'bg-purple-600',
    lightColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    textColor: 'text-purple-600',
    description: 'Exploring astronomy and space sciences through stargazing events, seminars, and collaborative research projects.',
    stats: {
      members: 65,
      projects: 5,
      events: 7,
      upcoming: 1
    },
    recentActivities: [
      { id: 1, name: 'Star Gazing Night', date: '2025-04-05', status: 'Upcoming' },
      { id: 2, name: 'Space Exploration Seminar', date: '2025-02-20', status: 'Completed' },
      { id: 3, name: 'Telescope Workshop', date: '2025-01-15', status: 'Completed' }
    ]
  }
};

const ClubDashboard = () => {
  const { clubId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  
  const club = clubId && clubData[clubId];

  if (!club) {
    return <div>Club not found</div>;
  }

  const managementOptions = [
    {
      id: 'members',
      name: 'Manage Members',
      description: 'Add, remove, or update club member information',
      icon: <Users size={24} className={club.textColor} />,
      action: () => console.log('Manage members')
    },
    {
      id: 'projects',
      name: 'Manage Projects',
      description: 'Create and track projects for the club',
      icon: <Briefcase size={24} className={club.textColor} />,
      action: () => console.log('Manage projects')
    },
    {
      id: 'activities',
      name: 'Manage Activities',
      description: 'Schedule and organize club activities and events',
      icon: <Calendar size={24} className={club.textColor} />,
      action: () => navigate(`/add-activity`)
    }
  ];

  const quickActions = [
    { name: 'Add Member', icon: <Users size={18} />, action: () => console.log('Add member') },
    { name: 'New Project', icon: <Briefcase size={18} />, action: () => console.log('New project') },
    { name: 'Schedule Event', icon: <Calendar size={18} />, action: () => navigate(`/add-activity`) },
    { name: 'Generate Report', icon: <FileText size={18} />, action: () => console.log('Generate report') }
  ];

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
 
           {/* Main Dashboard Card */}   <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={() => navigate('/clubs')}
          className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          <ArrowLeft size={16} className="mr-1" />
          Back to Clubs
        </button>
        
        <div className="flex space-x-2">
          {quickActions.map((action, index) => (
            <button
              key={index}
              onClick={action.action}
              className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            >
              {action.icon}
              <span className="ml-2 hidden sm:inline">{action.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div className={`${club.color} rounded-xl p-6 mb-8 text-white`}>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div>
            <div className="flex items-center">
              <div className="bg-white/20 p-3 rounded-lg mr-4">
                {club.name === 'SODS' ? <BarChart size={32} /> : 
                 club.name === 'Garuda' ? <Briefcase size={32} /> : 
                 <Calendar size={32} />}
              </div>
              <div>
                <h1 className="text-3xl font-bold">{club.name}</h1>
                <p className="text-white text-opacity-90 mt-1">{club.fullName}</p>
              </div>
            </div>
            <p className="mt-4 max-w-2xl">{club.description}</p>
          </div>
          
          <div className="mt-6 md:mt-0 grid grid-cols-2 gap-4 md:flex md:space-x-4">
            <div className="bg-white/10 rounded-lg p-3 text-center backdrop-blur-sm">
              <p className="text-2xl font-bold">{club.stats.members}</p>
              <p className="text-xs text-white/80">Members</p>
            </div>
            <div className="bg-white/10 rounded-lg p-3 text-center backdrop-blur-sm">
              <p className="text-2xl font-bold">{club.stats.projects}</p>
              <p className="text-xs text-white/80">Projects</p>
            </div>
            <div className="bg-white/10 rounded-lg p-3 text-center backdrop-blur-sm">
              <p className="text-2xl font-bold">{club.stats.events}</p>
              <p className="text-xs text-white/80">Events</p>
            </div>
            <div className="bg-white/10 rounded-lg p-3 text-center backdrop-blur-sm">
              <p className="text-2xl font-bold">{club.stats.upcoming}</p>
              <p className="text-xs text-white/80">Upcoming</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('overview')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'overview'
                  ? `border-${club.color.split('-')[1]}-500 text-${club.color.split('-')[1]}-600`
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('activities')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'activities'
                  ? `border-${club.color.split('-')[1]}-500 text-${club.color.split('-')[1]}-600`
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Recent Activities
            </button>
            <button
              onClick={() => setActiveTab('management')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'management'
                  ? `border-${club.color.split('-')[1]}-500 text-${club.color.split('-')[1]}-600`
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Management
            </button>
          </nav>
        </div>
      </div>

      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className={`${club.lightColor} rounded-xl p-6 border ${club.borderColor}`}>
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <Activity className={`${club.textColor} mr-2`} size={20} />
              Club Performance
            </h2>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-sm font-medium text-gray-700">Member Engagement</h3>
                  <span className={`${club.textColor} text-sm font-medium`}>85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className={`${club.color} h-2 rounded-full`} style={{ width: '85%' }}></div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-sm font-medium text-gray-700">Project Completion</h3>
                  <span className={`${club.textColor} text-sm font-medium`}>72%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className={`${club.color} h-2 rounded-full`} style={{ width: '72%' }}></div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-sm font-medium text-gray-700">Event Attendance</h3>
                  <span className={`${club.textColor} text-sm font-medium`}>93%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className={`${club.color} h-2 rounded-full`} style={{ width: '93%' }}></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`${club.lightColor} rounded-xl p-6 border ${club.borderColor}`}>
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <Clock className={`${club.textColor} mr-2`} size={20} />
              Upcoming Events
            </h2>
            <div className="space-y-3">
              {club.recentActivities
                .filter(activity => activity.status === 'Upcoming')
                .map(activity => (
                  <div key={activity.id} className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex justify-between">
                      <h3 className="font-medium text-gray-800">{activity.name}</h3>
                      <span className="text-sm text-gray-500">
                        {new Date(activity.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                    <div className="mt-2 flex justify-between items-center">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        Upcoming
                      </span>
                      <button className="text-sm text-blue-600 hover:text-blue-800 flex items-center">
                        Details
                        <ChevronRight size={14} className="ml-1" />
                      </button>
                    </div>
                  </div>
                ))}
              
              {club.recentActivities.filter(activity => activity.status === 'Upcoming').length === 0 && (
                <div className="text-center py-6 text-gray-500">
                  No upcoming events scheduled
                </div>
              )}
              
              <button 
                onClick={() => navigate(`/add-activity`)}
                className={`w-full mt-4 flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white ${club.color} hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200`}
              >
                Schedule New Event
                <Calendar size={16} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'activities' && (
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-800">Recent Activities</h2>
            <button 
              onClick={() => navigate(`/add-activity`)}
              className={`flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white ${club.color} hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200`}
            >
              Add Activity
              <Calendar size={16} className="ml-2" />
            </button>
          </div>
          
          <div className="divide-y divide-gray-200">
            {club.recentActivities.map(activity => (
              <div key={activity.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-medium text-gray-800">{activity.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {new Date(activity.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    activity.status === 'Completed' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {activity.status}
                  </span>
                </div>
                <div className="mt-4 flex justify-end space-x-3">
                  <button className="text-sm text-gray-600 hover:text-gray-800 flex items-center">
                    <FileText size={14} className="mr-1" />
                    View Details
                  </button>
                  {activity.status === 'Upcoming' && (
                    <button className="text-sm text-blue-600 hover:text-blue-800 flex items-center">
                      <Settings size={14} className="mr-1" />
                      Manage
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'management' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {managementOptions.map((option) => (
            <div
              key={option.id}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className={`${club.lightColor} p-3 rounded-lg`}>
                  {option.icon}
                </div>
                <h3 className="ml-3 text-lg font-semibold text-gray-800">{option.name}</h3>
              </div>
              <p className="text-gray-600 mb-4">{option.description}</p>
              <button
                onClick={option.action}
                className={`w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white ${club.color} hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200`}
              >
                {option.name}
              </button>
            </div>
          ))}
        </div>
      )}
      
      <div className="mt-12 bg-gray-50 rounded-xl p-6 border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
          <Award className={`${club.textColor} mr-2`} size={20} />
          Club Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
            <div className="flex items-center mb-2">
              <PieChart className="text-blue-500 mr-2" size={18} />
              <h3 className="font-medium text-gray-800">Best Data Analysis</h3>
            </div>
            <p className="text-sm text-gray-600">Awarded for excellence in data visualization and analysis techniques</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
            <div className="flex items-center mb-2">
              <Award className="text-yellow-500 mr-2" size={18} />
              <h3 className="font-medium text-gray-800">Innovation Award</h3>
            </div>
            <p className="text-sm text-gray-600">Recognized for innovative approaches to problem-solving</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
            <div className="flex items-center mb-2">
              <Users className="text-green-500 mr-2" size={18} />
              <h3 className="font-medium text-gray-800">Community Impact</h3>
            </div>
            <p className="text-sm text-gray-600">Acknowledged for positive contributions to the university community</p>
          </div>
        </div>
      </div>
    </div>
           
         </div>
       </div>
     </>
  );
};

export default ClubDashboard; 