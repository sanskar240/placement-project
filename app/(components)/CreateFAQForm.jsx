"use client";

// Import React and useState from 'react'
import React, { useState } from 'react';

// Import Tailwind CSS styles
import 'tailwindcss/tailwind.css';

// Create FAQForm component
const CreateFAQForm = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    authorName: '',
  });

  // Handle input changes
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <form
        className="bg-gray-700 p-8 rounded shadow-md max-w-md"
        onSubmit={handleSubmit}
      >
        <label htmlFor="title" className="block text-gray-300 mb-2">
          Title:
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-600 rounded mb-4"
          required
        />

        <label htmlFor="description" className="block text-gray-300 mb-2">
          Description:
        </label>
        <textarea
          id="description"
          name="description"
          rows="4"
          value={formData.description}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-600 rounded mb-4"
          required
        ></textarea>

        <label htmlFor="authorName" className="block text-gray-300 mb-2">
          Author Name:
        </label>
        <input
          type="text"
          id="authorName"
          name="authorName"
          value={formData.authorName}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-600 rounded mb-4"
          required
        />

        <button
          type="submit"
          className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateFAQForm;
