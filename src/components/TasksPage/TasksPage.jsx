import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import styles from "./TasksPage.module.css";

const AllTasks = () => <h2>Все задачи</h2>;
const TodayTasks = () => <h2>Задачи на сегодня</h2>;
const CompletedTasks = () => <h2>Выполненные</h2>;
const DeleteTasks = () => <h2>Удаленные</h2>;

export const TasksPage = () => {
  const location = useLocation();
  return (
    <main className={styles.mainTasks}>
      <div className={styles.sidePanel}>
        <ul>
          <li
            className={location.pathname === "tasks/all" ? styles.active : ""}
          >
            <Link to="/tasks/all">Все задачи</Link>
          </li>
          <li
            className={location.pathname === "tasks/today" ? styles.today : ""}
          >
            <Link to="/tasks/today">Задачи на сегодня</Link>
          </li>
          <li
            className={
              location.pathname === "tasks/completed" ? styles.active : ""
            }
          >
            <Link to="/tasks/completed">Выполненные</Link>
          </li>
          <li
            className={
              location.pathname === "tasks/deleted" ? styles.active : ""
            }
          >
            <Link to="/tasks/deleted">Удаленные</Link>
          </li>
        </ul>
      </div>
      <div className={styles.content}>
        <Routes>
          <Route path="/" element={<AllTasks />} />
          <Route path="/today" element={<TodayTasks />} />
          <Route path="/completed" element={<CompletedTasks />} />
          <Route path="/deleted" element={<DeleteTasks />} />
        </Routes>
        <h1>Будущие задачи</h1>
      </div>
    </main>
  );
};
