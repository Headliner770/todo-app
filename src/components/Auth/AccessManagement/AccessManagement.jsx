import { useState } from "react";
import { UserForm } from "../UserForm/UserForm.jsx";
import styles from "./AccessManagement.module.css";

export const AccessManagement = () => {
  const [activeTab, setActiveTab] = useState("login");

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <main className={styles.main}>
      <div className={styles.block}>
        <div className={styles.windows}>
          <div className={styles.tabs}>
            <button
              className={`${styles.button} ${
                activeTab === "login" ? styles.active : ""
              } `}
              onClick={() => handleClick("login")}
            >
              <h2>Вход</h2>
            </button>
            <button
              className={`${styles.button} ${
                activeTab === "registration" ? styles.active : ""
              } `}
              onClick={() => handleClick("registration")}
            >
              <h2>Регистрация</h2>
            </button>
          </div>

          <UserForm modeForm={activeTab} />
        </div>
      </div>
    </main>
  );
};
