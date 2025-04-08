import { useState } from "react";
import styles from "./AccessManagement.module.css";

export const AccessManagement = () => {
  const [activeTab, setActiveTab] = useState();

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.block}>
      <div className={styles.windows}>
        <div className={styles.tabs}>
          <button
            className={styles.button}
            onClick={() => handleClick("login")}
          >
            Вход
          </button>
          <button
            className={styles.button}
            onClick={() => handleClick("register")}
          >
            Регистрация
          </button>
        </div>
      </div>
    </div>
  );
};
