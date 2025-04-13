import React from "react";
import styles from "./TasksPage.module.css";

export const TasksPage = () => {
  return (
    <main className={styles.mainTasks}>
      <button className={styles.button}></button>
      <div className={styles.sidePanel}>
        <ul>
          <li>Все задачи</li>
          <li>Задачи на сегодня</li>
          <li>Выполненные</li>
          <li>Удаленные</li>
        </ul>
      </div>
      <div className={styles.content}>
        <h1>Будущие задачи</h1>
      </div>
    </main>
  );
};
