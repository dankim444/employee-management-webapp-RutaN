import React from "react";
import { useNavigate } from "react-router-dom";
import "./AdminEmployeeMgmt.css";

export const Selection = () => {
  return (
    <div className="selection">
      <div className="group-wrapper">
        <div className="group">
          <img className="img" alt="Group" src="group-5-2.png" />
        </div>
      </div>
    </div>
  );
};

export const AdministratorEmployeeManagement = () => {
  const navigate = useNavigate();

  const navigateToEmployeeManagement = () => {
    navigate("/AdminEmployeeMgmt");
  };
  
  const navigateToHome = () => {
    navigate("/AdminHome");
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
          <div className="input">
            <div
              className="overlap-group"
              style={{
                backgroundImage:
                  "url(https://anima-uploads.s3.amazonaws.com/projects/6491ba3f0661cd45078662b8/releases/64920f1c6aef5e22ae256add/img/rectangle-copy-7-3@2x.png)",
              }}
            >
              <div className="input-text-en-fondo">Buscar</div>
            </div>
          </div>
          <div className="group">
            <div className="text-wrapper">Filter</div>
            <div className="overlap-group-wrapper">
              <div className="overlap-group-2">
                <div className="rectangle" />
                <div className="text-wrapper-2">Select</div>
                <img
                  className="vector"
                  alt="Vector"
                  src="https://anima-uploads.s3.amazonaws.com/projects/6491ba3f0661cd45078662b8/releases/6491d47caa096e7d87d02325/img/vector-8@2x.png"
                />
              </div>
            </div>
          </div>
          <div className="table-footer">
            <div className="paginador">
              <div
                className="div-wrapper"
                style={{
                  backgroundImage:
                    "url(https://anima-uploads.s3.amazonaws.com/projects/6491ba3f0661cd45078662b8/releases/64920f1c6aef5e22ae256add/img/oval@2x.png)",
                }}
              >
                <div className="text-wrapper-3">2</div>
              </div>
              <div className="text-wrapper-4">1</div>
              <div className="text-wrapper-5">3</div>
              <div className="text-wrapper-6">4</div>
              <div className="text-wrapper-7">5</div>
              <img
                className="img"
                alt="Group"
                src="https://anima-uploads.s3.amazonaws.com/projects/6491ba3f0661cd45078662b8/releases/64920f1c6aef5e22ae256add/img/group-136@2x.png"
              />
              <img
                className="group-2"
                alt="Group"
                src="https://anima-uploads.s3.amazonaws.com/projects/6491ba3f0661cd45078662b8/releases/64920f1c6aef5e22ae256add/img/group-137@2x.png"
              />
            </div>
          </div>
          <div className="text-wrapper-8">All</div>
          <img
            className="ellipse"
            alt="Ellipse"
            src="https://anima-uploads.s3.amazonaws.com/projects/6491ba3f0661cd45078662b8/releases/64920f1c6aef5e22ae256add/img/ellipse-9-2@2x.png"
          />
          <div className="radiobtn">
            <div className="text-wrapper-9">Employees</div>
            <img
              className="ellipse-2"
              alt="Ellipse"
              src="https://anima-uploads.s3.amazonaws.com/projects/6491ba3f0661cd45078662b8/releases/64920f1c6aef5e22ae256add/img/ellipse-9-3@2x.png"
            />
          </div>
          <div className="radiobtn-2">
            <div className="text-wrapper-10">Contractors</div>
            <img
              className="ellipse-3"
              alt="Ellipse"
              src="https://anima-uploads.s3.amazonaws.com/projects/6491ba3f0661cd45078662b8/releases/64920f1c6aef5e22ae256add/img/ellipse-10-1@2x.png"
            />
          </div>
          <div className="group-3">
            <div className="text-wrapper-11">Add Users</div>
            <div className="vector-wrapper">
              <img
                className="vector-2"
                alt="Vector"
                src="https://anima-uploads.s3.amazonaws.com/projects/6491ba3f0661cd45078662b8/releases/64920f1c6aef5e22ae256add/img/vector-5@2x.png"
              />
            </div>
          </div>
          <div className="group-wrapper">
            <div className="group-4">
              <div
                className="img-wrapper"
                style={{
                  backgroundImage:
                    "url(https://anima-uploads.s3.amazonaws.com/projects/6491ba3f0661cd45078662b8/releases/64920f1c6aef5e22ae256add/img/employee-info-display--admin.png)",
                }}
              >
                <img
                  className="group-5"
                  alt="Group"
                  src="https://anima-uploads.s3.amazonaws.com/projects/6491ba3f0661cd45078662b8/releases/64920f1c6aef5e22ae256add/img/group-219@2x.png"
                />
              </div>
            </div>
          </div>
          <div className="overlap-2">
            <div className="text-wrapper-12">Export</div>
          </div>
        </div>
        <div className="overlap-3">
          <img
            className="logo-rutan"
            alt="Logo rutan"
            src="https://anima-uploads.s3.amazonaws.com/projects/6491ba3f0661cd45078662b8/releases/64920f1c6aef5e22ae256add/img/logo-rutan-6@2x.png"
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
              src="https://anima-uploads.s3.amazonaws.com/projects/6491ba3f0661cd45078662b8/releases/64920f1c6aef5e22ae256add/img/rutan@2x.png"
            />
          </div>
          <div className="rectangle-2" />
          <div className="group-6">
            <img
              className="ruta-n-2"
              alt="Ruta n"
              src="https://anima-uploads.s3.amazonaws.com/projects/6491ba3f0661cd45078662b8/releases/64920f1c6aef5e22ae256add/img/rutan@2x.png"
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
            <div className="overlap-4">
              <img
                className="vector-3"
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
        <div className="overlap-5">
          <div className="switch-off">
            <div className="text-wrapper-13">ES</div>
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
          <div className="text-wrapper-14">ENG</div>
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
      </div>
    </div>
  );
};