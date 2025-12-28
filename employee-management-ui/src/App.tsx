import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import DepartmentsPage from "./pages/DepartmentsPage";
import ProtectedLayout from "./layouts/ProtectedRoute";
const App = () => {
  return (
    <BrowserRouter>
      <CssBaseline />

      <Routes>
        {/* PUBLIC */}
        <Route path="/" element={<LoginPage />} />

        {/* PROTECTED */}
        <Route element={<ProtectedLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/departments" element={<DepartmentsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
