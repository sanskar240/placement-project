import React from 'react';
import Link from "next/link/";

const ListingCard = ({offer}) => {
  return (
    <div className="flex flex-col bg-gray-800 p-8 rounded-lg shadow-md text-white max-w-md mx-auto mt-8">
      <div className="text-2xl font-bold mb-4">{offer.name}</div>
      <div className="text-lg mb-4">{offer.description}</div>
      <div className="text-sm text-gray-400 mb-4">{offer.email}</div>
      <div className="text-sm text-gray-400 mb-4">{offer.cutoff}</div>
      
      <div className="flex justify-between items-center">
        <Link href = '/apply-form'>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
          Apply
        </button>
        </Link>
      </div>
    </div>
  );
};

export default ListingCard;

