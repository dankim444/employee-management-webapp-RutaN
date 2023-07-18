import React from 'react';
import './ContractorHome.css';
import {Switch} from "antd";
import UserDropdown from "../components/UserDropdown";
import ContractorInfo from "../components/ContractorInfo";

export const ContractorHome = () => {

    return (
        <div className='contractor-home'>
            <div className='div'>
                <div className='overlap'>

                    {/* Screen elements */}
                    <div className="rectangle" />
                    <div className="rectangle-2" />

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
                    <ContractorInfo />
                    
                </div>
            </div>

        </div>
    );
}
