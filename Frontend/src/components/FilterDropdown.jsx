import React, { useState, useRef, useEffect } from "react";
import './FilterDropdown.css';

export default function FilterDropdown({setFilterOption}) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
  
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
  
    useEffect(() => {
      document.addEventListener('click', handleClickOutside);
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }, []);
  
    const handleOptionClick = (option) => {
      switch(option) {
        case "portfolio":
          break;
        case "identification":
          break;
        case "lastName":
          break;
        case "firstName":
          break;
        case "joinDate":
          break;
        case "email":
          break;
        case "dob":
          break;
        case "supervisorName":
          break;
        case "gender":
          break;
        case "lawyer":
          break;
        case "committeeApprovalDate":
          break;
        case "actNo":
          break;
        case "contractNo":
          break;
        case "value":
          break;
        case "object":
          break;
        case "cdpNo":
          break;
        case "costCenter":
          break;
        case "terminationDate":
          break;
        case "rpc":
          break;
        case "arl":
          break;
        case "eps":
          break;
        case "afp":
          break;
        case "observations":
          break;
        case "type":
          break;
        default:
          break;
      }
      setFilterOption(option);
      setIsOpen(false);
    };
  
    return (
      <div className="dropdown-container" ref={dropdownRef} 
        style={{ 
          position: 'relative', 
          width: '160px', 
          marginLeft: '780px', 
          marginTop: '45px',
        }}
      >
        <div onClick={() => setIsOpen(!isOpen)}
          style={{
              position: 'relative',
              height: '50px',
              backgroundColor: 'white',
              fontSize: '1rem', 
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center', 
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.25)'
          }}
        >
          Select
        </div>
        {isOpen && (
          <ul className="dropdown-menu" style={{ 
              position: 'absolute', 
              top: '20px', 
              zIndex: '999',
              maxHeight: '215px',
              overflowY: 'auto'
            }}>
              <li className="dropdown-item" onClick={() => handleOptionClick("portfolio")}>portfolio</li>
              <li className="dropdown-item" onClick={() => handleOptionClick("identification")}>identification</li>
              <li className="dropdown-item" onClick={() => handleOptionClick("lastName")}>lastName</li>
              <li className="dropdown-item" onClick={() => handleOptionClick("firstName")}>firstName</li>
              <li className="dropdown-item" onClick={() => handleOptionClick("joinDate")}>joinDate</li>
              <li className="dropdown-item" onClick={() => handleOptionClick("email")}>email</li>
              <li className="dropdown-item" onClick={() => handleOptionClick("dob")}>dob</li>
              <li className="dropdown-item" onClick={() => handleOptionClick("supervisorName")}>supervisorName</li>
              <li className="dropdown-item" onClick={() => handleOptionClick("gender")}>gender</li>
              <li className="dropdown-item" onClick={() => handleOptionClick("lawyer")}>lawyer</li>
              <li className="dropdown-item" onClick={() => handleOptionClick("committeeApprovalDate")}>committeeApprovalDate</li>
              <li className="dropdown-item" onClick={() => handleOptionClick("actNo")}>actNo</li>
              <li className="dropdown-item" onClick={() => handleOptionClick("contractNo")}>contractNo</li>
              <li className="dropdown-item" onClick={() => handleOptionClick("value")}>value</li>
              <li className="dropdown-item" onClick={() => handleOptionClick("object")}>object</li>
              <li className="dropdown-item" onClick={() => handleOptionClick("cdpNo")}>cdpNo</li>
              <li className="dropdown-item" onClick={() => handleOptionClick("costCenter")}>costCenter</li>
              <li className="dropdown-item" onClick={() => handleOptionClick("terminationDate")}>terminationDate</li>
              <li className="dropdown-item" onClick={() => handleOptionClick("rpc")}>rpc</li>
              <li className="dropdown-item" onClick={() => handleOptionClick("arl")}>arl</li>
              <li className="dropdown-item" onClick={() => handleOptionClick("eps")}>eps</li>
              <li className="dropdown-item" onClick={() => handleOptionClick("afp")}>afp</li>
              <li className="dropdown-item" onClick={() => handleOptionClick("observations")}>observations</li>
              <li className="dropdown-item" onClick={() => handleOptionClick("type")}>type</li>
          </ul>
        )}
      </div>
    );
    
  }