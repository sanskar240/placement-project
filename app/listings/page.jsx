"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ListingCard from '../(components)/ListingCard';

const OffersPage = () => {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await axios.get('http://localhost:5011/offers');
        console.log('Response:', response.data);
        setOffers(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching offers:', error);
        setError('Error fetching offers. Please try again later.');
        setLoading(false);
      }
    };
  
    fetchOffers();
  }, []);
  

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div>
          <div>
            {offers.map((offer) => (
              <ListingCard 
                key={offer.id} 
                offer={offer} 
                // Add other props as needed
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default OffersPage;
