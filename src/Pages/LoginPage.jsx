import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Updated to use useNavigate
import { supabase } from '../supabaseClient';
import bcrypt from 'bcryptjs';


function LoginPage({ setIsAuthenticated }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Updated to use useNavigate

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

  
    try {
      const { data, error } = await supabase
        .from('Admins')
        .select()
        .eq('username', username)
        .single();
  
      if (error) throw error;
  
      if (data) {
        // Assuming password is stored in plain text for this example
        const isMatch = await bcrypt.compare(password, data.password);
        if (isMatch) {
          console.log('Login successful!');
          setIsAuthenticated(true); // Set authentication state to true
          localStorage.setItem('isAuthenticated', 'true'); // Store authentication state
          navigate('/home');
        } else {
          setError('Invalid username or password');
        }
      } else {
        setError('Invalid username or password');
      }
    } catch (err) {
      console.error('Error logging in:', err);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="bg-red-900 text-white py-4 px-8 flex items-center justify-center relative">
        <span className="text-xl font-bold">Integrated Research & Discovery - KL University</span>
      </nav>

      {/* Main Content */}
      <div className="flex flex-grow bg-gray-200 p-10 justify-center items-center">
        <div className="w-full max-w-10xl bg-gray-200 p-10 flex">
          {/* Left Section - Information */}
          <div className="w-1/2 pr-6">
            <h2 className="text-3xl font-bold text-red-700 mb-4">
              KL University IRD Portal - Centralized Research Management
            </h2>
            <p className="text-gray-700">
              The Integrated Research and Discovery (IRD) department of KL University organizes and manages its research-related events, conferences, and workshops through this portal. This system ensures a seamless experience for faculty, students, and researchers by providing real-time updates on event details, schedules, and registrations.
              <br /><br />
              With this platform, users can:
              <ul className="list-disc ml-5 mt-2">
                <li>✅ View upcoming IRD events and important announcements</li>
                <li>✅ Register for seminars, research summits, and academic conferences</li>
                <li>✅ Track event schedules, speaker details, and venue information</li>
                <li>✅ Receive notifications and reminders for registered events</li>
                <li>✅ Submit proposals or abstracts for research-related programs</li>
              </ul>
              <br />
              This centralized event management system enhances efficiency, reduces manual effort, and ensures smooth coordination of all IRD activities at KL University.
            </p>
          </div>

          {/* Right Section - Login Form */}
          <div className="w-1/2 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
              <div className="flex justify-center">
                <img src="/kl-ird.png" alt="KL University Logo" className="h-20" />
              </div>
              <h2 className="text-xl font-bold text-red-800 text-center mb-4">
                Admin Login
              </h2>
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <button
                  type="submit"
                  className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Login
                </button>
              </form>
              <p className="text-center text-red-900 mt-2 cursor-pointer">
                Forgot Password?
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-red-900 text-white text-center py-2 text-sm">
        &copy; 2025 KL Deemed to be University. All rights reserved.<br />
        Developed by <strong>Vinay Sai</strong> @ CSE-Honors
      </footer>
    </div>
  );
}

export default LoginPage;
