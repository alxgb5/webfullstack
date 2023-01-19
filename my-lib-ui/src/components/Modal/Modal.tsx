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
          <button className="closeBtn" onClick={() => props.setIsOpen(false)}>Fermer</button>
          {props.children}
        </div>
      </div>
    </>
  );
};

export default Modal;