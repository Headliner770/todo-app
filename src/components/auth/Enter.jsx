import React from "react";
import styles from "./Enter.module.css";

// провести ренейм
export default function Enter() {
  return (
    <div className={styles.enter}>
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
