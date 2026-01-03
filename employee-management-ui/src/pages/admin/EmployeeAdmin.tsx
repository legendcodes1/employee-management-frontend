import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Paper,
  TableContainer,
  Chip,
  Avatar,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
} from "@mui/material";
import { Edit, Delete, Add } from "@mui/icons-material";

import {
  fetchEmployees,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} from "../../api/employeeApi";
import { fetchDepartments } from "../../api/departmentApi";
import { fetchRoles } from "../../api/roleApi";
import type { Employee } from "../../types/employee";
import type { Department } from "../../types/department";
import type { Role } from "../../types/role";

const EmployeesAdmin: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [departments, setDepartments] = useState<Department[]>([]);
  const [roles, setRoles] = useState<Role[]>([]);

  const [editing, setEditing] = useState<Employee | null>(null);
  const [confirmDelete, setConfirmDelete] = useState<Employee | null>(null);

  // Load all employees, departments, roles
  const loadData = async () => {
    try {
      const [emps, depts, rls] = await Promise.all([
        fetchEmployees(),
        fetchDepartments(),
        fetchRoles(),
      ]);
      setEmployees(emps);
      setDepartments(depts);
      setRoles(rls);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // Handle save for Add/Edit
  const handleSave = async () => {
    if (!editing) return;

    if (!editing.departmentId || !editing.roleId) {
      alert("Please select a department and a role");
      return;
    }

    const payload = {
      firstName: editing.firstName,
      lastName: editing.lastName,
      email: editing.email,
      departmentId: editing.departmentId,
      roleId: editing.roleId,
    };

    try {
      if (editing.id) {
        await updateEmployee(editing.id, payload);
      } else {
        await createEmployee(payload);
      }
      setEditing(null);
      loadData();
    } catch (err) {
      console.error(err);
      alert("Failed to save employee. Check console for details.");
    }
  };

  // Handle delete
  const handleDelete = async () => {
    if (!confirmDelete) return;
    try {
      await deleteEmployee(confirmDelete.id);
      setConfirmDelete(null);
      loadData();
    } catch (err) {
      console.error(err);
      alert("Failed to delete employee.");
    }
  };

  // Open Add Employee dialog with defaults
  const handleAdd = () => {
    setEditing({
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      status: "ACTIVE",
      departmentId: departments[0]?.id || "",
      roleId: roles[0]?.id || "",
    } as Employee);
  };

  return (
    <Box>
      {/* Header */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
        <Typography variant="h4" fontWeight="bold">
          Employees
        </Typography>
        <Button variant="contained" startIcon={<Add />} onClick={handleAdd}>
          Add Employee
        </Button>
      </Box>

      {/* Employee Table */}
      <TableContainer component={Paper} variant="outlined">
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
                  <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                    <Avatar>{emp.firstName[0]}</Avatar>
                    <Box>
                      <Typography variant="subtitle2">
                        {emp.firstName} {emp.lastName}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {emp.email}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>

                <TableCell>{emp.departmentName || "Unassigned"}</TableCell>

                <TableCell>
                  <Chip
                    label={emp.status}
                    size="small"
                    color={emp.status === "ACTIVE" ? "success" : "default"}
                  />
                </TableCell>

                <TableCell align="right">
                  <IconButton size="small" onClick={() => setEditing(emp)}>
                    <Edit fontSize="small" />
                  </IconButton>
                  <IconButton
                    size="small"
                    color="error"
                    onClick={() => setConfirmDelete(emp)}
                  >
                    <Delete fontSize="small" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Add/Edit Dialog */}
      <Dialog open={!!editing} onClose={() => setEditing(null)} maxWidth="sm" fullWidth>
        <DialogTitle>{editing?.id ? "Edit Employee" : "Add Employee"}</DialogTitle>

        <DialogContent sx={{ display: "grid", gap: 2, mt: 1 }}>
          <TextField
            label="First Name"
            value={editing?.firstName || ""}
            onChange={(e) => setEditing({ ...editing!, firstName: e.target.value })}
          />
          <TextField
            label="Last Name"
            value={editing?.lastName || ""}
            onChange={(e) => setEditing({ ...editing!, lastName: e.target.value })}
          />
          <TextField
            label="Email"
            value={editing?.email || ""}
            onChange={(e) => setEditing({ ...editing!, email: e.target.value })}
          />

          <TextField
            select
            label="Department"
            value={editing?.departmentId || ""}
            onChange={(e) => setEditing({ ...editing!, departmentId: e.target.value })}
          >
            {departments.map((d) => (
              <MenuItem key={d.id} value={d.id}>
                {d.name}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            select
            label="Role"
            value={editing?.roleId || ""}
            onChange={(e) => setEditing({ ...editing!, roleId: e.target.value })}
          >
            {roles.map((r) => (
              <MenuItem key={r.id} value={r.id}>
                {r.name}
              </MenuItem>
            ))}
          </TextField>
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setEditing(null)}>Cancel</Button>
          <Button variant="contained" onClick={handleSave}>
            Save
          </Button>
        </DialogActions>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={!!confirmDelete} onClose={() => setConfirmDelete(null)}>
        <DialogTitle>Delete Employee</DialogTitle>
        <DialogContent>
          Delete{" "}
          <strong>
            {confirmDelete?.firstName} {confirmDelete?.lastName}
          </strong>
          ?
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setConfirmDelete(null)}>Cancel</Button>
          <Button color="error" variant="contained" onClick={handleDelete}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default EmployeesAdmin;
