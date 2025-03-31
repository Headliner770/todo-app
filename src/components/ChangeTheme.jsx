import { useState } from "react";
import frame from "../../public/frame.png";

export default function ChangeTheme() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <button onClick={toggleTheme}>
        <img src={frame} alt="Смена темы" />
      </button>
    </>
  );
}
