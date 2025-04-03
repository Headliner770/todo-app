import React, { createContext, useEffect } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage"; // кастомный хук
// import { ThemeContext } from "react";
export const ThemeContext = createContext(); // пытался ThemeContext отделить

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  useEffect(() => {
    if (theme === "dark") document.body.classList.add("dark");
    else document.body.classList.remove("dark");
  }, [theme]);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};
