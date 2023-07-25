import React, { useState } from 'react';
import settings from '../assets/settings.png';
import personIcon from '../assets/personIcon.png';
import UpdateInfo1 from '../components/UpdateInfo1';

const EmployeeInfo = () => {
    const [isPopUpOpen, setPopUpOpen] = useState(false);

    const navigateToUpdateInfo = () => { 
        setPopUpOpen(true); 
      };
  
      const handleClosePopUp = () => { 
        setPopUpOpen(false); 
      };

    const rectangleStyle = {
        position: 'relative',
        width: '927px',
        height: '570px',
        top: '15%',
        left: '14%',
        backgroundColor: 'white',
        boxShadow: '0px 4px 8px 0px rgba(0, 0, 0, 0.2)',
        fontSize: '15', 
        marginBottom: '1px', 
        fontWeight: 'bold', 
        fontFamily: '"Poppins", "Helvetica"', 
        color: '#2db2a0'
      };
    
    return (
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
            <UpdateInfo1 
                isOpen={isPopUpOpen} 
                handleClose={handleClosePopUp} 
              />
              {isPopUpOpen && <div style={{
                position: 'fixed',
                top: '0',
                left: '0',
                width: '100vw',
                height: '100vh',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                zIndex: '999',
              }} />}
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
                        Name
                    </h1>
                </div>

                {/* Information */}
                <div style={{marginTop: '2%', marginLeft: '15%'}}>
                    <p>TIPO:</p>
                    <p>PORTAFOLIO:</p>
                    <p>IDENTIFICACION:</p>
                    <p>FECHA INGRESO:</p>
                    <p>EMAIL:</p>
                    <p>FECHA DE NACIMIENTO:</p>
                    <p>GENERO:</p>
                    <p>EPS:</p>
                    <p>AFP:</p>
                    <p>ROL:</p>
                    <p>CONTRATO:</p>
                    <p>ESTADO:</p>
                    <p>CATEGORIA:</p>
                    <p>CARGO:</p>
                </div>
            </div>
        </div>
    );
}

export default EmployeeInfo;