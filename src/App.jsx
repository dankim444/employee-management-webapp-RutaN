import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LoginPage } from './Login';
import { AdministratorHome } from './AdminPage/AdminHome';
import { AdministratorEmployeeManagement } from './AdminPage/AdminEmployeeMgmt';
import { AdministratorPortafolio } from './AdminPage/AdminPortafolio';
import { AdministratorAnalytics } from './AdminPage/AdminAnalytics';
import 'antd/dist/antd.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/AdminHome" element={<AdministratorHome />} />
        <Route path="/AdminEmployeeMgmt" element={<AdministratorEmployeeManagement />} />
        <Route path="/AdminPortafolio" element={<AdministratorPortafolio />} />
        <Route path="/AdminAnalytics" element={<AdministratorAnalytics />} />
      </Routes>
    </Router>
  );
}

export default App;
