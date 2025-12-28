import React, { useEffect, useState } from "react";
import UserLayout from "../layouts/UserLayout";
import DepartmentsTable from "../components/DepartmentTable";
import { fetchDepartments } from "../api/departmentApi";
import type { Department } from "../types/department";

const UserDashboard: React.FC = () => {
  const [departments, setDepartments] = useState<Department[]>([]);

  useEffect(() => {
    fetchDepartments().then(setDepartments);
  }, []);

  return (
    <UserLayout>
      <h1>My Dashboard</h1>
      <DepartmentsTable departments={departments} editable={false} />
    </UserLayout>
  );
};

export default UserDashboard;
