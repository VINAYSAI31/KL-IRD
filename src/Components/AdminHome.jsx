import React, { useEffect, useState } from "react";
import "./Adminhome.css";
import Adminnavbar from "./Adminnavbar";




const Adminhome = () => {




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

          {/* Main Dashboard Card */}
          
        </div>
      </div>
    </>
  );
};

export default Adminhome;