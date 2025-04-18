import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useCategories } from "../../hooks/useCategories";
import styles from "./TasksPage.module.css";

export const TasksPage = () => {
  const { categories } = useCategories();

  return (
    <main className={styles.mainTasks}>
      <div className={styles.sidePanel}>
        <div className={styles.menuSidePanel}>
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
                to="categories"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Категории
              </NavLink>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            {categories.map((category) => (
              <li key={category.id}>{category.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </main>
  );
};
