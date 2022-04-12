import React, { useState, useEffect } from 'react';
import { LocationCard } from './Location';
import { getAllLocations, deleteLocation } from '../../modules/LocationManager';
import { useNavigate } from 'react-router-dom';

export const LocationList = () => {
  
  const [locations, setLocations] = useState([]);

  const navigate = useNavigate();

  const getLocations = () => {
    return getAllLocations().then(locationsFromAPI => {
      setLocations(locationsFromAPI)
    });
  };

  const handleDeleteLocation = id => {
    deleteLocation(id)
    .then(() => getAllLocations().then(setLocations));
};

  
  useEffect(() => {
    getLocations();
  }, []);

  
  return (
   <> <section className="section-content">
  <button type="button"
      className="btn"
      onClick={() => {navigate("/locations/create")}}>
      Create Location
  </button>
</section>
    <div className="container-cards">
      {locations.map(location =>
        <LocationCard
          key={location.id}
          singleLocation={location}
          handleDeleteLocation={handleDeleteLocation} />)}
    </div>
    </>
  )
};