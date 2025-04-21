import { useLocalStorage } from "./useLocalStorage";

export const useTasks = () => {
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  const addTask = (taskData) => {
    const newTask = {
      id: Date.now().toString(),
      completed: false,
      deleted: false,
      createdAt: new Date().toISOString(),
      ...taskData,
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

  const receiveTasks = (filter, hideCompleted) => {
    let filtered = tasks.filter((task) => !task.deleted);

    if (filter === "completed") {
      filtered = filtered.filter((task) => task.completed);
    }
    if (hideCompleted) {
      filtered = filtered.filter((task) => !task.completed);
    }
    return filtered;
  };

  return { tasks, addTask, editTask, deleteTask, toggleComplete, receiveTasks };
};
