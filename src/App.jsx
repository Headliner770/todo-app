import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { ThemeProvider } from "./components/Providers/ThemeProvider.jsx";
import { AccessManagement } from "./components/Auth/AccessManagement/AccessManagement.jsx";
import { TasksPage } from "./components/TasksPage/TasksPage.jsx";
import { AppProvider } from "./components/Providers/AppProvider.jsx";
import { AuthProvider } from "./components/Providers/AuthProvider.jsx";
import { useAuth } from "./hooks/useAuth.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AllTasks = () => <h2>Все задачи</h2>;
const TodayTasks = () => <h2>Задачи на сегодня</h2>;
const CompletedTasks = () => <h2>Выполненные</h2>;
const DeleteTasks = () => <h2>Удаленные</h2>;
const NotFoundPage = () => <h2>Страница не найдена</h2>;

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
};

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <AppProvider>
            <Routes>
              <Route path="/" element={<Navigate to={"/login"} />} />
              <Route path="/login" element={<AccessManagement />} />
              <Route
                path="/tasks"
                element={
                  <PrivateRoute>
                    <TasksPage />
                  </PrivateRoute>
                }
              >
                <Route index element={<AllTasks />} />
                <Route path="all" element={<AllTasks />} />
                <Route path="today" element={<TodayTasks />} />
                <Route path="completed" element={<CompletedTasks />} />
                <Route path="deleted" element={<DeleteTasks />} />
              </Route>
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </AppProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
