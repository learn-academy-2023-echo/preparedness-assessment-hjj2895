import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

const ModalComponent = ({ toggleModal, inputValue }) => {
  const [isOpen, setIsOpen] = useState(true)

  const toggle = () => {
    setIsOpen(!isOpen);
    toggleModal();
  };

  return (
    <div>
      <Modal isOpen={isOpen} toggle={toggle} className="custom-modal">
        <ModalHeader toggle={toggle}>Hello there {inputValue}!</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
      </Modal>
    </div>
  );
}

export default ModalComponent
