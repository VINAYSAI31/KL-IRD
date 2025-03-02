import React from 'react';
import Adminnavbar from '../Components/Adminnavbar';

const Admins = () => {
  // Hardcoded user data
  const users = [
    { id: 1, username: 'admin1' },
    { id: 2, username: 'admin2' },
    { id: 3, username: 'admin3' },
  ];

  return (
    <>
      <Adminnavbar />
      <div className="main-content">
        <div className="card-container">
          {/* Top Card */}
          <div className="top-card">
            <h1>
              <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
              <p className="text-lg text-muted-foreground mt-4">
                Manage your ongoing projects
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

          {/* Main Dashboard Card */}
          <div className="dashboard-card">
            {/* Add projects list here */}
            <div className="main-content bg-gray-100  flex justify-center items-center">
        <div className="w-full max-w-4xl px-4">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Admins List</h1>
            <table className="min-w-full bg-white rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-200">
                  <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">Username</th>
                  <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">Delete</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user.id} className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                    <td className="py-4 px-6 text-sm text-gray-800">{user.username}</td>
                    <td className="py-4 px-6 text-sm">
                      <button className="text-red-500 hover:text-red-700 transition-colors duration-200">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admins; 