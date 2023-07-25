import React, { useState } from "react";
import './UpdateInfo1.css';
import personIcon from '../assets/personIcon.png';
import X from '../assets/X.png';

// This is the PopUp component that allows you to update individual information from the home page
const UpdateInfo1 = ({ isOpen, handleClose, handleUpdate }) => {

    const [direccion, setDireccion] = useState("");
    const [genero, setGenero] = useState("");
    const [fechaNacimiento, setFechaNacimiento] = useState("");

    const handleSubmit = () => {
      const updatedData = {
        direccion,
        genero,
        fechaNacimiento,
      };
      handleUpdate(updatedData);
      handleClose();
    };

    if (!isOpen) return null;

    return (
        <div className="update-info">
            {/* Close button */}
            <img
                src={X}
                alt='X button'
                onClick={handleClose}
                className='close-button'
            />
            {/* Pop-up title */}
            <h1 className='title'>Update Information</h1>

            <div className='info-container'>

                {/* Flexbox for Name and image */}
                <div className='name-image-container'>
                    <img src={personIcon} alt='Profile' className='profile-image'/>
                    <h2 className='name-label'>Name</h2>
                </div>

                {/* Flexbox for textboxes */}
                <div className='textboxes-container'>
                    <div className='input-container'>
                        <h2><input
                            type="text"
                            placeholder="Direccion"
                            className='input-box'
                            value={direccion}
                            onChange={e => setDireccion(e.target.value)}
                        /></h2>
                    </div>
                    <div className='input-container'>
                        <h2><input
                            type="text"
                            placeholder="Genero"
                            className='input-box'
                            value={genero}
                            onChange={e => setGenero(e.target.value)}
                        /></h2>
                    </div>
                    <div className="input-container">
                        <h2><input
                            type="text"
                            placeholder="Fecha de Nacimiento"
                            className='input-box'
                            value={fechaNacimiento}
                            onChange={e => setFechaNacimiento(e.target.value)}
                        /></h2>
                    </div>
                    <div className='button-container'>
                        {/* Change button */}
                        <button onClick={handleClose} className='change-button'><b>Change</b></button>
                    </div>
                </div>
            </div>
        </div>

    );
}


export default UpdateInfo1;