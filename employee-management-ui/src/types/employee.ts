import type { Department } from './department';
// import { Role } from './role';

export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  status: "ACTIVE" | "INACTIVE";
  department: Department["name"]; // optional, sometimes employees may not have a department loaded
//   role?: Role;             // optional
  createdAt: string;       // use string for date from API
}
