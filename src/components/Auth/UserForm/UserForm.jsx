import { useState } from "react";

export const UserForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div>
        <input type="email" id="" />
      </div>
      <div>
        <input type="password" id="" />
      </div>
    </>
  );
};
