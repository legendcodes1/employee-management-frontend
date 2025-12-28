import React from "react";
import { TableCell, Chip } from "@mui/material";
import type { Employee } from "../types/employee";

interface EmployeeRowProps {
  employee: Employee;
}

const EmployeeRow: React.FC<EmployeeRowProps> = ({ employee }) => {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "active":
        return "success";
      case "inactive":
        return "default";
      case "pending":
        return "warning";
      default:
        return "default";
    }
  };

  return (
    <>
      <TableCell sx={{ fontSize: "0.875rem" }}>
        {employee.firstName}
      </TableCell>
      <TableCell sx={{ fontSize: "0.875rem" }}>
        {employee.lastName}
      </TableCell>
      <TableCell sx={{ fontSize: "0.875rem", color: "#546e7a" }}>
        {employee.email}
      </TableCell>
      <TableCell>
        <Chip 
          label={employee.status} 
          color={getStatusColor(employee.status)}
          size="small"
          sx={{ 
            fontWeight: 500,
            minWidth: 70
          }}
        />
      </TableCell>
    </>
  );
};

export default EmployeeRow;