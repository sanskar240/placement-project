"use client";
import React, { useState } from 'react';


const ResumeBuilder = () => {
  const [generatedText, setGeneratedText] = useState('');

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center space-y-4">
        <textarea
          className="bg-transparent border border-gray-300 p-4 rounded-md w-96 h-40 resize-none focus:outline-none focus:ring focus:border-blue-300 text-white"
          value={generatedText}
          readOnly
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
          onClick={''}
        >
          Generate
        </button>
      </div>
    </div>
  );
};

export default ResumeBuilder;
