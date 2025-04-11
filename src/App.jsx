import { Header } from "./components/Header/Header.jsx";
import { ThemeProvider } from "./components/Providers/ThemeProvider.jsx";
import { AccessManagement } from "./components/Auth/AccessManagement/AccessManagement.jsx";
import { TasksPage } from "./components/TasksPage/TasksPage.jsx";

export default function App() {
  return (
    <ThemeProvider>
      <Header />
      <AccessManagement />
      <TasksPage />
    </ThemeProvider>
  );
}
