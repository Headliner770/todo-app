import React from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useTasks = () => {
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  const addTask = (tasks) => {
    const newTask = {
      id: Date.now().toString(),
      complete: false,
      deleted: false,
    };
    setTasks([...tasks, newTask]);
  };

  const editTask = () => {};

  const deleteTask = () => {};

  const toggleExecution = () => {};

  return { tasks, addTask, editTask, deleteTask, toggleExecution };
};
