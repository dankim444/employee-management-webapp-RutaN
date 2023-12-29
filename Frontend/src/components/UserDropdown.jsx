import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './UserDropdown.css';
import SettingsPopUp from "./SettingsPopUp";

const UserDropdown = () => {
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
          navigate("/");
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
        <div className="dropdown-container" style={{ position: 'relative' }} ref={dropdownRef}>
          <img
            className="users"
            alt="Users"
            src="https://anima-uploads.s3.amazonaws.com/projects/6491ba3f0661cd45078662b8/releases/64920f1c6aef5e22ae256add/img/users-1@2x.png"
            onClick={() => setIsOpen(!isOpen)}
            style={{
                position: 'relative',
                height: '30px', 
                width: '30px',
            }}      
          />
          {isOpen && (
            <ul className="dropdown-menu" style={{ position: 'absolute', right: '0', marginTop: '0' }}>
                <li className="dropdown-item" onClick={() => handleOptionClick("Settings")}>Settings</li>
                <li className="dropdown-item" onClick={() => handleOptionClick("Logout")}>Logout</li>
            </ul>
          )}
        {isSettingOpen && <SettingsPopUp />} 
        </div>
    );
  }

  export default UserDropdown;