import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LoginPage } from './Login';
import { AdministratorHome } from './AdminPage/AdminHome';
import { AdministratorEmployeeManagement } from './AdminPage/AdminEmployeeMgmt';
import { AdministratorPortafolio } from './AdminPage/AdminPortafolio';
import { AdministratorAnalytics } from './AdminPage/AdminAnalytics';
import { ManagerHome } from './ManagerPage/ManagerHome';
import { ManagerPortafolio } from './ManagerPage/ManagerPortafolio';
import { ManagerAnalytics } from './ManagerPage/ManagerAnalytics';
import { EmployeeHome } from './EmployeePage/EmployeeHome';
import { ContractorHome } from './ContractorPage/ContractorHome';
import Modal from 'react-modal';

Modal.setAppElement('#root') // assuming your app is within a div with id 'root'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/AdminHome" element={<AdministratorHome />} />
        <Route path="/AdminEmployeeMgmt" element={<AdministratorEmployeeManagement />} />
        <Route path="/AdminPortafolio" element={<AdministratorPortafolio />} />
        <Route path="/AdminAnalytics" element={<AdministratorAnalytics />} />
        <Route path="/ManagerHome" element={<ManagerHome />} />
        <Route path="/ManagerPortafolio" element={<ManagerPortafolio />} />
        <Route path="/ManagerAnalytics" element={<ManagerAnalytics />} />
        <Route path="/EmployeeHome" element={<EmployeeHome />} />
        <Route path="/ContractorHome" element={<ContractorHome />} />
      </Routes>
    </Router>
  );
}

export default App;
