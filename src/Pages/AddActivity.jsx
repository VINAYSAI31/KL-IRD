import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ArrowLeft, User, FileText, Calendar, MapPin, Clock, Image } from 'lucide-react';
import Adminnavbar from '../Components/Adminnavbar';

const AddActivity = () => {
  const navigate = useNavigate();
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm({
    defaultValues: {
      activityName: '',
      organizer: '',
      description: '',
      date: '',
      time: '',
      location: '',
      image: ''
    }
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (data) => {
    try {
      // Convert image to base64 if exists
      const formData = {
        ...data,
        image: imagePreview
      };

      // Store in localStorage
      const activities = JSON.parse(localStorage.getItem('activities') || '[]');
      activities.push(formData);
      localStorage.setItem('activities', JSON.stringify(activities));
      
      setSubmitSuccess(true);
      reset();
      setImagePreview(null);
      
      setTimeout(() => {
        navigate('/view-activities');
      }, 2000);
    } catch (error) {
      console.error('Error saving activity:', error);
    }
  };

  return (
    <>
      <Adminnavbar />
      <div className="main-content bg-gray-100">
        <div className="card-container">
          {/* Top Card */}
          <div className="top-card">
            <h1>
              <h1 className="text-3xl font-bold tracking-tight">Add New Activity</h1>
              <p className="text-lg text-muted-foreground mt-4">
                Create and manage your activities
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
          <div className="dashboard-card">
            {/* Add member form here */} <div className="mt-8 mx-auto max-w-4xl px-4">
            <div className="bg-white rounded-lg shadow-md p-8">
              {submitSuccess && (
                <div className="mb-6 bg-green-50 border-l-4 border-green-500 p-4">
                  <div className="flex">
                    <div className="ml-3">
                      <p className="text-sm text-green-700">
                        Activity has been successfully added!
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="activityName" className="block text-sm font-medium text-gray-700 mb-1">
                    Activity Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FileText size={18} className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="activityName"
                      {...register("activityName", { required: "Activity name is required" })}
                      className={`block w-full pl-10 pr-3 py-2 sm:text-sm border rounded-md focus:ring-blue-500 focus:border-blue-500 ${
                        errors.activityName ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder="Enter activity name"
                    />
                  </div>
                  {errors.activityName && (
                    <p className="mt-1 text-sm text-red-600">{errors.activityName.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="organizer" className="block text-sm font-medium text-gray-700 mb-1">
                    Organizer <span className="text-red-500">*</span>
                  </label>
                  <div className="relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User size={18} className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="organizer"
                      {...register("organizer", { required: "Organizer name is required" })}
                      className={`block w-full pl-10 pr-3 py-2 sm:text-sm border rounded-md focus:ring-blue-500 focus:border-blue-500 ${
                        errors.organizer ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder="Enter organizer name"
                    />
                  </div>
                  {errors.organizer && (
                    <p className="mt-1 text-sm text-red-600">{errors.organizer.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                    Description <span className="text-red-500">*</span>
                  </label>
                  <div className="relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 pt-3 pointer-events-none">
                      <FileText size={18} className="text-gray-400" />
                    </div>
                    <textarea
                      id="description"
                      rows={4}
                      {...register("description", { required: "Description is required" })}
                      className={`block w-full pl-10 pr-3 py-2 sm:text-sm border rounded-md focus:ring-blue-500 focus:border-blue-500 ${
                        errors.description ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder="Enter activity description"
                    />
                  </div>
                  {errors.description && (
                    <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                      Date <span className="text-red-500">*</span>
                    </label>
                    <div className="relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Calendar size={18} className="text-gray-400" />
                      </div>
                      <input
                        type="date"
                        id="date"
                        {...register("date", { required: "Date is required" })}
                        className={`block w-full pl-10 pr-3 py-2 sm:text-sm border rounded-md focus:ring-blue-500 focus:border-blue-500 ${
                          errors.date ? 'border-red-300' : 'border-gray-300'
                        }`}
                      />
                    </div>
                    {errors.date && (
                      <p className="mt-1 text-sm text-red-600">{errors.date.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                      Time <span className="text-red-500">*</span>
                    </label>
                    <div className="relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Clock size={18} className="text-gray-400" />
                      </div>
                      <input
                        type="time"
                        id="time"
                        {...register("time", { required: "Time is required" })}
                        className={`block w-full pl-10 pr-3 py-2 sm:text-sm border rounded-md focus:ring-blue-500 focus:border-blue-500 ${
                          errors.time ? 'border-red-300' : 'border-gray-300'
                        }`}
                      />
                    </div>
                    {errors.time && (
                      <p className="mt-1 text-sm text-red-600">{errors.time.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                    Location <span className="text-red-500">*</span>
                  </label>
                  <div className="relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MapPin size={18} className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="location"
                      {...register("location", { required: "Location is required" })}
                      className={`block w-full pl-10 pr-3 py-2 sm:text-sm border rounded-md focus:ring-blue-500 focus:border-blue-500 ${
                        errors.location ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder="Enter event location"
                    />
                  </div>
                  {errors.location && (
                    <p className="mt-1 text-sm text-red-600">{errors.location.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
                    Event Image
                  </label>
                  <div className="mt-1 flex flex-col items-center">
                    <div className="w-full">
                      <div className="relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Image size={18} className="text-gray-400" />
                        </div>
                        <input
                          type="file"
                          id="image"
                          accept="image/*"
                          onChange={handleImageChange}
                          className="block w-full pl-10 pr-3 py-2 sm:text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                    </div>
                    {imagePreview && (
                      <div className="mt-4">
                        <img
                          src={imagePreview}
                          alt="Preview"
                          className="h-40 w-auto object-cover rounded-md"
                        />
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex justify-end pt-4">
                  <button
                    type="button"
                    onClick={() => navigate('/')}
                    className="mr-3 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Saving...' : 'Save Activity'}
                  </button>
                </div>
              </form>
            </div>
          </div>
            
          </div>
        </div>
        
      </div>
    </>
  );
};

export default AddActivity;
