import { useState } from "react";
import changeThemeIcon from "../../public/changeThemeIcon.png";

export default function ChangeTheme() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button onClick={toggleTheme}>
      <img src={changeThemeIcon} alt="Смена темы" />
    </button>
  );
}
