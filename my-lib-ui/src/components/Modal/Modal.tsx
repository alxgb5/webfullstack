import React from 'react';
import UIButton from '../UIButton';
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
          <div style={{ marginTop: '40px' }}>
            <UIButton className="closeBtn" label='Fermer' color='primary' onClick={() => props.setIsOpen(false)} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;