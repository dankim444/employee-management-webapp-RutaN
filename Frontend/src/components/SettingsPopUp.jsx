import React from 'react';
import X from '../assets/X.png';
import Modal from 'react-modal';
import './SettingsPopUp.css';
import ChangePasswordPopup from './ChangePasswordPopup';
import ConfirmPasswordPopup from './ConfirmPasswordPopup';
import PasswordChangedPopup from './PasswordChangedPopup';

class SettingsPopUp extends React.Component {
  constructor() {
    super();

    this.state = {
      isModalOneOpen: false,
      isModalTwoOpen: false,
      isModalThreeOpen: false,
    };
  }

  render() {
    
    const modal1Style = {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '901px',
        height: '442px',
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
        width: '901px',
        height: '485px',
      },
      overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)'
      }
    };

    const modal3Style = {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '901px',
        height: '485px',
      },
      overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)'
      }
    };

    return (
      <div>
      <button 
        onClick={() => this.setState({ isModalOneOpen: true })}
      >
        Settings
      </button>

      {/* Change Password popup */}
      <Modal
        isOpen={this.state.isModalOneOpen}
        onRequestClose={() => this.setState({ isModalOneOpen: false })}
        contentLabel="Modal One"
        style={modal1Style}
      >
          <ChangePasswordPopup/>
          <img 
            onClick={() => this.setState({ isModalOneOpen: false })}
            style={{ position: 'absolute', top: '15px', right: '15px' }}
            src={X}
          /> 
          <div>
            <button 
              className='change-password'
              onClick={() => this.setState({ isModalOneOpen: false, isModalTwoOpen: true })}
            >
              Change Password
            </button>
          </div>
      </Modal>

      {/* Confirm password popup */}
      <Modal
        isOpen={this.state.isModalTwoOpen}
        onRequestClose={() => this.setState({ isModalTwoOpen: false })}
        contentLabel="Modal Two"
        style={modal2Style}
      >
        <ConfirmPasswordPopup/>
        <img 
            onClick={() => this.setState({ isModalTwoOpen: false })}
            style={{ position: 'absolute', top: '15px', right: '15px' }}
            src={X}
        /> 
        <button 
          className='confirm-password'
          onClick={() => this.setState({ isModalTwoOpen: false, isModalThreeOpen: true })}
        >
          Confirm Password
        </button>
      </Modal>

      {/* Password confirmed popup */}
      <Modal
        isOpen={this.state.isModalThreeOpen}
        onRequestClose={() => this.setState({ isModalThreeOpen: false })}
        contentLabel="Modal Three"
        style={modal3Style}
      >
        <PasswordChangedPopup />

        <button 
          className='password-changed'
          onClick={() => this.setState({ isModalThreeOpen: false })}
        >
          Close
        </button>
      </Modal>
    </div>
    );
  }
}

export default SettingsPopUp;