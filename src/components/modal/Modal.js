import React from "react";
import "./Modal.css";

const Modal = ({ onClose, x, y, children }) => {

  return (
    <div className="modal-wrapper"  onClick={onClose}  style={{ top: y , left: x }}>
      <div className="modal" >
        <button onClick={onClose}>Fechar</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
