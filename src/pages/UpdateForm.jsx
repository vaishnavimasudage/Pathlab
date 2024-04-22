// UpdateForm.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

function UpdateForm({ customerId, onUpdateSuccess, onCancel }) {
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
    // Fetch the customer details when the component mounts
    axios.get(`http://localhost:8080/getCustomer/${customerId}`)
      .then(response => {
        const customerDetails = response.data;
        setUpdateFormData({
          id: customerDetails.id,
          name: customerDetails.name,
          email: customerDetails.email,
          age: customerDetails.age,
          city: customerDetails.city,
          number: customerDetails.number,
          report: customerDetails.report
        });
      })
      .catch(error => {
        console.error('Error fetching customer details:', error);
      });
  }, [customerId]);

  const handleUpdateSubmit = (event) => {
    event.preventDefault();
    // Make the API call to update the customer
    axios.put(`http://localhost:8080/update/${updateFormData.id}`, updateFormData)
      .then(response => {
        const updatedCustomer = response.data;
        onUpdateSuccess(updatedCustomer);
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
    <div>
      <h2>Update Customer</h2>
      <form onSubmit={handleUpdateSubmit}>
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
          <button type="button" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default UpdateForm;
