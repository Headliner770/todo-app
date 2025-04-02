import { Header } from "./components/Header/Header.jsx";
import { AppContent } from "./components/AppContent/AppContent.jsx";
import { ThemeProvider } from "./components/Providers/ThemeProvider.jsx";
import style from "./App.module.css";

export default function App() {
  return (
    <ThemeProvider>
      <>
        <Header />
        <AppContent />
      </>
    </ThemeProvider>
  );
}
