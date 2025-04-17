import React, { useState } from "react";
import styles from "./CategoriesPage.module.css";
import { useCategories } from "../../../hooks/useCategories";

export const CategoriesPage = () => {
  const { cateories, addCaategory, editCategory, deleteCategory } =
    useCategories();
  const [newCategory, setNewCategory] = useState();
  const [editingCategory, setEditingCategory] = useState();
  const [saveEdit, setSaveEdit] = useState();

const 

  return (
    <>
      <div>
        <h2>Категории</h2>
      </div>

      <div>
        <form>
          <input type="text" />
          <button type="submit">Добавить</button>
        </form>
      </div>

      <div>
        <div>
          <div>
            <input type="text" />
            <div>
              <button></button>
            </div>
          </div>
          ) : (
          <div>
            <div>
              <button>
                <span></span>
              </button>
              <button>
                <span></span>
              </button>
            </div>
          </div>
          )}
        </div>
      </div>
    </>
  );
};
