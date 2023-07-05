import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminPortafolio.css";
import IndividualInfo from '../components/IndividualInfo';
import FilterButton from'../components/FilterButton';

export const AdministratorPortafolio = () => {
  const navigate = useNavigate();
  const [isPopup1Open, setPopup1Open] = useState(false);
  const [isPopup2Open, setPopup2Open] = useState(false);

  const handleOpenPopup1 = () => {
      setPopup1Open(true);
  };

  const handleClosePopup1 = () => {
      setPopup1Open(false);
  };

  const handleOpenPopup2 = () => {
      setPopup1Open(false);  // Close popup1
      setPopup2Open(true);  // Open popup2
  };

  const handleClosePopup2 = () => {
      setPopup2Open(false);  // Close popup2
      setPopup1Open(true);  // Reopen popup1
  };

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
    <div className="administrator-my">
      <div className="div">
        <div className="overlap">
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
          <div className="switch-off">
            <div className="text-wrapper">ES</div>
            <div
              className="overlap-group"
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
          <div className="text-wrapper-2">ENG</div>
          <div className="group">
            <img
              className="ruta-n"
              alt="Ruta n"
              src="https://anima-uploads.s3.amazonaws.com/projects/6491ba3f0661cd45078662b8/releases/64920f1c6aef5e22ae256add/img/rutan-4@2x.png"
            />
          </div>
          <div className="rectangle-4" />
          <div className="ruta-n-wrapper">
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
            <div className="rectangle-5" />
            <div className="rectangle-6" />
            <div className="rectangle-7" />
            <div className="rectangle-8" />
          </div>
          <div className="toolkit">
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
          <div 
            className="analytics"
            onClick={navigateToAnalytics}
            style={{ cursor: "pointer" }}
          >
            ANALYTICS
          </div>
          <img
            className="users"
            alt="Users"
            src="https://anima-uploads.s3.amazonaws.com/projects/6491ba3f0661cd45078662b8/releases/64920f1c6aef5e22ae256add/img/users-1@2x.png"
          />
          <div className="input">
            <div className="input-text-en-fondo">
              <input 
                className="Buscar" 
                placeholder="Buscar" 
                style={{ 
                  marginTop: '-20px',
                  marginLeft: '-20px',
                  width: '320px',   
                  height: '50px',       
                  fontSize: '1rem', 
                }} 
              />
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
                className="group-2"
                alt="Group"
                src="https://anima-uploads.s3.amazonaws.com/projects/6491ba3f0661cd45078662b8/releases/64920f1c6aef5e22ae256add/img/group-136@2x.png"
              />
              <img
                className="group-3"
                alt="Group"
                src="https://anima-uploads.s3.amazonaws.com/projects/6491ba3f0661cd45078662b8/releases/64920f1c6aef5e22ae256add/img/group-137@2x.png"
              />
            </div>
          </div>
          <div className="group-4">
            <FilterButton/>
          </div>
          <div className="group-5">
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
            <div className="group-6">
              <div className="overlap-4">
                <div className="card-wrapper">
                  <div className="card" onClick={handleOpenPopup1}/>
                </div>
                <div className="img-wrapper">
                  <img
                    className="group-7"
                    onClick={handleOpenPopup1}
                    alt="Group"
                    src="https://anima-uploads.s3.amazonaws.com/projects/6491ba3f0661cd45078662b8/releases/64920f1c6aef5e22ae256add/img/group-5-7@2x.png"
                  />
                </div>
              </div>
              <div className="overlap-5" onClick={handleOpenPopup1}>
                <div className="group-8">
                  <img
                    className="group-9"
                    onClick={handleOpenPopup1}
                    alt="Group"
                    src="https://anima-uploads.s3.amazonaws.com/projects/6491ba3f0661cd45078662b8/releases/64920f1c6aef5e22ae256add/img/group-5-7@2x.png"
                  />
                </div>
              </div>
              <div className="overlap-6" onClick={handleOpenPopup1}>
                <div className="group-10">
                  <img
                    className="group-11"
                    onClick={handleOpenPopup1}
                    alt="Group"
                    src="https://anima-uploads.s3.amazonaws.com/projects/6491ba3f0661cd45078662b8/releases/64920f1c6aef5e22ae256add/img/group-5-7@2x.png"
                  />
                </div>
              </div>
              <div className="overlap-7" onClick={handleOpenPopup1}>
                <div className="group-12">
                  <img
                    className="group-13"
                    onClick={handleOpenPopup1}
                    alt="Group"
                    src="https://anima-uploads.s3.amazonaws.com/projects/6491ba3f0661cd45078662b8/releases/64920f1c6aef5e22ae256add/img/group-5-7@2x.png"
                  />
                </div>
              </div>
              <div className="overlap-8" onClick={handleOpenPopup1}>
                <div className="group-14">
                  <img
                    className="group-15"
                    onClick={handleOpenPopup1}
                    alt="Group"
                    src="https://anima-uploads.s3.amazonaws.com/projects/6491ba3f0661cd45078662b8/releases/64920f1c6aef5e22ae256add/img/group-5-7@2x.png"
                  />
                </div>
              </div>
              <div className="overlap-9" onClick={handleOpenPopup1}>
                <div className="group-16">
                  <img
                    className="group-17"
                    onClick={handleOpenPopup1}
                    alt="Group"
                    src="https://anima-uploads.s3.amazonaws.com/projects/6491ba3f0661cd45078662b8/releases/64920f1c6aef5e22ae256add/img/group-5-7@2x.png"
                  />
                </div>
              </div>
              <div className="overlap-10" onClick={handleOpenPopup1}>
                <div className="group-18">
                  <img
                    className="group-19"
                    onClick={handleOpenPopup1}
                    alt="Group"
                    src="https://anima-uploads.s3.amazonaws.com/projects/6491ba3f0661cd45078662b8/releases/64920f1c6aef5e22ae256add/img/group-5-7@2x.png"
                  />
                </div>
              </div>
              <div className="overlap-11" onClick={handleOpenPopup1}>
                <div className="group-20">
                  <img
                    className="group-21"
                    onClick={handleOpenPopup1}
                    alt="Group"
                    src="https://anima-uploads.s3.amazonaws.com/projects/6491ba3f0661cd45078662b8/releases/64920f1c6aef5e22ae256add/img/group-5-7@2x.png"
                  />
                </div>
              </div>
              <div className="overlap-12" onClick={handleOpenPopup1}>
                <div className="group-22">
                  <img
                    className="group-23"
                    onClick={handleOpenPopup1}
                    alt="Group"
                    src="https://anima-uploads.s3.amazonaws.com/projects/6491ba3f0661cd45078662b8/releases/64920f1c6aef5e22ae256add/img/group-5-7@2x.png"
                  />
                </div>
              </div>
              <div className="overlap-13" onClick={handleOpenPopup1}>
                <div className="group-24">
                  <img
                    className="group-25"
                    onClick={handleOpenPopup1}
                    alt="Group"
                    src="https://anima-uploads.s3.amazonaws.com/projects/6491ba3f0661cd45078662b8/releases/64920f1c6aef5e22ae256add/img/group-5-7@2x.png"
                  />
                </div>
              </div>
              <div className="overlap-14" onClick={handleOpenPopup1}>
                <div className="group-26">
                  <img
                    className="group-27"
                    onClick={handleOpenPopup1}
                    alt="Group"
                    src="https://anima-uploads.s3.amazonaws.com/projects/6491ba3f0661cd45078662b8/releases/64920f1c6aef5e22ae256add/img/group-5-7@2x.png"
                  />
                </div>
              </div>
              <div className="overlap-15" onClick={handleOpenPopup1}>
                <div className="group-28">
                  <img
                    className="group-29"
                    onClick={handleOpenPopup1}
                    alt="Group"
                    src="https://anima-uploads.s3.amazonaws.com/projects/6491ba3f0661cd45078662b8/releases/64920f1c6aef5e22ae256add/img/group-5-7@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="rectangle-9" />
          <div className="text-wrapper-12">Export</div>
        </div>
        <img
          className="rectangle-10"
          alt="Rectangle"
          src="https://anima-uploads.s3.amazonaws.com/projects/6491ba3f0661cd45078662b8/releases/6491bb81c2e7554253acb1c4/img/rectangle-6@2x.png"
        />
        <img
          className="ellipse-4"
          alt="Ellipse"
          src="https://anima-uploads.s3.amazonaws.com/projects/6491ba3f0661cd45078662b8/releases/6491bb81c2e7554253acb1c4/img/rectangle-6@2x.png"
        />
      </div>
      {/* Pop up here */}
      {isPopup1Open && <IndividualInfo 
        isOpen={isPopup1Open} 
        handleClose={handleClosePopup1} 
      />}
      {isPopup1Open && <div style={{
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        zIndex: '999',
      }} />}
    </div>
  );
};
