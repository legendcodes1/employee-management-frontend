import type { Department } from "../types/department";

const BASE_URL = "http://localhost:8080/api";

export const fetchDepartments = async (): Promise<Department[]> => {
  const token = localStorage.getItem("token"); // JWT from login
  if (!token) throw new Error("No auth token found");

  const res = await fetch(`${BASE_URL}/departments`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`, // pass token
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch departments: ${res.statusText}`);
  }

  return res.json();
};
