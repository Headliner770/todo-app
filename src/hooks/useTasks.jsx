import { useLocalStorage } from "./useLocalStorage";

export const useTasks = () => {
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  const addTask = (tasks) => {
    const newTask = {
      id: Date.now().toString(),
      complete: false,
      deleted: false,
      created: new Date().toISOString(),
      ...tasks,
    };
    setTasks([...tasks, newTask]);
  };

  const editTask = (id, updatedData) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, ...updatedData } : task))
    );
  };

  const deleteTask = (id) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, deleted: true } : task))
    );
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const receiveTasks = (filter) => {
    switch (filter) {
      case "all":
        return tasks.filter((task) => !task.deleted);
      case "completed":
        return tasks.filter((task) => task.completed && !task.deleted);
      case "deleted":
        return tasks.filter((task) => task.deleted);
      default:
        return tasks.filter((task) => !task.deleted);
    }
  };

  return { tasks, addTask, editTask, deleteTask, toggleComplete, receiveTasks };
};
