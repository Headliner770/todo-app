import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth.jsx";
import { useLocalStorage } from "../../../hooks/useLocalStorage.jsx";
import { validEmail } from "./validEmail.jsx";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./UserForm.module.css";

export const UserForm = ({ modeForm }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useLocalStorage("users", []);

  useEffect(() => {
    setEmail("");
    setPassword("");
  }, [modeForm]);

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (modeForm === "login") {
      if (!email || !password) {
        toast.error("Поля должны быть заполнены");
        return;
      }

      if (!validEmail(email)) {
        toast.error("Неверный формат электронной почты");
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

      if (!validEmail(email)) {
        toast.error("Неверный формат электронной почты");
        return;
      }

      setUsers((prevUsers) => {
        const newUsers = [...prevUsers, { email, password }];
        return newUsers;
      });
      login({ email, password });

      setEmail("");
      setPassword("");
      toast.success("Регистрация прошла успешно");
      navigate("/tasks");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.inputField}>
        <input
          type="text"
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
