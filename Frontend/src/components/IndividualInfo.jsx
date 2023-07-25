import React, { useState } from "react";
import personIcon from '../assets/personIcon.png';
import X from '../assets/X.png';
import Modal from 'react-modal';
import settings from '../assets/settings.png';
import PortafolioInfo from "./PortafolioInfo";
import UpdateInfo2 from "./UpdateInfo2";

Modal.setAppElement('#root');

export default function PopUp1({handleClose}) {

    // const [showModalOne, setShowModalOne] = useState(false); 
    // const [showModalTwo, setShowModalTwo] = useState(false);

    const [showChildModal, setShowModalOne] = useState(false);

    const openChildModal = () => {
      setShowModalOne(true)
    }

    const closeChildModal = () => {
      setShowModalOne(false)
    }
  

    // const openModalOne = () => {
    //   setShowModalOne(true);
    // }

    // const closeModalOne = () => {
    //   setShowModalOne(false);
    // }

    // const openModalTwo = () => {
    //   setShowModalTwo(true);
    // }

    // const closeModalTwo = () => {
    //   setShowModalTwo(false);
    // }

    const modal1Style = {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '885px',
        height: '570px',
      },
      overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)'
      }
    };

    const modal2Style = {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '777px',
        height: '617px',
      },
      overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)'
      }
    };

    return (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#FFF',
          padding: '2%',
          zIndex: '1000',
          fontFamily: '"Poppins", "Helvetica"',
          color: '#2db2a0',
          width: '885px', 
          height: '570px', 
          overflowY: 'auto', 
          boxSizing: 'border-box',
        }}>
          {/* Settings button */}
          <img 
            src={settings} 
            alt='settings button' 
            onClick={openChildModal}
            style={{
              position: 'absolute', 
              top: '2%', 
              right: '7%', 
            }}
          />
          {/* The nested popup */}
          {showChildModal && <UpdateInfo2 isOpen={showChildModal} handleClose={closeChildModal} />}
          {/* Close button */}
          <img 
            src={X} 
            alt='X button' 
            onClick={handleClose}
            style={{
              position: 'absolute', 
              top: '3%', 
              right: '3%', 
            }}
          />
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', marginLeft: '10%'}}>
            {/* Flexbox for Name and image */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
              <img src={personIcon} alt='Profile' style={{ width: '150px', height: '150px' }}/>
              <h2 style={{
                  fontSize: '2rem', 
                  fontWeight: 'normal',
                  color: '#2db2a0', 
              }}>Name</h2>
            </div>
    
            {/* Flexbox for tags */}
            <div>
              <div style={{ marginLeft: '75%'}}> 
                <p style={{fontSize: '15', marginBottom: '1px', fontWeight: 'bold'}}>TYPE:</p>
                <p style={{fontSize: '15', marginBottom: '1px', fontWeight: 'bold'}}>PORTAFOLIO:</p>
                <p style={{fontSize: '15', marginBottom: '1px', fontWeight: 'bold'}}>IDENTIFICACIÓN:</p>
                <p style={{fontSize: '15', marginBottom: '1px', fontWeight: 'bold'}}>FECHA INGRESO:</p>
                <p style={{fontSize: '15', marginBottom: '1px', fontWeight: 'bold'}}>EMAIL:</p>
                <p style={{fontSize: '15', marginBottom: '1px', fontWeight: 'bold'}}>FECHA DE NACIMIENTO:</p>
                <p style={{fontSize: '15', marginBottom: '1px', fontWeight: 'bold'}}>GENERO:</p>
                <p style={{fontSize: '15', marginBottom: '1px', fontWeight: 'bold'}}>EPS:</p>
                <p style={{fontSize: '15', marginBottom: '1px', fontWeight: 'bold'}}>AFP:</p>
                <p style={{fontSize: '15', marginBottom: '1px', fontWeight: 'bold'}}>ROL:</p>
                <p style={{fontSize: '15', marginBottom: '1px', fontWeight: 'bold'}}>CONTRATO:</p>
                <p style={{fontSize: '15', marginBottom: '1px', fontWeight: 'bold'}}>ESTADO:</p>
                <p style={{fontSize: '15', marginBottom: '1px', fontWeight: 'bold'}}>CATEGORIA:</p>
                <p style={{fontSize: '15', marginBottom: '1px', fontWeight: 'bold'}}>CARGO:</p>
              </div>
            </div>
          </div>
        </div>
    );

  }

  // return (
  //   <div>

  //     {/* First popup */}
  //     <Modal 
  //       isOpen={showModalOne}
  //       onRequestClose={closeModalOne}
  //       contentLabel="Modal 1"
  //       style={modal1Style}
  //     >
  //       <PortafolioInfo />

  //       <img 
  //         onClick={closeModalOne}
  //         style={{ position: 'absolute', top: '15px', right: '15px' }}
  //         src={X}
  //       /> 

  //       <img 
  //         onClick={() => {closeModalOne(); openModalTwo();}}
  //         style={{ position: 'absolute', top: '15px', right: '25px' }}
  //         src={settings}
  //       /> 
  //     </Modal>

  //     {/* Second popup */}
  //     <Modal 
  //       isOpen={showModalTwo}
  //       onRequestClose={closeModalTwo}
  //       contentLabel="Modal 2"
  //       style={modal2Style}
  //     >
  //       <UpdateInfo2/>

  //       <img 
  //         onClick={() => closeModalTwo()}
  //         style={{ position: 'absolute', top: '15px', right: '15px' }}
  //         src={X}
  //       /> 

  //       <div>
  //         <button 
  //           className='change-password'
  //           onClick={() => closeModalTwo()}
  //         >
  //           Change Password
  //         </button>
  //       </div>
  //     </Modal>

  //   </div>
  // );