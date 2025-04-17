// import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useCategories = () => {
  const defaultCategories = [
    { id: "1", name: "Работа" },
    { id: "2", name: "Личное" },
    { id: "3", name: "Разное" },
  ];

  const [categories, setCategories] = useLocalStorage(
    "categories",
    defaultCategories
  );

  const addCategory = (name) => {
    if (!name.trim()) return;
    const newCategory = { id: Date.now().toString(), name };
    setCategories([...categories, newCategory]);
  };

  const editCategory = (id, newName) => {
    if (!name.trim()) return;
    setCategories(
      categories.map((category) =>
        category.id === id ? { ...category, name: newName } : category
      )
    );
  };

  const deleteCategory = (id) => {
    setCategories(categories.filter((category) => category.id !== id));
  };

  return { categories, addCategory, editCategory, deleteCategory };
};
