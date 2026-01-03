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
import { Edit, Delete } from "@mui/icons-material";
import {
  fetchDepartments,
  createDepartment,
  updateDepartment,
  deleteDepartment,
} from "../../api/departmentApi";
import type { Department } from "../../types/department";

const DepartmentsAdmin: React.FC = () => {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [newDept, setNewDept] = useState("");
  const [creatingDept, setCreatingDept] = useState(false);
  const [newDeptName, setNewDeptName] = useState("");
  const [editingDept, setEditingDept] = useState<Department | null>(null);
  const [confirmDelete, setConfirmDelete] = useState<Department | null>(null);

  const loadDepartments = async () => {
    const data = await fetchDepartments();
    setDepartments(data);
  };

  useEffect(() => {
    loadDepartments();
  }, []);

  const handleCreate = async () => {
    if (!newDept.trim()) return;
    await createDepartment(newDept);
    setNewDept("");
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

        <Box sx={{ display: "flex", gap: 1 }}>
          <TextField
            size="small"
            placeholder="New department"
            value={newDept}
            onChange={(e) => setNewDept(e.target.value)}
          />
          <Button variant="contained" onClick={handleCreate}>
            Add
          </Button>
        </Box>
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
