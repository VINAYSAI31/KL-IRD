import React from 'react';
import Adminnavbar from '../Components/Adminnavbar';

const Profile = () => {
  // Hardcoded user profile data
  const userProfile = {
    username: 'admin1',
    email: 'admin1@example.com',
    role: 'Administrator',
    joinedDate: '2023-01-15',
  };

  return (
    <>
      <Adminnavbar />
      <div className="main-content bg-gray-100 min-h-screen flex justify-center items-center">
        <div className="w-full max-w-2xl px-4">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Profile</h1>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-600">Username:</span>
                <span className="text-sm text-gray-800">{userProfile.username}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-600">Email:</span>
                <span className="text-sm text-gray-800">{userProfile.email}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-600">Role:</span>
                <span className="text-sm text-gray-800">{userProfile.role}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-600">Joined Date:</span>
                <span className="text-sm text-gray-800">{userProfile.joinedDate}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile; 