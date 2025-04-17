import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./TasksPage.module.css";

export const TasksPage = () => {
  return (
    <main className={styles.mainTasks}>
      <div className={styles.sidePanel}>
        <ul>
          <li>
            <NavLink
              to="all"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Все задачи
            </NavLink>
          </li>
          <li>
            <NavLink
              to="completed"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Выполненные
            </NavLink>
          </li>
          <li>
            <NavLink
              to="deleted"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Удаленные
            </NavLink>
          </li>
          <li>
            <NavLink
              to="Categories"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Категории
            </NavLink>
          </li>
        </ul>
      </div>
      <div className={styles.content}>
        <Outlet />
        <h1>Будущие задачи</h1>
      </div>
    </main>
  );
};
