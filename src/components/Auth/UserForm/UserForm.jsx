import { useState } from "react";
import styles from "./UserForm.module.css";

export const UserForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className={styles.inputFields}>
        {/* id заглушки */}
        <label htmlFor="email">Email</label>
        <input type="email" id="123" />
      </div>
      <div className={styles.inputFields}>
        {/* id заглушки */}
        <label htmlFor="password">Password</label>
        <input type="password" id="12" />
      </div>
    </>
  );
};
