import React from 'react';
import './Modal.css';

const Modal = ({ onClose, x, y, children }) => {
  return (
    <div className="modal-wrapper" onClick={onClose}>
      <div className="modal" style={{ top: y, left: x }}>
        <button onClick={onClose}>Fechar</button>
        {children}
      </div>
    </div>
  );
};


export default Modal