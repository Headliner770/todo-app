import React, { useState, useEffect } from "react";

export const AuthProvider = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser();
    localStorage.removeItem("user");
  };

  return;
};
