import { useContext } from "react";
import { ThemeContext } from "../Providers/ThemeProvider.jsx";
import { SunMoon } from "lucide-react";
import styles from "./Header.module.css";

export function Header() {
  const [theme, setTheme] = useContext(ThemeContext);

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header className={styles.header}>
      <h2>To Do App</h2>
      <span className="header__logo">ThemeProvider</span>
      <button className="button header__theme-button" onClick={changeTheme}>
        <div className={styles.changeThemeIcon}>
          <SunMoon size={41} />
        </div>
      </button>
    </header>
  );
}
