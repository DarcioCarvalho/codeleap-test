import { Navigate, Route, Routes } from "react-router-dom";

import { Signup } from "../pages/Signup";
import { Main } from "../pages/Main";
import { ProtectedRoute } from "./ProtectedRoute";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route
        path="/main"
        element={<ProtectedRoute children={<Main />} />}
      />
      <Route
        path="/*"
        element={<ProtectedRoute children={<Navigate to="/main" />} />}
      />

    </Routes>
  );
}