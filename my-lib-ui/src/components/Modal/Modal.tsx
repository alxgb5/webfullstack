import React from 'react';
import './modal.css';

export interface ModalProps {
  setIsOpen: (isOpen: boolean) => void,
  children: React.ReactNode
}


const Modal = (props: ModalProps) => {

  return (
    <>
      <div className="background" onClick={() => props.setIsOpen(false)} />
      <div className="centered">
        <div className="modal">
          {props.children}
          <button className="closeBtn" onClick={() => props.setIsOpen(false)}>Fermer</button>
        </div>
      </div>
    </>
  );
};

export default Modal;