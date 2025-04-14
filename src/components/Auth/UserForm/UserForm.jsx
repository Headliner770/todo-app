import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Providers/AuthProvider.jsx";
import { useLocalStorage } from "../../../hooks/useLocalStorage.jsx";
import styles from "./UserForm.module.css";

export const UserForm = ({ modeForm }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [users, setUsers] = useLocalStorage("users", []);

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (modeForm === "login") {
      if (!email || !password) {
        setError("Поля должны быть заполнены");
        return;
      }

      console.log(users);
      const foundUser = users.find(
        (user) => user.email === email && user.password === password
      );
      if (foundUser) {
        console.log("Вход успешен");
        setError(null);
        login(foundUser);
        navigate("/tasks");
      } else {
        setError("Неверные учетные данные");
      }
    } else {
      if (!email || !password) {
        setError("Поля должны быть заполнены");
        return;
      }

      setUsers((prevUsers) => {
        const newUsers = [...prevUsers, { email, password }];
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
