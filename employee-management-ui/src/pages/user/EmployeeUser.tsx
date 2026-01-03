import React, { useEffect, useState } from "react";
import { 
  Box, Typography, Paper, Table, TableHead, TableRow, 
  TableCell, TableBody, TextField, InputAdornment, Avatar, TableContainer
} from "@mui/material";
import { Search } from "@mui/icons-material";
import { fetchEmployees } from "../../api/employeeApi";
import type { Employee } from "../../types/employee";
import EmployeeRow from "../../components/EmployeeRow";

const EmployeesUser: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchEmployees().then(setEmployees).catch(console.error);
  }, []);

  const filteredEmployees = employees.filter(emp => 
    `${emp.firstName} ${emp.lastName}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box>
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box>
          <Typography variant="h4" fontWeight="bold">Employee Directory</Typography>
          <Typography color="text.secondary">View and connect with your colleagues.</Typography>
        </Box>
        <TextField
          size="small"
          placeholder="Search colleagues..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search fontSize="small" />
              </InputAdornment>
            ),
          }}
          sx={{ width: 300, bgcolor: 'white' }}
        />
      </Box>

      <TableContainer component={Paper} elevation={0} sx={{ borderRadius: 3, border: "1px solid #e0e0e0" }}>
        <Table>
          <TableHead sx={{ bgcolor: "#fcfcfc" }}>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>Employee</TableCell>
               <TableCell sx={{ fontWeight: 'bold' }}>First Name</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Last Name</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Email</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredEmployees.map((emp) => (
              <TableRow key={emp.id} hover>
                <TableCell sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Avatar sx={{ width: 32, height: 32, fontSize: '0.8rem', bgcolor: 'primary.main' }}>
                    {emp.firstName[0]}{emp.lastName[0]}
                  </Avatar>
                  <Typography variant="body2" fontWeight={500}>
                    {emp.firstName} {emp.lastName}
                  </Typography>
                </TableCell>
                {/* Reusing your EmployeeRow component logic but with cleaner structure */}
                <EmployeeRow employee={emp} /> 
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default EmployeesUser;