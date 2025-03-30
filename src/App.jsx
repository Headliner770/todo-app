import { useState } from "react";
import { ChangeTheme } from "./components/ChangeTheme.jsx";
import "./App.css";

// в ChangeTheme
export default function App() {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <h1>To Do App</h1>
      <button onClick={changeTheme}>Сhange Theme</button>
    </>
  );
}
