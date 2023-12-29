import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RutaN1 from './assets/RutaN1.png';
import Ellipse1 from './assets/Ellipse1.png';
import RutaN2 from './assets/RutaN2.png';
import "./Login.css";
import axios from "axios";
import { getEmployeeById } from "./api";

export const LoginPage = (id) => {
  const navigate = useNavigate();
  const [isActive, setActive] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const credentials = {
      email,
      password
    };
  
    axios
      .post("/api/login", credentials)
      .then((response) => {
        // navigate to the AdminHome page if login is successfull
        if (response.status === 200) {
          localStorage.setItem('token', response.data.token);
          navigate("/AdminHome");
        } else {
          console.log("Invalid login credentials"); 
        }
      })
      .catch((error) => {
        console.log("Error during login:", error);
      });
  };
  
  // const handleLogin = () => {
  //   getEmployeeById(id)
  //       .then((response) => {
  //           if (permittedRoles.includes(response.role)) {
  //               navigate("/AdminHome");
  //           } else {
  //               console.log("Forbidden"); 
  //           }
  //       })
  //       .catch((error) => {
  //           console.log("Error during login:", error);
  //       });
  //   };

  return (
    <div className="login-page">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <img
            className="ruta-n"
            alt="Ruta n"
            src={RutaN1}
          />
          <div className="group">
            <div className="div">
              <div className="frame">
                <h1 className="text-wrapper">Log In</h1>
              </div>
              <div className="password-wrapper">
                <input 
                  className="password" 
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="email-id-wrapper">
                <input 
                  className="email-id" 
                  placeholder="Email ID"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div 
                className="div-wrapper"
                onClick={handleLogin}
                style={{ cursor: "pointer" }}
              >
              Log In
              </div>
              <div className="frame-2">
                <button 
                  className={`frame-3 ${isActive ? 'active' : ''}`}
                  onClick={() => setActive(!isActive)}
                >
                </button>
                <div className="text-wrapper-3">Remember me</div>
              </div>
              <div className="frame-4">
                <button 
                  className="text-wrapper-4"
                  >
                    Forgot password
                </button>
              </div>
            </div>
          </div>
          <div className="ruta-n-wrapper">
          <img
              className="img"
              alt="Ellipse"
              src={Ellipse1}
            />
            <img
              className="img"
              alt="Ruta n"
              src={RutaN2}
            />
          </div>
        </div>
      </div>
    </div>
  );
};