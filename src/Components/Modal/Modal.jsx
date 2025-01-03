import React, { useState } from 'react'
import './Modal.css'; 

const Modal = ({isVisible, closeModal, modalContent="Hello"}) => {
  return (
    <>
        {
            isVisible && 
            <div className='modal'>
                <div className='modal-content'>
                    <h1>Modal</h1>
                    <button onClick={closeModal}>Close Modal</button>
                    <p>{modalContent}</p>
                </div>
            </div>
        }
    </>
  );
}

export default Modal