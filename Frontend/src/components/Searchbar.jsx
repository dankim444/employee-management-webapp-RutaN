import React, { useState, useEffect } from "react";
import axios from 'axios';
import { getAllEmployees, getAllContractors } from "../api"; 

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  // api call for fetching all employees and all contractors by name
  useEffect(() => {
    if (searchTerm !== "") {
      Promise.all([getAllEmployees(), getAllContractors()])
        .then(([employees, contractors]) => {
          const allPeople = [...employees, ...contractors];
          const results = allPeople.filter(person =>
            person.name.toLowerCase().includes(searchTerm.toLowerCase())
          );
          setSearchResults(results);
        })
        .catch(error => console.error(error));
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search by employee name"
        value={searchTerm}
        onChange={handleChange}
        style={{ 
            marginTop: '-20px',
            marginLeft: '-20px',
            width: '320px',   
            height: '50px',       
            fontSize: '1rem', 
          }} 
      />
      {/* You would map over searchResults to render the results here */}
      {searchResults && searchResults.map(employee => (
        <div key={employee.id}>{employee.name}</div>
      ))}
    </div>
  );
}
