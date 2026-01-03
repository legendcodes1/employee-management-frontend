import type { Role } from "../types/role";

const BASE_URL = "http://localhost:8080/api";

export const fetchRoles = async (): Promise<Role[]> => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("No auth token");

  const res = await fetch(`${BASE_URL}/roles`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) throw new Error("Failed to fetch roles");
  return res.json();
};
