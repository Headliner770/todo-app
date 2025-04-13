import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Header } from "./components/Header/Header.jsx";
import { ThemeProvider } from "./components/Providers/ThemeProvider.jsx";
import { AccessManagement } from "./components/Auth/AccessManagement/AccessManagement.jsx";
import { TasksPage } from "./components/TasksPage/TasksPage.jsx";
import { AuthProvider, useAuth } from "./components/Providers/AuthProvider.jsx";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/" />;
};

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <Header />
          <Routes>
            <Route path="/" element={<AccessManagement />} />
            <Route
              path="/tasks/*"
              element={
                <PrivateRoute>
                  <TasksPage />
                </PrivateRoute>
              }
            />
          </Routes>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
