import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import DepartmentsTable from "../components/DepartmentTable";

const DepartmentsPage: React.FC = () => {
  return (
    <Box>
      {/* Page Header */}
      <Typography variant="h4" gutterBottom>
        Departments
      </Typography>

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ mb: 3 }}
      >
        View departments and their associated employees.
      </Typography>

      {/* Table Container */}
      <Paper
        elevation={0}
        sx={{
          p: 2,
          border: "1px solid #e0e0e0",
          borderRadius: 2,
        }}
      >
        <DepartmentsTable />
      </Paper>
    </Box>
  );
};

export default DepartmentsPage;
