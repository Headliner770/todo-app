import Header from "./components/Header/Header.jsx";
import "./App.css";
import Enter from "./components/auth/Enter.jsx";
// import { Route, Routes } from "react-router-dom";
// import PrivateRoute from "./utils/router/privateRouter";
// import Authorization from "./components/auth/login/Authorization.jsx";
// import Registration from "./components/auth/resgister/Registation.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Enter />
        {/* <div>
          <Routes>
            <Route element={<PrivateRoute />}>
              <Route path="/" element={<Home />} />
            </Route>
            <Route path="login" element={<Authorization />} />
            <Route path="register" element={<Registration />} />
          </Routes>
        </div> */}
      </main>
    </>
  );
}
