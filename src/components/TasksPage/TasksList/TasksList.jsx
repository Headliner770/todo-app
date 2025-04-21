import { useState, useContext } from "react";
import { useTasks } from "../../../hooks/useTasks.jsx";
import { useCategories } from "../../../hooks/useCategories.jsx";
import { ThemeContext } from "../../Providers/ThemeProvider.jsx";
import { Modal } from "../../Modal/Modal";
import { PenLine, Trash2 } from "lucide-react";
import { toast } from "react-toastify";
import styles from "./TasksList.module.css";

export const TasksList = ({ filter = "all" }) => {
  const { addTask, editTask, deleteTask, toggleComplete, receiveTasks } =
    useTasks();
  const { categories } = useCategories();
  const [theme] = useContext(ThemeContext);
  const iconColor = theme === "light" ? "black" : "white";

  const [modalOpen, setModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskCategory, setTaskCategory] = useState(categories[0]?.id || "");
  const [hideCompleted, setHideCompleted] = useState(false);

  const visibleTasks = receiveTasks(filter, hideCompleted);

  const titles = {
    all: "Все задачи",
    completed: "Выполненные",
    deleted: "Удаленные",
  };
  const title = titles[filter] || "Задачи";

  const openAddModal = () => {
    setEditingTask(null);
    setTaskTitle("");
    setTaskCategory(categories.length > 0 ? categories[0].id : "");
    setModalOpen(true);
  };

  const openEditModal = (task) => {
    setEditingTask(task);
    setTaskTitle(task.title);
    setTaskCategory(task.categoryId);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setTaskTitle("");
    setTaskCategory(categories[0]?.id || "");
    setEditingTask(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskTitle.trim()) {
      toast.error("Введите название задачи");
      return;
    }
    if (!taskCategory) {
      toast.error("Выберите категорию");
      return;
    }
    if (editingTask) {
      editTask(editingTask.id, {
        title: taskTitle.trim(),
        categoryId: taskCategory,
      });
      toast.success("Задача обновлена");
    } else {
      addTask({ title: taskTitle.trim(), categoryId: taskCategory });
      toast.success("Задача добавлена");
    }
    closeModal();
  };

  return (
    <div className={styles.tasksListBase}>
      <div className={styles.tasksHeader}>
        <h2>{title}</h2>
        {filter === "all" && (
          <div className={styles.actionsHeader}>
            <label className={styles.hideCompletedLabel}>
              <input
                type="checkbox"
                checked={hideCompleted}
                onChange={() => setHideCompleted((v) => !v)}
              />
              Скрыть выполненные
            </label>
            <button className={styles.addButton} onClick={openAddModal}>
              Добавить
            </button>
          </div>
        )}
      </div>
      <div className={styles.tasksList}>
        {visibleTasks.map((task) => {
          const category = categories.find((c) => c.id === task.categoryId);
          return (
            <div key={task.id} className={styles.taskElement}>
              <div className={styles.taskLeft}>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleComplete(task.id)}
                />
                <span className={task.completed ? styles.completed : ""}>
                  {task.title}
                </span>
              </div>
              <div className={styles.taskActions}>
                {category && (
                  <span className={styles.categoryMark}>{category.name}</span>
                )}
                <button
                  className={styles.actionButton}
                  onClick={() => openEditModal(task)}
                  aria-label="Редактировать"
                >
                  <PenLine size={24} color={iconColor} />
                </button>
                <button
                  className={styles.actionButton}
                  onClick={() => deleteTask(task.id)}
                  aria-label="Удалить"
                >
                  <Trash2 size={24} color={iconColor} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <Modal
        isOpen={modalOpen}
        onClose={closeModal}
        title={editingTask ? "Редактировать задачу" : "Добавить задачу"}
      >
        <form onSubmit={handleSubmit} className={styles.modalForm}>
          <input
            type="text"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            placeholder="Название задачи"
            className={styles.modalInput}
          />
          <select
            value={taskCategory}
            onChange={(e) => setTaskCategory(e.target.value)}
            className={styles.modalSelect}
          >
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
          <div className={styles.modalButtons}>
            <button
              type="button"
              className={styles.cancelButton}
              onClick={closeModal}
            >
              Отменить
            </button>
            <button type="submit" className={styles.plusButton}>
              {editingTask ? "Сохранить" : "Добавить"}
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
