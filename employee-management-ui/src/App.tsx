import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";
import ProtectedRoute from "./layouts/ProtectedRoute";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage />} />

      {/* Admin */}
      <Route element={<ProtectedRoute role="ADMIN" />}>
        <Route path="/admin" element={<AdminDashboard />} />
      </Route>

      {/* User */}
      <Route element={<ProtectedRoute role="USER" />}>
        <Route path="/user" element={<UserDashboard />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
