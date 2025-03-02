import React from "react";

function LoginPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="bg-red-900 text-white py-4 px-8 flex items-center justify-center relative">
  
  <span className="text-xl font-bold">Integrated Research & Discovery - KL University</span>
</nav>


      {/* Main Content */}
      <div className="flex flex-grow bg-gray-200 p-10 justify-center items-center">
        <div className="w-full max-w-10xl bg-gray-200 p-10  flex">
        
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
              <input
                type="text"
                placeholder="Enter Your ID"
                className="w-full border p-2 mb-4 rounded-md"
              />
              <input
                type="password"
                placeholder="Enter 6-digit pin"
                className="w-full border p-2 mb-4 rounded-md"
              />
              <button className="w-full bg-red-800 text-white py-2 rounded-md hover:bg-red-700">
                Login
              </button>
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
