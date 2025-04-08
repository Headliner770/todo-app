import { useState } from "react";
import { UserForm } from "../UserForm/UserForm.jsx";
import styles from "./AccessManagement.module.css";

export const AccessManagement = () => {
  const [activeTab, setActiveTab] = useState();

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <main className={styles.main}>
      <div className={styles.block}>
        <div className={styles.windows}>
          <div className={styles.tabs}>
            <button
              className={styles.button}
              onClick={() => handleClick("login")}
            >
              <h2>Вход</h2>
            </button>
            <button
              className={styles.button}
              onClick={() => handleClick("registration")}
            >
              <h2>Регистрация</h2>
            </button>
          </div>

          <UserForm />
        </div>
      </div>
    </main>
  );
};
