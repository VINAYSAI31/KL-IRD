import React, { useState, useEffect } from 'react';
import { Search, Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import Adminnavbar from '../Components/Adminnavbar';

// Sample data for demonstration
const sampleActivities = [
  {
    id: 1,
    name: 'Data Science Workshop',
    presenter: 'Dr. John Smith',
    author: 'Jane Doe',
    club: 'SODS',
    date: '2025-03-15',
    description: 'Introduction to data science concepts and tools. This workshop covers the basics of data analysis, visualization, and machine learning. Participants will learn how to use Python for data science applications.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    name: 'Robotics Competition',
    presenter: 'Prof. Robert Johnson',
    author: 'Michael Brown',
    club: 'Garuda',
    date: '2025-04-10',
    description: 'Annual robotics competition for engineering students. Teams will design, build, and program robots to complete specific challenges. Prizes will be awarded to the top three teams.',
    image: 'https://images.unsplash.com/photo-1561144257-e32e8506397b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    name: 'Star Gazing Night',
    presenter: 'Dr. Emily Clark',
    author: 'David Wilson',
    club: 'Vega',
    date: '2025-02-28',
    description: 'Observing celestial bodies using telescopes. Join us for a night of stargazing and learn about constellations, planets, and deep-sky objects. Telescopes will be provided.',
    image: 'https://images.unsplash.com/photo-1465101162946-4377e57745c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    name: 'Machine Learning Seminar',
    presenter: 'Prof. Sarah Adams',
    author: 'Thomas Lee',
    club: 'SODS',
    date: '2025-05-05',
    description: 'Advanced machine learning techniques and applications. This seminar will cover deep learning, neural networks, and their applications in various fields. Case studies and practical examples will be discussed.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 5,
    name: 'Drone Building Workshop',
    presenter: 'Dr. Mark Taylor',
    author: 'Jennifer White',
    club: 'Garuda',
    date: '2025-04-22',
    description: 'Hands-on workshop for building and programming drones. Participants will learn about drone components, assembly, and basic programming. Each team will build a functional drone by the end of the workshop.',
    image: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

const SearchEvent = () => {
  const [searchType, setSearchType] = useState('name');
  const [nameQuery, setNameQuery] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [results, setResults] = useState(sampleActivities);
  const [hasSearched, setHasSearched] = useState(false);
  const [sortConfig, setSortConfig] = useState(null);
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  useEffect(() => {
    let filteredResults = [...sampleActivities];
    
    if (searchType === 'name' && nameQuery) {
      filteredResults = filteredResults.filter(
        activity => 
          activity.name.toLowerCase().includes(nameQuery.toLowerCase()) ||
          activity.presenter.toLowerCase().includes(nameQuery.toLowerCase()) ||
          activity.author.toLowerCase().includes(nameQuery.toLowerCase())
      );
    } else if (searchType === 'date') {
      if (startDate) {
        filteredResults = filteredResults.filter(
          activity => activity.date >= startDate
        );
      }
      
      if (endDate) {
        filteredResults = filteredResults.filter(
          activity => activity.date <= endDate
        );
      }
    }
    
    setResults(filteredResults);
    setHasSearched(true);
    setExpandedId(null); // Reset expanded state when new search is performed
  }, [nameQuery, startDate, endDate, searchType]);

  const handleSort = (key) => {
    let direction = 'ascending';
    
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    
    setSortConfig({ key, direction });
    
    const sortedResults = [...results].sort((a, b) => {
      if (a[key] < b[key]) {
        return direction === 'ascending' ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
    
    setResults(sortedResults);
  };

  const getSortIcon = (key) => {
    if (!sortConfig || sortConfig.key !== key) {
      return null;
    }
    
    return sortConfig.direction === 'ascending' ? 
      <ChevronUp size={16} /> : 
      <ChevronDown size={16} />;
  };

  return (
    <>
      <Adminnavbar />
      <div className="main-content bg-gray-100 min-h-screen">
        <div className="card-container">
          {/* Top Card */}
          <div className="top-card">
            <h1>
              <h1 className="text-3xl font-bold tracking-tight">Search Activities</h1>
              <p className="text-lg text-muted-foreground mt-4">
                Find activities and events by name or date range
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

          {/* Main Content Area */}
          <div className="mt-8 mx-10 max-w-6xl px-4">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="mb-6">
                <div className="flex space-x-4">
                  <button
                    onClick={() => setSearchType('name')}
                    className={`px-4 py-2 rounded-md text-sm font-medium ${
                      searchType === 'name'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Search by Name
                  </button>
                  <button
                    onClick={() => setSearchType('date')}
                    className={`px-4 py-2 rounded-md text-sm font-medium ${
                      searchType === 'date'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Search by Date
                  </button>
                </div>
              </div>

              {searchType === 'name' ? (
                <div className="mb-6">
                  <div className="relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search size={18} className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      value={nameQuery}
                      onChange={(e) => setNameQuery(e.target.value)}
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Search by activity name, presenter, or author"
                    />
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-1">
                      Start Date
                    </label>
                    <div className="relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Calendar size={18} className="text-gray-400" />
                      </div>
                      <input
                        type="date"
                        id="startDate"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 mb-1">
                      End Date
                    </label>
                    <div className="relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Calendar size={18} className="text-gray-400" />
                      </div>
                      <input
                        type="date"
                        id="endDate"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {hasSearched && (
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-lg font-semibold text-gray-800">
                    Search Results ({results.length})
                  </h2>
                </div>
                
                {results.length > 0 ? (
                  <div className="space-y-4">
                    {results.map((activity) => (
                      <div key={activity.id} className="border-b border-gray-100 last:border-b-0">
                        <div 
                          className="p-6 cursor-pointer hover:bg-gray-50"
                          onClick={() => toggleExpand(activity.id)}
                        >
                          <div className="flex justify-between items-center">
                            <div>
                              <h3 className="text-lg font-semibold text-gray-800">{activity.name}</h3>
                              <div className="mt-1 flex items-center text-sm text-gray-600">
                                <span className="mr-4">Presenter: {activity.presenter}</span>
                                <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                                  {activity.club}
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center">
                              <div className="text-right mr-4">
                                <div className="text-sm text-gray-600">
                                  {new Date(activity.date).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                  })}
                                </div>
                              </div>
                              {expandedId === activity.id ? (
                                <ChevronUp size={20} className="text-gray-400" />
                              ) : (
                                <ChevronDown size={20} className="text-gray-400" />
                              )}
                            </div>
                          </div>
                        </div>
                        
                        {expandedId === activity.id && (
                          <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                            <div className="md:flex">
                              {activity.image && (
                                <div className="md:w-1/3 mb-4 md:mb-0 md:mr-6">
                                  <img
                                    src={activity.image}
                                    alt={activity.name}
                                    className="rounded-lg w-full h-48 object-cover"
                                  />
                                </div>
                              )}
                              <div className={activity.image ? "md:w-2/3" : "w-full"}>
                                <h4 className="text-sm font-medium text-gray-500 mb-2">Description</h4>
                                <p className="text-gray-700 mb-4">{activity.description}</p>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  <div>
                                    <h4 className="text-sm font-medium text-gray-500 mb-1">Author</h4>
                                    <p className="text-gray-700">{activity.author}</p>
                                  </div>
                                  <div>
                                    <h4 className="text-sm font-medium text-gray-500 mb-1">Presenter</h4>
                                    <p className="text-gray-700">{activity.presenter}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-6 text-center text-gray-500">
                    No activities found matching your search criteria.
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchEvent; 