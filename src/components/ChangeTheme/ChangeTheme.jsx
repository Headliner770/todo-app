import { useState } from "react";
import { SunMoon } from "lucide-react";
import styles from "./ChangeTheme.module.css";

export default function ChangeTheme() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };

  return (
    // доделать логику
    // временно !!!!!
    <div className={theme === "light" ? styles.lightTheme : styles.darkTheme}>
      <button onClick={toggleTheme} className={styles.themeButton}>
        <div className={styles.changeThemeIcon}>
          <SunMoon size={41} color="red" />
        </div>
      </button>
    </div>
  );
}
