import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AdminEmployeeMgmt.css";
import FilterButton from'../components/FilterButton';
import {Switch} from "antd";
import UserDropdown from "../components/UserDropdown";
import FilterDropdown from "../components/FilterDropdown";
import Table from '../components/Table';
import Searchbar from "../components/Searchbar";
import { getAllEmployees } from '../api';

// const data = [
//   { NOMBRES: 'John', APELLIDOS: 'KIM', IDENTIFICACIÓN: '1234567', FECHA_INGRESO: '1/1/11', EMAIL: 'john@gmail.com', GENERO: 'M', FECHA_DE_NACIMIENTO: '1/1/11'},
//   { NOMBRES: 'Jane', APELLIDOS: 'KIM', IDENTIFICACIÓN: '1234567', FECHA_INGRESO: '1/1/11', EMAIL: 'jane@gmail.com', GENERO: 'M', FECHA_DE_NACIMIENTO: '1/1/11'},
//   { NOMBRES: 'Jane', APELLIDOS: 'KIM', IDENTIFICACIÓN: '1234567', FECHA_INGRESO: '1/1/11', EMAIL: 'jane@gmail.com', GENERO: 'M', FECHA_DE_NACIMIENTO: '1/1/11'},
//   { NOMBRES: 'Jane', APELLIDOS: 'KIM', IDENTIFICACIÓN: '1234567', FECHA_INGRESO: '1/1/11', EMAIL: 'jane@gmail.com', GENERO: 'M', FECHA_DE_NACIMIENTO: '1/1/11'},
//   { NOMBRES: 'Jane', APELLIDOS: 'KIM', IDENTIFICACIÓN: '1234567', FECHA_INGRESO: '1/1/11', EMAIL: 'jane@gmail.com', GENERO: 'M', FECHA_DE_NACIMIENTO: '1/1/11'},
//   { NOMBRES: 'John', APELLIDOS: 'KIM', IDENTIFICACIÓN: '1234567', FECHA_INGRESO: '1/1/11', EMAIL: 'john@gmail.com', GENERO: 'M', FECHA_DE_NACIMIENTO: '1/1/11'},
//   { NOMBRES: 'Jane', APELLIDOS: 'KIM', IDENTIFICACIÓN: '1234567', FECHA_INGRESO: '1/1/11', EMAIL: 'jane@gmail.com', GENERO: 'M', FECHA_DE_NACIMIENTO: '1/1/11'},
//   { NOMBRES: 'Jane', APELLIDOS: 'KIM', IDENTIFICACIÓN: '1234567', FECHA_INGRESO: '1/1/11', EMAIL: 'jane@gmail.com', GENERO: 'M', FECHA_DE_NACIMIENTO: '1/1/11'},
//   { NOMBRES: 'Jane', APELLIDOS: 'KIM', IDENTIFICACIÓN: '1234567', FECHA_INGRESO: '1/1/11', EMAIL: 'jane@gmail.com', GENERO: 'M', FECHA_DE_NACIMIENTO: '1/1/11'},
//   { NOMBRES: 'Jane', APELLIDOS: 'KIM', IDENTIFICACIÓN: '1234567', FECHA_INGRESO: '1/1/11', EMAIL: 'jane@gmail.com', GENERO: 'M', FECHA_DE_NACIMIENTO: '1/1/11'},
//   { NOMBRES: 'John', APELLIDOS: 'KIM', IDENTIFICACIÓN: '1234567', FECHA_INGRESO: '1/1/11', EMAIL: 'john@gmail.com', GENERO: 'M', FECHA_DE_NACIMIENTO: '1/1/11'},
//   { NOMBRES: 'Jane', APELLIDOS: 'KIM', IDENTIFICACIÓN: '1234567', FECHA_INGRESO: '1/1/11', EMAIL: 'jane@gmail.com', GENERO: 'M', FECHA_DE_NACIMIENTO: '1/1/11'},
//   { NOMBRES: 'Jane', APELLIDOS: 'KIM', IDENTIFICACIÓN: '1234567', FECHA_INGRESO: '1/1/11', EMAIL: 'jane@gmail.com', GENERO: 'M', FECHA_DE_NACIMIENTO: '1/1/11'},
//   { NOMBRES: 'Jane', APELLIDOS: 'KIM', IDENTIFICACIÓN: '1234567', FECHA_INGRESO: '1/1/11', EMAIL: 'jane@gmail.com', GENERO: 'M', FECHA_DE_NACIMIENTO: '1/1/11'},
//   { NOMBRES: 'Jane', APELLIDOS: 'KIM', IDENTIFICACIÓN: '1234567', FECHA_INGRESO: '1/1/11', EMAIL: 'jane@gmail.com', GENERO: 'M', FECHA_DE_NACIMIENTO: '1/1/11'},
// ];

export const AdministratorEmployeeManagement = () => {
  const navigate = useNavigate();
  const [employeesData, setEmployeesData] = useState([]);
  const [filterOption, setFilterOption] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllEmployees(); // read in all employees
        console.log('Data fetched from API:', data); // Check what is returned here
        setEmployeesData(data);
      } catch (error) {
        console.error('Failed to fetch employees:', error);
      }
    };
    fetchData();
  }, []);

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
    <div className="administrator-mgmt">
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
          <div className="rectangle-88"/>
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
          
          {/* Search bar */}
          <div className="input">
            <div className="input-text-en-fondo">
              <Searchbar/>
            </div>
          </div>
          
          {/* Filter buttons for filtering All, Employees, Contractors */}
          <div className="group-4">
            <FilterButton/>
          </div>

          {/* Filter Dropdown */}
          <div className="text-wrapper-13">Filter</div>
          <div><FilterDropdown setFilterOption={setFilterOption}/></div>
          
          {/* Add user button */}
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

          {/* Export button */}
          <div className="rectangle-9" />
          <div className="text-wrapper-12">Export</div>
          
          {/* Employee data table */}
          <div className="group-wrapper">
            {/* <Table data={data} /> */}
            {/* {employeesData && <Table data={employeesData} />} */}
            {employeesData && employeesData.length > 0 && <Table data={employeesData} filterOption={filterOption}/>}
          </div>

        </div>
      </div>
    </div>
  );
}