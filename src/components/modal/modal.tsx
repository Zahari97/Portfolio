import React, { ReactNode, useState } from 'react';
import Modal from 'react-modal';
import styles from './modal.module.scss';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children?: ReactNode;
}

function ModalComponent({ isOpen, onClose, title, children }: ModalProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <div>
        <h1>{title}</h1>
        <span className={styles.closeButton} onClick={onClose}>
          +
        </span>
        {children}
      </div>
    </Modal>
  );
}

export default ModalComponent;

