import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import AdminDashboard from "./pages/admin/AdminDashboard";
import UserDashboard from "./pages/user/UserDashboard";
import ProtectedRoute from "./layouts/ProtectedRoute";
import DepartmentsAdmin from "./pages/admin/DepartmentsAdmin";
import EmployeesAdmin from "./pages/admin/EmployeeAdmin";
import DepartmentsUser from "./pages/user/DepartmentsUser";
import EmployeesUser from "./pages/user/EmployeeUser";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/departments" element={<DepartmentsAdmin />} />
          <Route path="/admin/employees" element={<EmployeesAdmin />} />

          <Route path="/user" element={<UserDashboard />} />
           <Route path="/user" element={<UserDashboard />} />
          <Route path="/user/employees" element={<EmployeesUser/>} />
          <Route path="/user/departments" element={<DepartmentsUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
