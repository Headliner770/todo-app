import { useState } from "react";
import changeThemeIcon from "../../public/changeThemeIcon.png";
import styles from "./ChangeTheme.module.css";

export default function ChangeTheme() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };

  return (
    // доделать логику
    // временно !!!!!
    <div className={theme === styles.lightTheme}>
      <button onClick={toggleTheme} className="{styles.themeButton}">
        <img src={changeThemeIcon} alt="Смена темы" />
      </button>
    </div>
  );
}
