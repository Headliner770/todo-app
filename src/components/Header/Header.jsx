import { useContext } from "react";
import { ThemeContext } from "../Providers/ThemeProvider.jsx";
import CurrentTime from "../CurrentTime.jsx";
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
      <CurrentTime />
      <button className="button header__theme-button" onClick={changeTheme}>
        <div>
          <SunMoon size={41} />
        </div>
      </button>
    </header>
  );
}
