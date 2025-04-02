import ChangeTheme from "../ChangeTheme/ChangeTheme.jsx";
import CurrentTime from "../CurrentTime.jsx";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h2>To Do App</h2>
      <CurrentTime />
      <ChangeTheme />
    </header>
  );
}
