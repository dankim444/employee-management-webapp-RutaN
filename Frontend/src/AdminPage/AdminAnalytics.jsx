import React from "react";
import { useNavigate } from "react-router-dom";
import "./AdminAnalytics.css";
import {Switch} from "antd";
import UserDropdown from "../components/UserDropdown";

export const AdministratorAnalytics = () => {
  const navigate = useNavigate();
  
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

  return (
    <div className="administrator">
      <div className="div">
        <div className="overlap">

          {/* Dashboard */}
          <div className="rectangle" />
          <div className="rectangle-2" />
          <img
            className="logo-rutan"
            alt="Logo rutan"
            src="https://anima-uploads.s3.amazonaws.com/projects/6491ba3f0661cd45078662b8/releases/64920f1c6aef5e22ae256add/img/logo-rutan-4@2x.png"
          />
          <img
            className="mask-group"
            alt="Mask group"
            src="https://anima-uploads.s3.amazonaws.com/projects/6491ba3f0661cd45078662b8/releases/64920f1c6aef5e22ae256add/img/mask-group-5.png"
          />
          <div className="rectangle-3" />
          <div className="group">
            <img
              className="ruta-n"
              alt="Ruta n"
              src="https://anima-uploads.s3.amazonaws.com/projects/6491ba3f0661cd45078662b8/releases/64920f1c6aef5e22ae256add/img/rutan-4@2x.png"
            />
          </div>
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
          <div 
            className="employee-management"
            onClick={navigateToEmployeeManagement}
            style={{ cursor: "pointer" }}
          >
            EMPLOYEE MANAGEMENT
          </div>
          <div className="EmployeeMgmtLogo">
            <div className="rectangle-5" />
            <div className="rectangle-6" />
            <div className="rectangle-7" />
            <div className="rectangle-8" />
          </div>
          <div 
            className="my-team"
            onClick={navigateToMyTeam}
            style={{ cursor: "pointer" }}
          >
            PORTAFOLIO
          </div>
          <img
            className="team"
            alt="Team"
            src="https://anima-uploads.s3.amazonaws.com/projects/6491ba3f0661cd45078662b8/releases/64920f1c6aef5e22ae256add/img/team@2x.png"
          />
          <div className="rectangle-88"/>
          <div 
            className="analytics"
            onClick={navigateToAnalytics}
            style={{ cursor: "pointer" }}
          >
            ANALYTICS
          </div>
          <div className="AnalyticsLogo">
            <div className="overlap-2">
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

          {/* Language toggle button */}
          <div className="switch-off">
            <div className="text-wrapper">ES</div>
            <Switch/>
          </div>
          <div className="text-wrapper-2">ENG</div>

          {/* User dropdown button - shows Settings and Logout dropdown items */}
          <div style={{
              display: 'flex',
              flexDirection: 'row',
              marginTop: '10px',
              marginRight: '10px',
              justifyContent: 'flex-end'
            }}> 
            <UserDropdown/>
          </div>

          <div className="text-wrapper-3">Charts</div>
          <div style={{
                  position: 'relative',
                  width: '885px',
                  height: '570px',
                  top: '15%',
                  left: '27%',
                  backgroundColor: 'white',
                  boxShadow: '0px 4px 8px 0px rgba(0, 0, 0, 0.2)',}}>
              
          </div>

        </div>
      </div>
    </div>
  );
};
