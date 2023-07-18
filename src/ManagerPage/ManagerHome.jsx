import React from 'react';
import './ManagerHome.css';
import { useNavigate } from "react-router-dom";
import {Switch} from "antd";
import UserDropdown from "../components/UserDropdown";
import HomeInfo from '../components/HomeInfo';

export const ManagerHome = () => {
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate("/ManagerHome");
    };

    const navigateToMyTeam = () => {
        navigate("/ManagerPortafolio");
    };

    const navigateToAnalytics = () => {
        navigate("/ManagerAnalytics");
    };

    return (
        <div className='manager-home'>
            <div className='div'>
                <div className='overlap'>

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
                    <div className="rectangle-88"></div>
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

                    {/* My Information tab */}
                    <div className="text-wrapper-3">My Information</div>
                    <HomeInfo/>
                    
                </div>
            </div>

        </div>
    );
}
