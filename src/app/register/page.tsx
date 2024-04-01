"use client";

import { useState } from 'react';
import axios from 'axios';
// import {axios }  from 'axios';

function PatientForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    email: '',
    phoneNumber: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    await axios.post('http://localhost:3002/api/submitform', formData);
      console.log('Form data sent successfully');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-1200">First Name:</label>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange}
          className="mt-1 p-2 block w-half border rounded-md focus:outline-none focus:border-blue-500 text-black" />
      </div>
      <div>
        <label className="block text-gray-1200">Last Name:</label>
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange}
          className="m-1 p-2 block w-half border rounded-md focus:outline-none focus:border-blue-500 text-black" />
      </div>
      <div>
        <label className="block text-gray-1200">Age:</label>
        <input type="number" name="age" value={formData.age} onChange={handleChange}
          className="m-1 p-2 block w-half border rounded-md focus:outline-none focus:border-blue-500 text-black" />
      </div>
      <div>
        <label className="block text-gray-1200">Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange}
          className="m-1 p-2 block w-half border rounded-md focus:outline-none focus:border-blue-500 text-black" />
      </div>
      <div>
        <label className="block text-gray-1200">Phone Number:</label>
        <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange}
          className="m-1 p-2 block w-half border rounded-md focus:outline-none focus:border-blue-500 text-black" />
      </div>
      <button type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
    </form>
  );
}

export default PatientForm;
