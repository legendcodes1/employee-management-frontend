import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Table, TableHead, TableRow, TableCell, TableBody, IconButton, Paper, TableContainer, Chip, Avatar } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import { fetchEmployees, deleteEmployee } from "../../api/employeeApi";
import type { Employee } from "../../types/employee";
const EmployeesAdmin: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);

  const loadEmployees = async () => {
    try {
      const data = await fetchEmployees();
      setEmployees(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => { loadEmployees(); }, []);

  return (
  <TableContainer component={Paper} elevation={0} sx={{ border: "1px solid #eee", borderRadius: 2 }}>
  <Table>
    <TableHead sx={{ bgcolor: "#fafafa" }}>
      <TableRow>
        <TableCell>Employee</TableCell>
        <TableCell>Department</TableCell>
        <TableCell>Status</TableCell>
        <TableCell align="right">Actions</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {employees.map((emp) => (
        <TableRow key={emp.id} hover>
          <TableCell>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Avatar sx={{ bgcolor: 'secondary.main' }}>{emp.firstName[0]}</Avatar>
              <Box>
                <Typography variant="subtitle2">{emp.firstName} {emp.lastName}</Typography>
                <Typography variant="caption" color="text.secondary">{emp.email}</Typography>
              </Box>
            </Box>
          </TableCell>
          <TableCell>{emp.department?.name || 'Unassigned'}</TableCell>
          <TableCell>
            <Chip 
              label={emp.status} 
              size="small" 
              color={emp.status === "ACTIVE" ? "success" : "default"} 
            />
          </TableCell>
          <TableCell align="right">
            <IconButton size="small"><Edit fontSize="small" /></IconButton>
            <IconButton size="small" color="error"><Delete fontSize="small" /></IconButton>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>
  );
};

export default EmployeesAdmin;
