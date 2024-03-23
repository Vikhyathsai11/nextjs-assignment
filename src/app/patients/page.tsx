// pages/patients.tsx

// import { useState } from 'react';
"use client";
import { useState } from "react";

const PatientsPage = () => {
  
  const [patients] = useState([
    { id: 1, name: 'xyz', age: 30, condition: 'Flu' },
    { id: 2, name: 'abc', age: 25, condition: 'Headache' },
    { id: 3, name: 'pqr', age: 40, condition: 'Fever' }
  ]);

  return (
    <div >
      <h1>Patients</h1><br />
      <div className="flex items-center">
        {patients.map(patient => (
          <div key={patient.id} >
            <h2>{patient.name}</h2>
            <p>Age: {patient.age}</p>
            <p>Condition: {patient.condition}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientsPage;
