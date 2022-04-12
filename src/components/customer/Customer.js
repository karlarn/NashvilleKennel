import React from "react"
import "./Customer.css"
import { Link } from "react-router-dom";

export const CustomerCard = ({ singleCustomer, handleDeleteCustomer }) => {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
              <img src={'/images/person.png'} alt="My Dog" />
            </picture>
          <h3>Name: <span className="card-customername">
            {singleCustomer.name}
          </span></h3>
          <p>Address: {singleCustomer.address}</p>
          <button type="button" onClick={() => handleDeleteCustomer(singleCustomer.id)}>Disgard</button>
          <Link to={`/customers/${singleCustomer.id}/edit`}>
    <button>Edit</button>
  </Link>
        </div>
      </div>
    );
  }

