import React, { useState, useEffect } from "react";

export const useLocalStorage = (key, defData) => {
  const [state, setState] = useState(() => {
    const localData = localStorage.getItem(key);
    try {
      return JSON.parse(localData) || defData;
    } catch (e) {
      console.log(e);
      return defData;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
};
