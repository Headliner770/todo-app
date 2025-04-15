import { useState, useEffect } from "react";
import styles from "./Header/Header.module.css";

export function CurrentTime() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <span className={styles.currentTime}>{now.toLocaleTimeString()}</span>;
}
