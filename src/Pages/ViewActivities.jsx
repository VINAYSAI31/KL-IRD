import React, { useState, useEffect } from 'react';
import Adminnavbar from '../Components/Adminnavbar';

const ViewActivities = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    // Fetch activities from localStorage
    const storedActivities = JSON.parse(localStorage.getItem('activities')) || [];
    setActivities(storedActivities);
  }, []);

  return (
    <>
      <Adminnavbar />
      {/* Main Content */}
      <div className="main-content">
        <div className="card-container">
          {/* Top Card */}
          <div className="top-card">
            <h1>
              <h1 className="text-3xl font-bold tracking-tight">Activities List</h1>
              <p className="text-lg text-muted-foreground mt-4">
                View and manage all activities
              </p>
            </h1>
            <div className="top-actions">
              <div className="search-bar">
                <input type="text" placeholder="Search activities..." />
                <i className="fas fa-search"></i>
              </div>
              <div className="bell-icon">
                <i className="fas fa-bell"></i>
              </div>
            </div>
          </div>

          {/* Activities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            {activities.map((activity, index) => (
              <div key={index} className="card">
                <h2>{activity.activityName}</h2>
                <p>{activity.description}</p>
                <div className="mt-2">
                  <p>Date: {activity.date}</p>
                  <p>Time: {activity.time}</p>
                  <p>Location: {activity.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewActivities; 