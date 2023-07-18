import React, { useState, useRef, useEffect } from "react";
import ChangePasswordPopup from './SettingsPopUp';
import { useNavigate } from "react-router-dom";
import './FilterDropdown.css';

export default function FilterDropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSettingOpen, setIsSettingOpen] = useState(false);
    const dropdownRef = useRef(null);
    const navigate = useNavigate();
  
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
        case "Settings":
          setIsSettingOpen(true);
          break;
        case "Logout":
          navigate("/Login");
          break;
        default:
          break;
      }
      setIsOpen(false);
    };
  
    const closeSetting = () => {
      setIsSettingOpen(false);
    }
  
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
          <ul className="dropdown-menu" style={{ position: 'absolute', top: '20px', zIndex: '999'}}>
              <li className="dropdown-item" onClick={() => handleOptionClick("Option1")}>NOMBRES</li>
              <li className="dropdown-item" onClick={() => handleOptionClick("Option2")}>APELLIDOS</li>
              <li className="dropdown-item" onClick={() => handleOptionClick("Option3")}>IDENTIFICACIÓN</li>
              <li className="dropdown-item" onClick={() => handleOptionClick("Option3")}>FECHA INGRESO</li>
              <li className="dropdown-item" onClick={() => handleOptionClick("Option3")}>EMAIL</li>
              <li className="dropdown-item" onClick={() => handleOptionClick("Option3")}>GENERO</li>
              <li className="dropdown-item" onClick={() => handleOptionClick("Option3")}>FECHA DE NACIMIENTO</li>
          </ul>
        )}
        {/* opens setting after clicking on settings dropdown item */}
        {isSettingOpen && <ChangePasswordPopup handleClose={closeSetting}/>} 
      </div>
    );
    
  }