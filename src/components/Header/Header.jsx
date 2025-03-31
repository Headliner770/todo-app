import { useState, useEffect } from "react";
import ChangeTheme from "../ChangeTheme.jsx";
import styles from "./Header.module.css";

export default function Header() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <header className={styles.header}>
      <h3>To Do App</h3>
      <span>{now.toLocaleTimeString()}</span>
      <ChangeTheme />
    </header>
  );
}
