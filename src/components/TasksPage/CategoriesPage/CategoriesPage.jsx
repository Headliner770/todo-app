import React, { useState } from "react";
import { useCategories } from "../../../hooks/useCategories";
import { PenLine, Trash2 } from "lucide-react";
import styles from "./CategoriesPage.module.css";

export const CategoriesPage = () => {
  const { categories, addCategory, editCategory, deleteCategory } =
    useCategories();
  const [newCategory, setNewCategory] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingName, setEditingName] = useState("");

  const handlerAddCategory = (e) => {
    e.preventDefault();
    addCategory(newCategory);
    setNewCategory("");
  };

  const startEditing = (category) => {
    setEditingId(category.id);
    setEditingName(category.name);
  };

  const saveEdit = (id) => {
    editCategory(id, editingName);
    setEditingId(null);
  };

  const cancelEdit = () => {
    setEditingId(null);
  };

  return (
    <div className={styles.categories}>
      <h2>Категории</h2>

      <div className={styles.addCategory}>
        <form onSubmit={handlerAddCategory}>
          <input
            type="text"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            placeholder="Введите категорию"
          />
          <button type="submit">Добавить</button>
        </form>
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
                  >
                    <PenLine size={24} />
                  </button>
                  <button
                    onClick={() => deleteCategory(category.id)}
                    aria-label={`Удалить категорию ${category.name}`}
                  >
                    <Trash2 size={24} />
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
