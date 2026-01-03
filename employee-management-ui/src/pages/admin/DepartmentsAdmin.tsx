import React, { useEffect, useState } from "react";
import { fetchDepartments, createDepartment } from "../../api/departmentApi";
import type { Department } from "../../types/department";

import { Card, Grid, Chip, Box, Typography, Button, TextField, CardContent } from "@mui/material";

const DepartmentsAdmin: React.FC = () => {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [newDept, setNewDept] = useState("");

  const loadDepartments = async () => {
    const data = await fetchDepartments();
    setDepartments(data);
  };

  const handleAdd = async () => {
    if (!newDept) return;
    await createDepartment({ name: newDept });
    setNewDept("");
    loadDepartments();
  };

  useEffect(() => {
    loadDepartments();
  }, []);

return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4 }}>
        <Typography variant="h4" fontWeight="bold">Departments</Typography>
        <Box sx={{ display: "flex", gap: 1 }}>
          <TextField 
            size="small" 
            placeholder="Search departments..." 
            value={newDept} 
            onChange={(e) => setNewDept(e.target.value)} 
          />
          <Button variant="contained" onClick={handleAdd} disableElevation>Add Department</Button>
        </Box>
      </Box>

      <Grid container spacing={2}>
        {departments.map(d => (
          <Grid item xs={12} sm={6} md={4} key={d.id}>
            <Card variant="outlined" sx={{ '&:hover': { boxShadow: 3 } }}>
              <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h6">{d.name}</Typography>
                <Chip label="Active" color="success" size="small" variant="outlined" />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DepartmentsAdmin;
