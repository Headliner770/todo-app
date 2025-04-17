import React, { useContext } from "react";
import { AuthContext } from "../components/Providers/AuthProvider.jsx";

export const useAuth = () => useContext(AuthContext);
