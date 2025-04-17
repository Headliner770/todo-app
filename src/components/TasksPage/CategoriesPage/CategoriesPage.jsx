import React, { useState } from "react";
import styles from "./CategoriesPage.module.css";

export const CategoriesPage = () => {
  const [newCategory, setNewCategory] = useState();
  const [editingCategory, setEditingCategory] = useState();
  const [saveEdit, setSaveEdit] = useState();

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
