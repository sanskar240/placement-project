"use client";
import React, { useState } from 'react';
import axios from 'axios';

const ListingForm = () => {
  const [listings,setListings] = useState([]);
  const [newListing,setNewListings] = useState({
    name: '',
    description: '',
    email: '',
    cutoff:'',
  });

  
  const handleClick = async(e) =>{
    e.preventDefault();
    try{
        const response = await axios.post('http://localhost:5011/offers',newListing);
        setListings([response.data,...listings]);
        setNewListings({name: '', description:'', email: '', cutoff:''});

    }catch(error){
        console.error("Error creating listings",error);
    }
  };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form Data:', formData);
//     // Additional actions can be performed here, e.g., sending data to a server
//   };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Add a Listing</h2>
        <form onSubmit={''}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Listing Name:</label>
            <input
              type="text"
              name="listingName"
              value={newListing.listingName}
              onChange={(e)=>setNewListings({...newListing,name:e.target.value})}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-600 text-black"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Description:</label>
            <textarea
              name="description"
              value={newListing.description}
              onChange={(e)=>setNewListings({...newListing,description:e.target.value})}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-600 text-black"
            ></textarea>
          </div>
          <div className = "mb-4">
          <label className="block text-sm font-medium text-gray-700">Cutoff GPA</label>
            <input
              type="number"
              name="number"
              value={newListing.cutoff}
              onChange={(e)=>setNewListings({...newListing,cutoff:e.target.value})}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-600 text-black"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email:</label>
            <input
              type="email"
              name="email"
              value={newListing.email}
              onChange={(e)=>setNewListings({...newListing,email:e.target.value})}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-600 text-black"
            />
          </div>
          <button
          onClick = {handleClick}
            type="submit"
            className="w-full py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ListingForm;
