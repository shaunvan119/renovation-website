import React, { useState } from 'react';
import './JumpingButton.css'
import ContactForm from './ContactForm';

const JumpingButton = () => {

  const [showPopupOnClick, setShowPopupOnClick] = useState(false);

  const popupStyleButton = {
    position: 'fixed',
    top: '60%',
    left: '50%',
    transform: showPopupOnClick ? 'translate(-50%, -50%)' : 'translate(-50%, -150%)',
    width: '400px',
    height: '',
    backgroundColor: 'black',
    display: showPopupOnClick ? 'block' : 'none',
    zIndex: 999,
  };

  const handleClose = () => {
    setShowPopupOnClick(false);
  };

 
  return (
    <div className='button-wrapper'>
        <button className="jumping-button" onClick={() => setShowPopupOnClick(true)}>Free qoute</button>

        <div className="popup" style={popupStyleButton}>

        <button className="close-button" onClick={handleClose}>
            X
          </button>
          <ContactForm/>
        </div>
    </div>
  )
}

export default JumpingButton