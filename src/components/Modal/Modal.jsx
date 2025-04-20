import React from "react";
import styles from "./Modal.module.css";

export const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalMain}>
      <div className={styles.modalContent}>
        <h2>{title}</h2>
        {children}
        <div className={styles.modalButtons}>
          <button className={styles.cancelButton} onClick={onClose}>
            Отмена
          </button>
        </div>
      </div>
    </div>
  );
};
