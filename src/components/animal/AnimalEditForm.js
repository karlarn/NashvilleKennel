import React, { useState, useEffect } from "react";
import {useNavigate, useParams} from "react-router-dom";
import { updateAnimal, getAnimalById } from "../../modules/AnimalManager"
import "./AnimalForm.css"
import { getAllCustomers } from "../../modules/CustomerManager";
import { getAllLocations } from "../../modules/LocationManager";


export const AnimalEditForm = () => {
  const [animal, setAnimal] = useState({ name: "", breed: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [customers, setCustomers] = useState([]);
  const [locations, setLocations] = useState([])

  const {animalId} = useParams();
  const navigate = useNavigate();

  const handleFieldChange = evt => {
    const stateToChange = { ...animal };
    stateToChange[evt.target.id] = evt.target.value;
    setAnimal(stateToChange);
  };

  const updateExistingAnimal = evt => {
    evt.preventDefault()
    setIsLoading(true);

    // default values for locationId and customerId
    // if you already have these components/modules in place, you will need to include the correct information
    const editedAnimal = {
      id: animalId,
      name: animal.name,
      breed: animal.breed,
	    locationId: animal.locationId,
	    customerId: animal.customerId
    };

  //pass the editedAnimal object to the database
  updateAnimal(editedAnimal)
    .then(() => navigate("/animals")
    )
  }

  useEffect(()=>{
      getAllCustomers().then(customers=>{
          setCustomers(customers)
      })
  }, [] )

  useEffect(()=>{
      getAllLocations().then(locations=>{
          setLocations(locations)
      })
  }, [])

  useEffect(() => {
    getAnimalById(animalId)
      .then(animal => {
        setAnimal(animal);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
          <input
              type="date"
              readonly="readonly"
              className="form-control"
              id="date"
              value={animal.date}
            />
            <label htmlFor="name">Date admitted:</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={animal.name}
            />
            <label htmlFor="name">Animal name:</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="breed"
              value={animal.breed}
            />
            <label htmlFor="breed">Breed:</label>
            <label htmlFor="customerId">Customer: </label>
					<select value={animal.customerId} name="customer" id="customerId" onChange={handleFieldChange} className="form-control" >
						<option value="0">Select a customer</option>
						{customers.map(c => (
							<option key={c.id} value={c.id}>
								{c.name}
							</option>
						))}
					</select>
            <label htmlFor="location">Assign to location: </label>
		    		<select value={animal.locationId} name="locationId" id="locationId" onChange={handleFieldChange} className="form-control" >
						<option value="0">Select a location</option>
						{locations.map(l => (
							<option key={l.id} value={l.id}>
								{l.name}
							</option>
						))}
					</select>
          </div>
          {/* Be sure to include location and customer */}
          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingAnimal}
              className="btn btn-primary"
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}