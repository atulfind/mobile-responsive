import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './index.css';

const pushState = (obj, url) => {
  window.history.pushState(obj, '', url);
}

const onPopState = (handler) => {
  window.onpopstate = handler;
};

const Modal = ({closeModal}) => {

useEffect(() => {
  
  pushState({myId: 1}, '/')

  onPopState((event) => {
    closeModal()
  });

}, [closeModal])

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
