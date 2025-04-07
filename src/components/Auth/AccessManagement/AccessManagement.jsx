import styles from "./AccessManagement.module.css";

export const AccessManagement = () => {
  return (
    <div className={styles.block}>
      <div className={styles.windows}>
        <div className={styles.tabs}>
          <button>Вход</button>
          <button>Регистрация</button>
        </div>
      </div>
    </div>
  );
};
