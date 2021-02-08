import React, { useEffect } from 'react';
import './index.css';

const Modal = ({closeModal}) => {

  useEffect(() => {
    window.addEventListener('beforeunload', function (e) {
      closeModal();
      // Cancel the event
      e.preventDefault(); // If you prevent default behavior in Mozilla Firefox prompt will always be shown
      // Chrome requires returnValue to be set
      e.returnValue = '';
    });
  }, [closeModal])

  return (
    <div className>
      this is modal
    </div>
  )
}

export default Modal;
