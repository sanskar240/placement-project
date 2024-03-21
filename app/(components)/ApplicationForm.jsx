"use client";
import React, { useState } from 'react';
import axios from "axios";
import Link from "next/link";


const ApplicationForm = () => {
  const [applications,setApplications] = useState([]);
  const [newApplication, setNewApplication] = useState({
    name: '',
    gpa: '',
    phonenumber: '',
    about: '',
  });

  const handleClick = async (e) =>{
    e.preventDefault();
    try{
      const response = await axios.post('http://localhost:5011/applications',newApplication);
      setApplications([response.data,...applications]);
      setNewApplication({  name: '',
      gpa: '',
      phonenumber: '',
      about: '',});
    }catch(error){
      console.error("Error creating the application",error);
    }
  }


  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Application Form</h1>
        <form >
         
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={newApplication.name}
             
              className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 w-full text-gray-800"
              required
            />
          </div>

         
          <div className="mb-4">
            <label htmlFor="gpa" className="block text-sm font-medium text-gray-600">
              GPA:
            </label>
            <input
              type="text"
              id="gpa"
              name="gpa"
              value={newApplication.gpa}
              
              className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 w-full text-gray-800"
              required
            />
          </div>

         
          <div className="mb-4">
            <label htmlFor="phonenumber" className="block text-sm font-medium text-gray-600">
              Phone Number:
            </label>
            <input
              type="tel"
              id="phonenumber"
              name="phonenumber"
              value={newApplication.phonenumber}
              
              className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 w-full text-gray-800"
              required
            />
          </div>

      
          <div className="mb-4">
            <label htmlFor="about" className="block text-sm font-medium text-gray-600">
              About:
            </label>
            <textarea
              id="about"
              name="about"
              rows="4"
              value={newApplication.about}
             
              className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 w-full text-gray-800"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <Link href = '/view-applications'>
          <button
          onClick = {handleClick}
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
          >
            Submit Application
          </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm;
