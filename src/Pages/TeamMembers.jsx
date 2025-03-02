import React from 'react';
import Adminnavbar from '../Components/Adminnavbar';

const TeamMembers = () => {
  return (
    <>
      <Adminnavbar/>
      {/* Main Content */}
      <div className="main-content">
        <div className="card-container">
          {/* Top Card */}
          <div className="top-card">
            <h1>
              <h1 className="text-3xl font-bold tracking-tight">Team Members</h1>
              <p className="text-lg text-muted-foreground mt-4">
                Manage your team members
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
            {/* Add team members list here */}
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamMembers; 