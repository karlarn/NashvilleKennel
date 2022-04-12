import React, { useState, useEffect } from 'react';
import { getLocationById } from '../../modules/LocationManager';
import './LocationDetail.css';
import { useParams, useNavigate } from "react-router-dom";
import { deleteLocation } from '../../modules/LocationManager';

export const LocationDetail = () => {
  const [location, setLocation] = useState({ name: "", address: "" });
  const [isLoading, setIsLoading] = useState(true);

  const {locationId} = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    setIsLoading(true);
    deleteLocation(locationId).then(() =>
      navigate("/locations")
    );
  };

  useEffect(() => {
    //getAnimalById(id) from AnimalManager and hang on to the data; put it into state

    getLocationById(locationId)
      .then(singleLocation => {
        setLocation(singleLocation);
        setIsLoading(false);
      });
  }, [locationId]);

  return (
    <section className="location">
      <h3 className="location__name">{location.name}</h3>
      <div className="location__breed">{location.address}</div>
      <button type="button" disabled={isLoading} onClick={handleDelete}>
          Shut Down
        </button>
    </section>
  );
}