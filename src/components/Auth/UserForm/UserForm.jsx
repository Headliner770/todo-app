import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Providers/AuthProvider.jsx";
import { useLocalStorage } from "../../../hooks/useLocalStorage.jsx";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./UserForm.module.css";

export const UserForm = ({ modeForm }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useLocalStorage("users", []);

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (modeForm === "login") {
      if (!email || !password) {
        toast.error("Поля должны быть заполнены");
        return;
      }

      const foundUser = users.find(
        (user) => user.email === email && user.password === password
      );
      if (foundUser) {
        toast.success("Вход успешен");
        login(foundUser);
        navigate("/tasks");
      } else {
        toast.error("Неверные учетные данные");
      }
    } else {
      if (!email || !password) {
        toast.error("Поля должны быть заполнены");
        return;
      }

      setUsers((prevUsers) => {
        const newUsers = [...prevUsers, { email, password }];
        return newUsers;
      });
      setEmail("");
      setPassword("");
      toast.success("Регистрация прошла успешно");
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
      <button type="submit" className={styles.submitButton}>
        {modeForm === "login" ? "Войти" : "Зарегистрироваться"}
      </button>
    </form>
  );
};
