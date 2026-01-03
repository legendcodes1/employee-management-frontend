import type { Employee } from "../types/employee";
import type { Role } from "../types/role";

const BASE_URL = "http://localhost:8080/api";

const getToken = () => localStorage.getItem("token");

// --- Employees ---
export const fetchEmployees = async (): Promise<Employee[]> => {
  const res = await fetch(`${BASE_URL}/employees`, {
    headers: { Authorization: `Bearer ${getToken()}` },
  });
  if (!res.ok) throw new Error("Failed to fetch employees");
  return res.json();
};

export const createEmployee = async (employee: Partial<Employee>): Promise<Employee> => {
  const res = await fetch(`${BASE_URL}/employees`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(employee),
  });
  if (!res.ok) throw new Error("Failed to create employee");
  return res.json();
};

export const updateEmployee = async (id: string, employee: Partial<Employee>): Promise<Employee> => {
  const res = await fetch(`${BASE_URL}/employees/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(employee),
  });
  if (!res.ok) throw new Error("Failed to update employee");
  return res.json();
};

export const deleteEmployee = async (id: string): Promise<void> => {
  const res = await fetch(`${BASE_URL}/employees/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${getToken()}` },
  });
  if (!res.ok) throw new Error("Failed to delete employee");
};

// --- Roles ---
export const fetchRoles = async (): Promise<Role[]> => {
  const res = await fetch(`${BASE_URL}/roles`, {
    headers: { Authorization: `Bearer ${getToken()}` },
  });
  if (!res.ok) throw new Error("Failed to fetch roles");
  return res.json();
};
