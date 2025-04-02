import { useContext } from "react";
import ChangeTheme from "../ChangeTheme/ChangeTheme.jsx";
import CurrentTime from "../CurrentTime.jsx";
import { ThemeContext } from "../Providers/ThemeProvider.jsx";
import styles from "./Header.module.css";

export default function Header() {
  const [theme, setTheme] = useContext(ThemeContext);

  const adaptTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  
  return (
    <header className={styles.header}>
      <h2>To Do App</h2>
      <CurrentTime />
      <ChangeTheme />
    </header>
  );
}
