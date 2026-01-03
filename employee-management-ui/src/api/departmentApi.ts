import type { Department } from "../types/department";

const BASE_URL = "http://localhost:8080/api";

// Fetch all departments
export const fetchDepartments = async (): Promise<Department[]> => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("No auth token found");

  const res = await fetch(`${BASE_URL}/departments`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
  });

  if (!res.ok) throw new Error(`Failed to fetch departments: ${res.statusText}`);
  return res.json();
};

// Create a new department
export const createDepartment = async (name: string): Promise<Department> => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("No auth token found");

  const res = await fetch(`${BASE_URL}/departments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify({ name }),
  });

  if (!res.ok) throw new Error(`Failed to create department: ${res.statusText}`);
  return res.json();
};

// Update a department
export const updateDepartment = async (id: string, name: string): Promise<Department> => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("No auth token found");

  const res = await fetch(`${BASE_URL}/departments/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify({ name }),
  });

  if (!res.ok) throw new Error(`Failed to update department: ${res.statusText}`);
  return res.json();
};

// Delete a department
export const deleteDepartment = async (id: string): Promise<void> => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("No auth token found");

  const res = await fetch(`${BASE_URL}/departments/${id}`, {
    method: "DELETE",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });

  if (!res.ok) throw new Error(`Failed to delete department: ${res.statusText}`);
};
