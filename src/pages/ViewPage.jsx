
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ViewPage.css";

function ViewPage() {
  const [customers, setCustomers] = useState([]);
  const [updateFormData, setUpdateFormData] = useState({
    id: null,
    name: "",
    email: "",
    age: "",
    city: "",
    number: "",
    report: ""
  });

  useEffect(() => {
    // Fetch registered customers when the component mounts
    axios.get('http://localhost:8080/getAll')
      .then(response => {
        setCustomers(response.data);
      })
      .catch(error => {
        console.error('Error fetching customers:', error);
      });
  }, []); // Empty dependency array means it runs once on mount

  const handleDelete = (customerId) => {
    axios.delete(`http://localhost:8080/delete/${customerId}`)
      .then(response => {
        setCustomers(prevCustomers => prevCustomers.filter(customer => customer.id !== customerId));
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error deleting customer:', error);
      });
  };

  const updateCustomerInTable = (updatedCustomer) => {
    // Update the customer data in the table
    setCustomers(prevCustomers => {
      return prevCustomers.map(customer => {
        if (customer.id === updatedCustomer.id) {
          // Replace the old data with the updated data
          return updatedCustomer;
        }
        return customer;
      });
    });
  };

  const handleUpdate = (customerId) => {
    console.log(`Update customer with ID ${customerId}`);
    // Find the customer to update based on the ID
    const customerToUpdate = customers.find(customer => customer.id === customerId);
    if (customerToUpdate) {
      // Populate the form data with the existing customer details
      setUpdateFormData({
        id: customerToUpdate.id,
        name: customerToUpdate.name,
        email: customerToUpdate.email,
        age: customerToUpdate.age,
        city: customerToUpdate.city,
        number: customerToUpdate.number,
        report: customerToUpdate.report
      });
    }
  };

  const handleUpdateSubmit = (event) => {
    event.preventDefault();
    // Make the API call to update the customer
    axios.put(`http://localhost:8080/update/${updateFormData.id}`, updateFormData)
      .then(response => {
        const updatedCustomer = response.data;
        // Update the customer data in the table
        updateCustomerInTable(updatedCustomer);
        console.log('Customer updated successfully');
      })
      .catch(error => {
        console.error('Error updating customer:', error);
      });
  };

  const handleUpdateChange = (event) => {
    setUpdateFormData({
      ...updateFormData,
      [event.target.name]: event.target.value
    });
  };

  return (
    <div className="view-page">
      <h1>Registered Customers</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>City</th>
            <th>Number</th>
            <th>Report</th>
            <th>Action</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {customers.map(customer => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.age}</td>
              <td>{customer.city}</td>
              <td>{customer.number}</td>
              <td>{customer.report}</td>
              <td>
                <button onClick={() => handleDelete(customer.id)}>Delete</button>
              </td>
              <td>
                <button onClick={() => handleUpdate(customer.id)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Form for updating customer information */}
      <form onSubmit={handleUpdateSubmit}>
        <h2>Update Customer</h2>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={updateFormData.name} onChange={handleUpdateChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={updateFormData.email} onChange={handleUpdateChange} />
        </div>
        <div>
          <label>Age:</label>
          <input type="number" name="age" value={updateFormData.age} onChange={handleUpdateChange} />
        </div>
        <div>
          <label>City:</label>
          <input type="text" name="city" value={updateFormData.city} onChange={handleUpdateChange} />
        </div>
        <div>
          <label>Number:</label>
          <input type="tel" name="number" value={updateFormData.number} onChange={handleUpdateChange} />
        </div>
        <div>
          <label>Report:</label>
          <textarea name="report" value={updateFormData.report} onChange={handleUpdateChange}></textarea>
        </div>
        <div>
          <button type="submit">Update</button>
        </div>
      </form>
    </div>
  );
}

export default ViewPage;
// ViewPage.jsx
// Import necessary dependencies

