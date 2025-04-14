import React from "react";
import { Routes } from "react-router-dom";
import { Header } from "../Header/Header.jsx";

export const AppProvider = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
