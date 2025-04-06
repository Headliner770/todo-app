import React from "react";
import styles from "./Enter.module.css";

export default function Entrance() {
  return (
    <div className={styles.entrance}>
      <div>
        <span>
          <button>Вход</button>
          <button>Регистрация</button>
        </span>
      </div>
      <button>Войти</button>
    </div>
  );
}
