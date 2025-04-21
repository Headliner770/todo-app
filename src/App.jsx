import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Header } from "./components/Header/Header.jsx";
import { AccessManagement } from "./components/Auth/AccessManagement/AccessManagement.jsx";
import { TasksPage } from "./components/TasksPage/TasksPage.jsx";
import { CategoriesPage } from "./components/TasksPage/CategoriesPage/CategoriesPage.jsx";
import { TasksList } from "./components/TasksPage/TasksList/TasksList.jsx";
import { AppProvider } from "./components/Providers/AppProvider.jsx";
import { useAuth } from "./hooks/useAuth.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AllTasks = () => <TasksList filter="all" />;
const CompletedTasks = () => <TasksList filter="completed" />;
const DeleteTasks = () => <TasksList filter="deleted" />;
const NotFoundPage = () => <h2>Страница не найдена</h2>;

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
};

export default function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Header />
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
            <Route path="completed" element={<CompletedTasks />} />
            <Route path="deleted" element={<DeleteTasks />} />
            <Route path="categories" element={<CategoriesPage />} />
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
    </BrowserRouter>
  );
}
