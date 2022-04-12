import React, { useState, useEffect } from "react";
import {useNavigate, useParams} from "react-router-dom";
import { updateCustomer, getCustomerById } from "../../modules/CustomerManager"
import { getAllLocations } from "../../modules/LocationManager";
import "./CustomerForm.css"


export const CustomerEditForm = () => {
    const [customer, setCustomer] = useState({  name: "", address: "" });
    const [isLoading, setIsLoading] = useState(false);
    const [locations, setLocations] = useState([])
  
    const {customerId} = useParams();
    const navigate = useNavigate();
  
    const handleFieldChange = evt => {
      const stateToChange = { ...customer };
      stateToChange[evt.target.id] = evt.target.value;
      setCustomer(stateToChange);
    };
  
    const updateExistingCustomer = evt => {
      evt.preventDefault()
      setIsLoading(true);
  
      // default values for locationId and customerId
      // if you already have these components/modules in place, you will need to include the correct information
      const editedCustomer = {
        id: customerId,
        name: customer.name,
        address: customer.address,
        locationId: customer.locationId
      };
  
    //pass the editedAnimal object to the database
    updateCustomer(editedCustomer)
      .then(() => navigate("/customers")
      )
    }

    useEffect(()=>{
        getAllLocations().then(locations=>{
            setLocations(locations)
        })
    }, [])
  
    useEffect(() => {
      getCustomerById(customerId)
        .then(singleCustomer => {
          setCustomer(singleCustomer);
          setIsLoading(false);
        });
    }, [customerId]);
  
    return (
      <>
        <form>
          <fieldset>
            <div className="formgrid">
              <input
                type="text"
                required
                className="form-control"
                onChange={handleFieldChange}
                id="name"
                value={customer.name}
              />
              <label htmlFor="name">Customer name</label>
  
              <input
                type="text"
                required
                className="form-control"
                onChange={handleFieldChange}
                id="address"
                value={customer.address}
              />
              <label htmlFor="address">Address</label>
              <label htmlFor="location">Assign to location: </label>
		    		<select value={customer.locationId} name="locationId" id="locationId" onChange={handleFieldChange} className="form-control" >
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
                onClick={updateExistingCustomer}
                className="btn btn-primary"
              >Submit</button>
            </div>
          </fieldset>
        </form>
      </>
    );
  }