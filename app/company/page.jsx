import React from 'react';
import Link from 'next/link';

const Company = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
    <Link href="/add-listing">
      <button className="mb-4 inline-block px-6 py-3 text-lg font-semibold text-white bg-green-500 border-2 border-green-500 rounded-full transition-transform hover:bg-white hover:text-green-500 transform hover:scale-105">
        Create Listing
      </button>
    </Link>
  
    <Link href="/listing-history">
      <button className="mb-4 inline-block px-6 py-3 text-lg font-semibold text-white bg-green-500 border-2 border-green-500 rounded-full transition-transform hover:bg-white hover:text-green-500 transform hover:scale-105">
        Listing History
      </button>
    </Link>
  
    <Link href="/view-applications">
      <button className="inline-block px-6 py-3 text-lg font-semibold text-white bg-green-500 border-2 border-green-500 rounded-full transition-transform hover:bg-white hover:text-green-500 transform hover:scale-105">
        View Applications
      </button>
    </Link>
  </div>
  );
};

export default Company;
