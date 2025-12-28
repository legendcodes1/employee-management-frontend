import type { Department } from "../types/department";

const BASE_URL = "http://localhost:8080/api";

export const fetchDepartments = async (): Promise<Department[]> => {
  const res = await fetch(`${BASE_URL}/departments`);
  if (!res.ok) throw new Error("Failed to fetch departments");
  return res.json();
};
