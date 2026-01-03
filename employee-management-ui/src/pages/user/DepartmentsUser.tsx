import React, { useEffect, useState } from "react";
import { fetchDepartments } from "../../api/departmentApi";
import type { Department } from "../../types/department";
import { Box, Typography, Paper, Grid } from "@mui/material";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const DepartmentsUser: React.FC = () => {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadDepartments = async () => {
      try {
        const data = await fetchDepartments();
        setDepartments(data);
      } catch (err: any) {
        setError(err.message || "Failed to load departments");
      } finally {
        setLoading(false);
      }
    };
    loadDepartments();
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1 }}>
        <Navbar />
        <Box sx={{ p: 3 }}>
          <Typography variant="h4" mb={2}>
            Departments
          </Typography>

          {loading && <Typography>Loading...</Typography>}
          {error && <Typography color="error">{error}</Typography>}

          <Grid container spacing={2}>
            {departments.map((dept) => (
              <Grid item xs={12} sm={6} md={4} key={dept.id}>
                <Paper sx={{ p: 2, textAlign: "center" }}>
                  <Typography variant="h6">{dept.name}</Typography>
                  <Typography variant="body2">{dept.description}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default DepartmentsUser;
