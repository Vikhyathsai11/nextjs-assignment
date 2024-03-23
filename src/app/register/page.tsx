"use client";
import { useState } from 'react';

const Register = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    // Add more fields as needed
  });

  // State to manage form validation errors
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    age: '',
    // Add more fields as needed
  });

  // Function to handle form input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Perform validation
    const validationErrors: any = {};
    if (!formData.firstName) {
      validationErrors.firstName = 'First name is required';
    }
    if (!formData.lastName) {
      validationErrors.lastName = 'Last name is required';
    }
    if (!formData.age) {
      validationErrors.age = 'Age is required';
    }


    // if (Object.keys(validationErrors).length > 0) {
    //   setErrors(validationErrors);
    //   return;
    // }

    console.log(formData);
  };

  return (
    <div>
      <h1>Register Patient</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} />
          {errors.firstName && <span className="text-red-500">{errors.firstName}</span>}
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} />
          {errors.lastName && <span className="text-red-500">{errors.lastName}</span>}
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input type="text" id="age" name="age" value={formData.age} onChange={handleInputChange} />
          {errors.age && <span className="text-red-500">{errors.age}</span>}
        </div>
        {/* Add more fields as needed */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;
