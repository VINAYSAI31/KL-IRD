import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Users, Briefcase, Calendar, ArrowLeft } from 'lucide-react';
import Adminnavbar from '../Components/Adminnavbar';

const clubData = {
  sods: {
    name: 'SODS',
    fullName: 'Society of Data Scientists',
    color: 'bg-blue-500',
    description: 'Promoting data science and analytics skills among students'
  },
  garuda: {
    name: 'Garuda',
    fullName: 'Robotics & Innovation Club',
    color: 'bg-green-500',
    description: 'Fostering innovation and robotics development'
  },
  vega: {
    name: 'Vega',
    fullName: 'Astronomy & Space Club',
    color: 'bg-purple-500',
    description: 'Exploring astronomy and space sciences'
  }
};

const Clubs = () => {
  const { clubId } = useParams();
  const navigate = useNavigate();
  
  const club = clubId && clubData[clubId];

  if (!club) {
    return <div>Club not found</div>;
  }

  const managementOptions = [
    {
      id: 'members',
      name: 'Manage Members',
      description: 'Add, remove, or update club member information',
      icon: <Users size={24} className="text-blue-600" />,
      action: () => console.log('Manage members')
    },
    {
      id: 'projects',
      name: 'Manage Projects',
      description: 'Create and track projects for the club',
      icon: <Briefcase size={24} className="text-blue-600" />,
      action: () => console.log('Manage projects')
    },
    {
      id: 'activities',
      name: 'Manage Activities',
      description: 'Schedule and organize club activities and events',
      icon: <Calendar size={24} className="text-blue-600" />,
      action: () => navigate(`/add-activity/${clubId}`)
    }
  ];

  return (
    <>
      <Adminnavbar />
      <div className="max-w-6xl mx-auto mt-8">
        <button
          onClick={() => navigate('/manage-clubs')}
          className="flex items-center text-blue-600 hover:text-blue-800 mb-6"
        >
          <ArrowLeft size={16} className="mr-1" />
          Back to Clubs
        </button>

        <div className={`${club.color} rounded-lg p-6 mb-8 text-white`}>
          <h1 className="text-2xl font-bold">{club.name}</h1>
          <p className="text-white text-opacity-90 mt-2">{club.fullName}</p>
          <p className="mt-4">{club.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {managementOptions.map((option) => (
            <div
              key={option.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                {option.icon}
                <h3 className="ml-3 text-lg font-semibold text-gray-800">{option.name}</h3>
              </div>
              <p className="text-gray-600 mb-4">{option.description}</p>
              <button
                onClick={option.action}
                className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {option.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Clubs; 