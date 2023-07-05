import React from "react";
import { useNavigate } from "react-router-dom";
import "./AdminAnalytics.css";

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
          <div className="overlap-group">
            <div className="text-wrapper">Charts</div>
            <div className="rectangle" />
          </div>
          <img
            className="group"
            alt="Group"
            src="https://anima-uploads.s3.amazonaws.com/projects/6491ba3f0661cd45078662b8/releases/64920f1c6aef5e22ae256add/img/group-220@2x.png"
          />
        </div>
        <div className="overlap-2">
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
          <div className="rectangle-2" />
          <div className="img-wrapper">
            <img
              className="img"
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
            <div className="rectangle-3" />
            <div className="rectangle-4" />
            <div className="rectangle-5" />
            <div className="rectangle-6" />
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
            <div className="text-wrapper-2">ES</div>
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
          <div className="text-wrapper-3">ENG</div>
          <img
            className="users"
            alt="Users"
            src="https://anima-uploads.s3.amazonaws.com/projects/6491ba3f0661cd45078662b8/releases/64920f1c6aef5e22ae256add/img/users-1@2x.png"
          />
        </div>
        <img
          className="rectangle-7"
          alt="Rectangle"
          src="https://anima-uploads.s3.amazonaws.com/projects/6491ba3f0661cd45078662b8/releases/6491bb81c2e7554253acb1c4/img/rectangle-6@2x.png"
        />
        <img
          className="ellipse"
          alt="Ellipse"
          src="https://anima-uploads.s3.amazonaws.com/projects/6491ba3f0661cd45078662b8/releases/6491bb81c2e7554253acb1c4/img/rectangle-6@2x.png"
        />
      </div>
    </div>
  );
};
