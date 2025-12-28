import React, { useEffect, useState } from "react";
import { fetchDepartments } from "../api/departmentApi";
import type { Department } from "../types/department";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  CircularProgress,
  Box,
  Chip,
} from "@mui/material";
import EmployeeRow from "./EmployeeRow";

const DepartmentsTable: React.FC = () => {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchDepartments()
      .then((data) => setDepartments(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", p: 6 }}>
        <CircularProgress size={48} />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ p: 4, textAlign: "center" }}>
        <Typography color="error" variant="h6">
          {error}
        </Typography>
      </Box>
    );
  }

  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
            <TableCell 
              sx={{ 
                fontWeight: 700,
                fontSize: "0.875rem",
                color: "#1a237e",
                borderBottom: "2px solid #e0e0e0"
              }}
            >
              Department
            </TableCell>
            <TableCell 
              sx={{ 
                fontWeight: 700,
                fontSize: "0.875rem",
                color: "#1a237e",
                borderBottom: "2px solid #e0e0e0"
              }}
            >
              Cost Center
            </TableCell>
            <TableCell 
              sx={{ 
                fontWeight: 700,
                fontSize: "0.875rem",
                color: "#1a237e",
                borderBottom: "2px solid #e0e0e0"
              }}
            >
              First Name
            </TableCell>
            <TableCell 
              sx={{ 
                fontWeight: 700,
                fontSize: "0.875rem",
                color: "#1a237e",
                borderBottom: "2px solid #e0e0e0"
              }}
            >
              Last Name
            </TableCell>
            <TableCell 
              sx={{ 
                fontWeight: 700,
                fontSize: "0.875rem",
                color: "#1a237e",
                borderBottom: "2px solid #e0e0e0"
              }}
            >
              Email
            </TableCell>
            <TableCell 
              sx={{ 
                fontWeight: 700,
                fontSize: "0.875rem",
                color: "#1a237e",
                borderBottom: "2px solid #e0e0e0"
              }}
            >
              Status
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {departments.map((dept) =>
            (dept.employees || []).map((emp, index) => (
              <TableRow 
                key={emp.id}
                sx={{
                  "&:hover": {
                    backgroundColor: "#f9fafb"
                  },
                  "&:last-child td": {
                    borderBottom: 0
                  }
                }}
              >
                {index === 0 && (
                  <>
                    <TableCell 
                      rowSpan={dept.employees?.length || 1}
                      sx={{
                        fontWeight: 600,
                        color: "#1976d2",
                        backgroundColor: "#f0f7ff",
                        borderRight: "1px solid #e0e0e0"
                      }}
                    >
                      {dept.name}
                    </TableCell>
                    <TableCell 
                      rowSpan={dept.employees?.length || 1}
                      sx={{
                        backgroundColor: "#f0f7ff",
                        borderRight: "1px solid #e0e0e0"
                      }}
                    >
                      {dept.costCenter}
                    </TableCell>
                  </>
                )}
                <EmployeeRow employee={emp} />
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DepartmentsTable;