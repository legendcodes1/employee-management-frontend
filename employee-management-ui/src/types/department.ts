
import type { Employee } from "../types/employee";

export interface Department {
  id: string;
  name: string;
  costCenter: string;
  employees: Employee[]; // optional, because sometimes you may fetch departments without employees
}


