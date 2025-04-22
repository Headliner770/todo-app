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
    let filteredTasks = tasks;

    if (filter === "completed") {
      filteredTasks = filteredTasks.filter((task) => task.completed);
    } else if (filter === "deleted") {
      filteredTasks = filteredTasks.filter((task) => task.deleted);
    } else {
      filteredTasks = filteredTasks.filter((task) => !task.deleted);
    }
    if (hideCompleted) {
      filteredTasks = filteredTasks.filter((task) => !task.completed);
    }
    return filteredTasks;
  };

  return { tasks, addTask, editTask, deleteTask, toggleComplete, receiveTasks };
};
