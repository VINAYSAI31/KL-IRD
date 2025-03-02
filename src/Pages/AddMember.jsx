import React from 'react';
import Adminnavbar from '../Components/Adminnavbar';

const AddMember = () => {
  return (
    <>
      <Adminnavbar/>
      {/* Main Content */}
      <div className="main-content">
        <div className="card-container">
          {/* Top Card */}
          <div className="top-card">
            <h1>
              <h1 className="text-3xl font-bold tracking-tight">Add New Member</h1>
              <p className="text-lg text-muted-foreground mt-4">
                Add a new member to the team
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
            {/* Add member form here */}
            
          </div>
        </div>
      </div>
    </>
  );
};

export default AddMember; 