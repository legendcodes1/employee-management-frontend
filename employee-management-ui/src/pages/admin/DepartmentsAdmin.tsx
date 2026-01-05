import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Grid,
  Card,
  CardContent,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { Edit, Delete, Add } from "@mui/icons-material";

import {
  fetchDepartments,
  createDepartment,
  updateDepartment,
  deleteDepartment,
} from "../../api/departmentApi";

import type { Department } from "../../types/department";

const DepartmentsAdmin: React.FC = () => {
  const [departments, setDepartments] = useState<Department[]>([]);

  const [createOpen, setCreateOpen] = useState(false);
  const [newDeptName, setNewDeptName] = useState("");

  const [editingDept, setEditingDept] = useState<Department | null>(null);
  const [confirmDelete, setConfirmDelete] = useState<Department | null>(null);

  const loadDepartments = async () => {
    try {
      setDepartments(await fetchDepartments());
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadDepartments();
  }, []);

  const handleCreate = async () => {
    if (!newDeptName.trim()) return;

    await createDepartment(newDeptName.trim());
    setNewDeptName("");
    setCreateOpen(false);
    loadDepartments();
  };

  const handleUpdate = async () => {
    if (!editingDept) return;

    await updateDepartment(editingDept.id, editingDept.name);
    setEditingDept(null);
    loadDepartments();
  };

  const handleDelete = async () => {
    if (!confirmDelete) return;

    await deleteDepartment(confirmDelete.id);
    setConfirmDelete(null);
    loadDepartments();
  };

  return (
    <Box>
      {/* Header */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 4 }}>
        <Typography variant="h4" fontWeight="bold">
          Departments
        </Typography>

        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={() => setCreateOpen(true)}
        >
          Add Department
        </Button>
      </Box>

      {/* Cards */}
      <Grid container spacing={2}>
        {departments.map((d) => (
          <Grid item xs={12} sm={6} md={4} key={d.id}>
            <Card variant="outlined">
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6">{d.name}</Typography>

                <Box>
                  <IconButton size="small" onClick={() => setEditingDept(d)}>
                    <Edit fontSize="small" />
                  </IconButton>
                  <IconButton
                    size="small"
                    color="error"
                    onClick={() => setConfirmDelete(d)}
                  >
                    <Delete fontSize="small" />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* CREATE DIALOG */}
      <Dialog open={createOpen} onClose={() => setCreateOpen(false)}>
        <DialogTitle>Add Department</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            fullWidth
            label="Department Name"
            value={newDeptName}
            onChange={(e) => setNewDeptName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setCreateOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleCreate}>
            Save
          </Button>
        </DialogActions>
      </Dialog>

      {/* EDIT DIALOG */}
      <Dialog open={!!editingDept} onClose={() => setEditingDept(null)}>
        <DialogTitle>Edit Department</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            fullWidth
            value={editingDept?.name || ""}
            onChange={(e) =>
              setEditingDept({ ...editingDept!, name: e.target.value })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditingDept(null)}>Cancel</Button>
          <Button variant="contained" onClick={handleUpdate}>
            Save
          </Button>
        </DialogActions>
      </Dialog>

      {/* DELETE CONFIRM */}
      <Dialog open={!!confirmDelete} onClose={() => setConfirmDelete(null)}>
        <DialogTitle>Delete Department</DialogTitle>
        <DialogContent>
          Are you sure you want to delete{" "}
          <strong>{confirmDelete?.name}</strong>?
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

export default DepartmentsAdmin;
