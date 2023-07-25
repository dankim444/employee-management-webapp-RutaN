import React, { useState } from "react";

export default function FilterButton() {
  const [activeButton, setActiveButton] = useState(1);

  const handleClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row'}}>
        {/* All Button */}
      <button
        onClick={() => handleClick(1)}
        style={{
          backgroundColor: activeButton === 1 ? "#2db2a0" : "transparent",
          border: '2px solid #d3d3d3',
          borderRadius: "50%",
          width: "25px",
          height: "25px",
          fontFamily: '"Poppins", "Helvetica"',
          marginRight: '75px'
        }}
      >
        <span style={{marginLeft: '25px'}}>All</span>
      </button>

      {/* Employees Button */}
      <button
        onClick={() => handleClick(2)}
        style={{
          backgroundColor: activeButton === 2 ? "#2db2a0" : "transparent",
          border: '2px solid #d3d3d3',
          borderRadius: "50%",
          width: "25px",
          height: "25px",
          fontFamily: '"Poppins", "Helvetica"',
          marginRight: '100px'
        }}
      >
        <span style={{marginLeft: '25px'}}>Employees</span>
      </button>

      {/* Contractors Button */}
      <button
        onClick={() => handleClick(3)}
        style={{
          backgroundColor: activeButton === 3 ? "#2db2a0" : "transparent",
          border: '2px solid #d3d3d3',
          borderRadius: "50%",
          width: "25px",
          height: "25px",
          fontFamily: '"Poppins", "Helvetica"',
          marginRight: '100px'
        }}
      >
        <span style={{marginLeft: '25px'}}>Contractors</span>
      </button>
    </div>
  );
}


  
  
  
  
  
  
  