import React, { useState, useEffect } from 'react';
import settings from '../assets/settings.png';
import personIcon from '../assets/personIcon.png';
import UpdateInfo1 from './UpdateInfo1';
import { getEmployeeById } from '../api';
import { updateEmployeeById } from '../api'

const HomeInfo = (id) => { // pass id as a prop to HomeInfo
    // State to hold fetched data
    const [userData, setUserData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch data on component mount
    useEffect(() => {
        getEmployeeById(id) 
            .then(data => {
                setUserData(data);
                setIsLoading(false);
            })
            .catch(err => {
                console.error(err);
                setError(err.message);
                setIsLoading(false);
            });
    }, [id]);

    // handle updates to user information 
    const handleUpdate = (updatedData) => {
        // Call the API to update the user information with the new data
        updateEmployeeById(id, updatedData)
          .then(response => {
            // If the update is successful, update the state with the new data
            setUserData(updatedData);
          })
          .catch(error => {
            console.error('Failed to update user:', error);
          });
      };

    const [isPopUpOpen, setPopUpOpen] = useState(false);

    const navigateToUpdateInfo = () => { 
        setPopUpOpen(true);   
    };
  
    const handleClosePopUp = () => { 
        setPopUpOpen(false); 
    };

    const rectangleStyle = {
        position: 'relative',
        width: '885px',
        height: '570px',
        top: '15%',
        left: '27%',
        backgroundColor: 'white',
        boxShadow: '0px 4px 8px 0px rgba(0, 0, 0, 0.2)',
        fontSize: '15', 
        marginBottom: '1px', 
        fontWeight: 'bold', 
        fontFamily: '"Poppins", "Helvetica"', 
        color: '#2db2a0'
    };
    
    return (
        <>
            <div style={rectangleStyle}>
                {/* Settings button */}
                <img
                    src={settings}
                    alt='settings button'
                    onClick={navigateToUpdateInfo}
                    style={{
                        position: 'absolute',
                        top: '3%',
                        right: '3%'
                    }}
                />
                {/* Render Undate Info pop up to info after settings icon is clicked */}
                <div style={{ display: 'flex', flexDirection: 'row'}}>
                    
                    {/* Name and icon */}
                    <div style={{ 
                            display: 'flex', 
                            flexDirection: 'column', 
                            marginTop: '10%', 
                            marginLeft: '10%', 
                            justifyContent: 'center',
                            alignItems: 'center'}}>
                        <img 
                            src={personIcon} 
                            style={{
                                width: '173px', 
                                height: '172px'
                            }}/>
                        <h1 style={{
                                fontSize: '2rem', 
                                fontWeight: '500',
                                color: '#2db2a0', 
                            }}>
                            {userData.name} 
                            {/* replace name with actual key from data */}
                        </h1>
                    </div>

                    {/* Information */}
                    <div style={{marginTop: '2%', marginLeft: '15%'}}>
                        <p>TIPO: {userData.tipo}</p>
                        <p>PORTAFOLIO: {userData.portafolio}</p>
                        <p>IDENTIFICACION: {userData.identificacion}</p>
                        <p>FECHA INGRESO: {userData.ingreso}</p>
                        <p>EMAIL: {userData.email}</p>
                        <p>FECHA DE NACIMIENTO: {userData.nacimiento}</p>
                        <p>GENERO: {userData.genero}</p>
                        <p>EPS: {userData.eps}</p>
                        <p>AFP: {userData.afp}</p>
                        <p>ROL: {userData.rol}</p>
                        <p>CONTRATO: {userData.contrato}</p>
                        <p>ESTADO: {userData.estado}</p>
                        <p>CATEGORIA: {userData.categoria}</p>
                        <p>CARGO: {userData.cargo}</p>
                    </div>
                </div>
            </div>
            {isPopUpOpen && 
                <div style={{
                    position: 'relative',
                    zIndex: '999',
                }}>
                    <UpdateInfo1 isOpen={isPopUpOpen} handleClose={handleClosePopUp} handleUpdate={handleUpdate}/>
                </div>
            }
            {isPopUpOpen && <div style={{
                position: 'fixed',
                top: '0',
                left: '0',
                width: '100vw',
                height: '100vh',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                zIndex: '998',
              }} />}
        </>
    );
}

export default HomeInfo;