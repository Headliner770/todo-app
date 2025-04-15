import { useContext } from "react";
import { ThemeContext } from "../Providers/ThemeProvider.jsx";
import { CurrentTime } from "../CurrentTime.jsx";
import { useAuth } from "../../hooks/useAuth.jsx";
import { useNavigate } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
import styles from "./Header.module.css";

export function Header() {
  const [theme, setTheme] = useContext(ThemeContext);
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header className={styles.header}>
      <h2>To Do App</h2>
      <div className={styles.timeContainer}>
        <CurrentTime />
      </div>
      <div className={styles.actionButtons}>
        {user && (
          <button onClick={handleLogout} className={styles.logoutButton}>
            Выйти
          </button>
        )}
        <button onClick={changeTheme} className={styles.themeButton}>
          <div>
            {theme === "light" ? (
              <Sun color="black" size={40} />
            ) : (
              <Moon color="black" size={40} />
            )}
          </div>
        </button>
      </div>
    </header>
  );
}
