import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import styles from "./TasksPage.module.css";

const AllTasks = () => <h2>Все задачи</h2>;
const TodayTasks = () => <h2>Задачи на сегодня</h2>;
const CompletedTasks = () => <h2>Выполненные</h2>;
const DeleteTasks = () => <h2>Удаленные</h2>;

export const TasksPage = () => {
  return (
    <main className={styles.mainTasks}>
      <div className={styles.sidePanel}>
        <ul>
          <li>
            <NavLink
              to="/tasks/all"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Все задачи
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/tasks/today"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Задачи на сегодня
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/tasks/completed"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Выполненные
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/tasks/deleted"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Удаленные
            </NavLink>
          </li>
        </ul>
      </div>
      <div className={styles.content}>
        <Routes>
          <Route path="all" element={<AllTasks />} />
          <Route path="today" element={<TodayTasks />} />
          <Route path="completed" element={<CompletedTasks />} />
          <Route path="deleted" element={<DeleteTasks />} />
        </Routes>
        <h1>Будущие задачи</h1>
      </div>
    </main>
  );
};
