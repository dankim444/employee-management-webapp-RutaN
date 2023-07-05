import React, { useState, useRef, useEffect } from "react";
import "./AdminHome.css";
import { useNavigate } from "react-router-dom";
import ChangePasswordPopup from '../components/ChangePasswordPopup';
import UpdateInfo1 from "../components/UpdateInfo1";
import {Switch} from "antd";

function UserDropdown() {
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
      <div className="dropdown-container" ref={dropdownRef}>
        <img
          className="users"
          alt="Users"
          src="https://anima-uploads.s3.amazonaws.com/projects/6491ba3f0661cd45078662b8/releases/64920f1c6aef5e22ae256add/img/users-1@2x.png"
          onClick={() => setIsOpen(!isOpen)}
        />
        {isOpen && (
          <ul className="dropdown-menu" >
            <li className="dropdown-item" onClick={() => handleOptionClick("Settings")}>Settings</li>
            <li className="dropdown-item" onClick={() => handleOptionClick("Logout")}>Logout</li>
          </ul>
        )}
      {isSettingOpen && <ChangePasswordPopup handleClose={closeSetting}/>}
      </div>
  );
}

export const AdministratorHome = () => {
    const navigate = useNavigate();
    const [isPopUpOpen, setPopUpOpen] = useState(false);

    const navigateToHome = () => {
      navigate("/AdminHome");
    };
  
    const navigateToEmployeeManagement = () => {
      navigate("/AdminEmployeeMgmt");
    };

    const navigateToMyTeam = () => {
      navigate("/AdminPortafolio");
    };

    const navigateToAnalytics = () => {
      navigate("/AdminAnalytics");
    };

    const navigateToUpdateInfo = () => {
      setPopUpOpen(true);
    };

    const handleClosePopUp = () => {
      setPopUpOpen(false);
    };


  return (
    <div className="administrator-home">
      <div className="div">
        <div className="overlap">
          <div
            className="settings"
            style={{
              backgroundImage: "url('https://anima-uploads.s3.amazonaws.com/projects/6491ba3f0661cd45078662b8/releases/64920f1c6aef5e22ae256add/img/subtract@2x.png')",
            }}
          >
            <div className="ellipse" />
          </div>
          <div className="text-wrapper">My Information</div>
          <div className="group">
            <div className="overlap-group">
              <div className="flex-container">
                <div className="text">
                  <span className="span">Tipo: </span>
                  <span className="text-wrapper-2">
                    Administración
                    <br />
                  </span>
                </div>
                <div className="span-wrapper">
                  <span className="text-wrapper-3">
                    Portafolio:
                    <br />
                  </span>
                </div>
                <div className="text-2">
                  <span className="text-wrapper-4">
                    Identification:
                    <br />
                  </span>
                </div>
                <div className="text-3">
                  <span className="text-wrapper-5">
                    Fecha Ingreso: <br />
                  </span>
                </div>
                <div className="text-4">
                  <span className="text-wrapper-6">
                    Email: <br />
                  </span>
                </div>
                <div className="text-5">
                  <span className="text-wrapper-7">
                    Fecha De Nacimiento:
                    <br />
                  </span>
                </div>
                <div className="text-6">
                  <span className="text-wrapper-8">
                    Genero:
                    <br />
                  </span>
                </div>
                <div className="text-7">
                  <span className="text-wrapper-9">
                    EPS:
                    <br />
                  </span>
                </div>
                <div className="text-8">
                  <span className="text-wrapper-10">
                    AFP:
                    <br />
                  </span>
                </div>
                <div className="text-9">
                  <span className="text-wrapper-11">
                    ROL: <br />
                  </span>
                </div>
                <div className="text-10">
                  <span className="text-wrapper-12">
                    CONTRATO: <br />
                  </span>
                </div>
                <div className="text-11">
                  <span className="text-wrapper-13">
                    ESTADO:
                    <br />
                  </span>
                </div>
                <div className="text-12">
                  <span className="text-wrapper-14">
                    CATEGORIA:
                    <br />
                  </span>
                </div>
                <div className="text-13">
                  <span className="text-wrapper-15">
                    CARGO: <br />
                  </span>
                </div>
                <div className="text-14">
                  <span className="span-2" />
                </div>
              </div>
              <h1 className="h-1">Name</h1>
              <div className="group-wrapper">
                <img
                  className="img"
                  alt="group"
                  src= "https://anima-uploads.s3.amazonaws.com/projects/6491ba3f0661cd45078662b8/releases/64920f1c6aef5e22ae256add/img/group-5-2@2x.png"
                />
              </div>
              <div
                className="ellipse-wrapper"
                onClick={navigateToUpdateInfo}
                style={{
                  backgroundImage:
                    "url(https://anima-uploads.s3.amazonaws.com/projects/6491ba3f0661cd45078662b8/releases/64920f1c6aef5e22ae256add/img/subtract@2x.png)",
                }}
              >
                <div className="ellipse-2" />
              </div>
              <UpdateInfo1 
                isOpen={isPopUpOpen} 
                handleClose={handleClosePopUp} 
              />
              {isPopUpOpen && <div style={{
                position: 'fixed',
                top: '0',
                left: '0',
                width: '100vw',
                height: '100vh',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                zIndex: '999',
              }} />}
            </div>
          </div>
        </div>
        <div className="overlap-2">
          <img
            className="logo-rutan"
            alt="Logo rutan"
            src="https://anima-uploads.s3.amazonaws.com/projects/6491ba3f0661cd45078662b8/releases/64920f1c6aef5e22ae256add/img/logo-rutan-1@2x.png"
          />
          <img
            className="mask-group"
            alt="Mask group"
            src="https://anima-uploads.s3.amazonaws.com/projects/6491ba3f0661cd45078662b8/releases/64920f1c6aef5e22ae256add/img/mask-group.png"
          />
          <img
            className="mask-group-2"
            alt="Mask group"
            src="https://anima-uploads.s3.amazonaws.com/projects/6491ba3f0661cd45078662b8/releases/64920f1c6aef5e22ae256add/img/mask-group.png"
          />
          <div 
            className="home"
            onClick={navigateToHome}
            style={{ cursor: "pointer" }}
          >
            HOME
          </div>
          <img
            className="home-miruta"
            alt="Home miruta"
            src="https://anima-uploads.s3.amazonaws.com/projects/6491ba3f0661cd45078662b8/releases/64920f1c6aef5e22ae256add/img/home-miruta@2x.png"
          />
          <div className="ruta-n-wrapper">
            <img
              className="ruta-n"
              alt="Ruta n"
              src="https://anima-uploads.s3.amazonaws.com/projects/6491ba3f0661cd45078662b8/releases/64920f1c6aef5e22ae256add/img/rutan-4@2x.png"
            />
          </div>
          <div className="rectangle" />
          <div className="img-wrapper">
            <img
              className="ruta-n-2"
              alt="Ruta n"
              src="https://anima-uploads.s3.amazonaws.com/projects/6491ba3f0661cd45078662b8/releases/64920f1c6aef5e22ae256add/img/rutan-4@2x.png"
            />
          </div>
          <div 
            className="my-team"
            onClick={navigateToMyTeam}
            style={{ cursor: "pointer" }}
          > 
            PORTAFOLIO
          </div>
          <div
            className="employee-management"
            onClick={navigateToEmployeeManagement}
            style={{ cursor: "pointer" }}
          > 
            EMPLOYEE MANAGEMENT
          </div>
          <img
            className="team"
            alt="Team"
            src="https://anima-uploads.s3.amazonaws.com/projects/6491ba3f0661cd45078662b8/releases/64920f1c6aef5e22ae256add/img/team@2x.png"
          />
          <div className="dashboard">
            <div className="rectangle-2" />
            <div className="rectangle-3" />
            <div className="rectangle-4" />
            <div className="rectangle-5" />
          </div>
          <div className="toolkit">
            <div className="overlap-3">
              <img
                className="vector"
                alt="Vector"
                src="https://anima-uploads.s3.amazonaws.com/projects/6491ba3f0661cd45078662b8/releases/64920f1c6aef5e22ae256add/img/vector@2x.png"
              />
              <img
                className="subtract"
                alt="Subtract"
                src="https://anima-uploads.s3.amazonaws.com/projects/6491ba3f0661cd45078662b8/releases/64920f1c6aef5e22ae256add/img/subtract-2@2x.png"
              />
            </div>
          </div>
          <div
            className="analytics"
            onClick={navigateToAnalytics}
            style={{ cursor: "pointer" }}
          > 
            ANALYTICS
          </div>
        </div>
        <div className="overlap-4">
          <div className="switch-off">
            <div className="text-wrapper-16">ES</div>
            <div
              className="oval-copy-wrapper"
              style={{
                backgroundImage:
                  "url(https://anima-uploads.s3.amazonaws.com/projects/6491ba3f0661cd45078662b8/releases/64920f1c6aef5e22ae256add/img/rectangle-copy-3@2x.png)",
              }}
            >
              <img
                className="oval-copy"
                alt="Oval copy"
                src="https://anima-uploads.s3.amazonaws.com/projects/6491ba3f0661cd45078662b8/releases/64920f1c6aef5e22ae256add/img/oval-copy@2x.png"
              />
            </div>
          </div>
          <div className="text-wrapper-17">ENG</div>
          <UserDropdown />
        </div>
        <img
          className="rectangle-6"
          alt="Rectangle"
          src="https://anima-uploads.s3.amazonaws.com/projects/6491ba3f0661cd45078662b8/releases/6491bb81c2e7554253acb1c4/img/rectangle-6@2x.png"
        />
      </div>
    </div>
  );
};