import React from "react";
import { useNavigate } from "react-router-dom";
import RutaN1 from './assets/RutaN1.png';
import Ellipse1 from './assets/Ellipse1.png';
import RutaN2 from './assets/RutaN2.png';
import "./Login.css";

export const LoginPage = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    // Perform login logic here
    // After successful login, navigate to AdminHome page
    navigate("/AdminHome");
  };

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
                <input className="password" />
              </div>
              <div className="email-id-wrapper">
                <input className="email-id" />
              </div>
              <div 
                className="div-wrapper"
                onClick={handleLogin}
                style={{ cursor: "pointer" }}
              >
              Log In
              </div>
              <div className="frame-2">
                <div className="frame-3" />
                <div className="text-wrapper-3">Remember me</div>
              </div>
              <div className="frame-4">
                <div className="text-wrapper-4">Forgot password</div>
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