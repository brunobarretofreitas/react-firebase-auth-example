import { Link, Route, Routes } from "react-router-dom";
import LoginPage from "../features/login/pages/Login";
import PrivateRoute from "./PrivateRoute";

function ApplicationRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <>
              <h1>HelloGalera</h1>
              <Link to="/settings">Settings</Link>
            </>
          </PrivateRoute>
        }
      />
      <Route
        path="/settings"
        element={
          <PrivateRoute>
            <h1>Pagina 2</h1>
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default ApplicationRoutes;
