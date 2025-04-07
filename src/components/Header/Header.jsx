import { useContext } from "react";
import { ThemeContext } from "../Providers/ThemeProvider.jsx";
import CurrentTime from "../CurrentTime.jsx";
import { Sun, Moon } from "lucide-react";
import styles from "./Header.module.css";

export function Header() {
  const [theme, setTheme] = useContext(ThemeContext);

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header className={styles.header}>
      <h2>To Do App</h2>
      <CurrentTime />
      <button onClick={changeTheme}>
        <div>
          {theme === "light" ? (
            <Sun color="black" size={40} />
          ) : (
            <Moon color="black" size={40} />
          )}
        </div>
      </button>
    </header>
  );
}
