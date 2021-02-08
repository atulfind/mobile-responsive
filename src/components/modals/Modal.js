import React, { useEffect } from 'react';
import './index.css';

const Modal = () => {

  useEffect(() => {
    window.addEventListener('beforeunload', function (e) {
      // Cancel the event
      e.preventDefault(); // If you prevent default behavior in Mozilla Firefox prompt will always be shown
      // Chrome requires returnValue to be set
      e.returnValue = '';
    });
  }, [])

  return (
    <div className>
      this is modal
    </div>
  )
}

export default Modal;
