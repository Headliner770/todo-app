import React, { useState, useContext } from "react";
import { useCategories } from "../../../hooks/useCategories";
import { ThemeContext } from "../../Providers/ThemeProvider";
import { Modal } from "../../Modal/Modal";
import { PenLine, Trash2 } from "lucide-react";
import { toast } from "react-toastify";
import styles from "./CategoriesPage.module.css";

export const CategoriesPage = () => {
  const { categories, addCategory, editCategory, deleteCategory } =
    useCategories();
  const [newCategory, setNewCategory] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingName, setEditingName] = useState("");
  const [modalOpen, setModalOpen] = useState("");
  const [theme] = useContext(ThemeContext);

  const iconColor = theme === "light" ? "black" : "white";

  const modalWindowOpen = () => {
    setModalOpen(true);
  };

  const modalWindowClose = () => {
    setModalOpen(false);
    setNewCategory;
  };

  const handlerAddCategory = (e) => {
    e.preventDefault();
    if (!newCategory.trim()) {
      toast.error("Введите название категории");
      return;
    }
    addCategory(newCategory);
    setNewCategory("");
  };

  const startEditing = (category) => {
    setEditingId(category.id);
    setEditingName(category.name);
  };

  const saveEdit = (id) => {
    if (!editingName.trim()) {
      toast.error("Введите название категории");
      return;
    }
    editCategory(id, editingName);
    setEditingId(null);
  };

  const cancelEdit = () => {
    setEditingId(null);
  };

  return (
    <div className={styles.categories}>
      <h2>Категории</h2>

      <div className={styles.addCategoryButton}>
        <button onClick={modalWindowOpen}>
          Добавить
        </button>
      </div>

      <div className={styles.categoriesList}>
        {categories.map((category) => (
          <div key={category.id} className={styles.categoryItem}>
            {editingId === category.id ? (
              <div className={styles.editForm}>
                <input
                  type="text"
                  value={editingName}
                  onChange={(e) => setEditingName(e.target.value)}
                />
                <div className={styles.editButtons}>
                  <button onClick={() => saveEdit(category.id)}>
                    Сохранить
                  </button>
                  <button onClick={cancelEdit}>Отмена</button>
                </div>
              </div>
            ) : (
              <div className={styles.categoryContent}>
                <span>{category.name}</span>
                <div className={styles.categoryButtons}>
                  <button
                    onClick={() => startEditing(category)}
                    aria-label={`Редактировать категорию ${category.name}`}
                    className={styles.actionButton}
                  >
                    <PenLine size={24} color={iconColor} />
                  </button>
                  <button
                    onClick={() => deleteCategory(category.id)}
                    aria-label={`Удалить категорию ${category.name}`}
                    className={styles.actionButton}
                  >
                    <Trash2 size={24} color={iconColor} />
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <Modal
        isOpen={modalOpen}
        onClose={modalWindowClose}
        title="Добавить категорию"
      >
        <form onSubmit={handlerAddCategory}>
          <input
            type="text"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            className="styles.modalInput"
          />
          <div className={styles.modalButtons}>
            <button
              type="button"
              onClick={modalWindowClose}
              className={styles.cancelButton}
            >
              Отмена
            </button>
            <button type="submit" className={styles.addButton}>
              Добавить
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
