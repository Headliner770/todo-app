import React from "react";
import styles from "./Modal.module.css";

export const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalMain} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.modalTitle}> {title}</h2>
        {children}
      </div>
    </div>
  );
};
