import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CustomerCard } from './Customer';
import { getAllCustomers, deleteCustomer } from '../../modules/CustomerManager';

export const CustomerList = () => {
  
  const [customers, setCustomers] = useState([]);

  const navigate = useNavigate();

  const getCustomers = () => {

    return getAllCustomers().then(customersFromAPI => {
      setCustomers(customersFromAPI)
    });
  };

  const handleDeleteCustomer = id => {
    deleteCustomer(id)
    .then(() => getAllCustomers().then(setCustomers));
};


  useEffect(() => {
    getCustomers();
  }, []);

  
  return (
    <>
    <section className="section-content">
  <button type="button"
      className="btn"
      onClick={() => {navigate("/customers/create")}}>
      New Customer Form
  </button>
</section>
    <div className="container-cards">
      {customers.map(customer =>
        <CustomerCard
          key={customer.id}
          singleCustomer={customer}
          handleDeleteCustomer={handleDeleteCustomer} />)}
    </div>
    </>
  )

}