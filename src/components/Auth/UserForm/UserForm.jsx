import { useState } from "react";
import styles from "./UserForm.module.css";

export const UserForm = ({ modeForm }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [users, setUsers] = useState(() => {
    const storedUsers = localStorage.getItem("users");
    try {
      return storedUsers ? JSON.parse(storedUsers) : {};
    } catch (e) {
      console.error("Ошибка разбора JSON из localStorage:", e);
      return {};
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (modeForm === "login") {
      if (!email || !password) {
        setError("Поля должны быть заполнены");
        return;
      }

      const foundUser = Object.values(users).find(
        (user) => user.email === email && user.password === password
      );
      if (foundUser) {
        console.log("Вход успешен");
        setError(null);
      } else {
        setError("Неверные учетные данные");
      }
    } else {
      if (!email || !password) {
        setError("Поля должны быть заполнены");
        return;
      }
      const newId = Object.keys(users).length
        ? Math.max(...Object.keys(users).map(Number)) + 1
        : 1;

      setUsers((prevUsers) => {
        const newUsers = { ...prevUsers, [newId]: { email, password } };
        localStorage.setItem("users", JSON.stringify(newUsers));
        return newUsers;
      });
      setEmail("");
      setPassword("");
      setError(null);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.inputField}>
        <input
          type="email"
          id="email"
          value={email}
          placeholder="Введите почту"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className={styles.inputField}>
        <input
          type="password"
          id="password"
          value={password}
          placeholder="Введите пароль"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <div className={styles.error}>{error}</div>}
      <button type="submit" className={styles.submitButton}>
        {modeForm === "login" ? "Войти" : "Зарегистрироваться"}
      </button>
    </form>
  );
};
