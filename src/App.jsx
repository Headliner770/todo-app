import { Header } from "./components/Header/Header.jsx";
import { AppContent } from "./components/AppContent/AppContent.jsx";
import { ThemeProvider } from "./components/Providers/ThemeProvider.jsx";
import { AccessManagement } from "./components/Auth/AccessManagement/AccessManagement.jsx";

export default function App() {
  return (
    <ThemeProvider>
      <Header />
      <AccessManagement />
      {/* <AppContent /> */}
    </ThemeProvider>
  );
}
