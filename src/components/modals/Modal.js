import React, { useEffect } from 'react';
import './index.css';


const Modal = ({ closeModal }) => {

  const neutralizeBack = callback => {
    window.history.pushState(null, "", window.location.href);
    window.onpopstate = () => {
      window.history.pushState(null, "", window.location.href);
      callback();
    };
  };

  const revivalBack = () => {
    window.onpopstate = undefined;
    window.history.back();
  };

  useEffect(() => {
    neutralizeBack(closeModal);
    return () => {
      revivalBack()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div className="modal">
        <button className="modal-button" onClick={closeModal}>
          close modal
      </button>
      </div>
      <div className="backdrop"></div>
    </>
  )
}

export default Modal;
