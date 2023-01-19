import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Modal from './Modal';

export default {
  title: "UI/Modal",
  component: Modal,
} as ComponentMeta<typeof Modal>;


export const ModalUi: ComponentStory<typeof Modal> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open modal</button>
      {
        isOpen &&
        <Modal setIsOpen={setIsOpen}>
          <div>
            <h1 style={{ color: 'black' }}>Title exemple</h1>
            <p style={{ color: 'black' }}>Modal content</p>
          </div>
        </Modal>
      }
    </div>
  )
}