import React from "react";
import { Box, Typography, Grid, Paper, Button, Stack } from "@mui/material";
import { People, Apartment, Add, Assessment } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();

  // Mock data - in a real app, these would come from your API
  const stats = [
    { label: "Total Employees", value: "124", icon: <People color="primary" />, path: "/admin/employees" },
    { label: "Active Departments", value: "12", icon: <Apartment color="secondary" />, path: "/admin/departments" },
    { label: "New Requests", value: "5", icon: <Assessment color="success" />, path: "/admin/employees" },
  ];

  return (
    <Box>
      {/* Header Section */}
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <Box>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Admin Overview
          </Typography>
          <Typography color="text.secondary">
            Manage your organization's structure and personnel.
          </Typography>
        </Box>
        <Stack direction="row" spacing={2}>
          <Button 
            variant="contained" 
            startIcon={<Add />} 
            onClick={() => navigate("/admin/employees")}
            disableElevation
          >
            Add Employee
          </Button>
        </Stack>
      </Box>

      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper 
              sx={{ 
                p: 3, 
                borderRadius: 3, 
                display: 'flex', 
                alignItems: 'center', 
                gap: 2,
                cursor: 'pointer',
                transition: '0.3s',
                '&:hover': { boxShadow: 4, transform: 'translateY(-4px)' }
              }}
              onClick={() => navigate(stat.path)}
            >
              <Box sx={{ p: 1.5, borderRadius: 2, bgcolor: 'action.hover', display: 'flex' }}>
                {stat.icon}
              </Box>
              <Box>
                <Typography variant="h4" fontWeight="bold">{stat.value}</Typography>
                <Typography variant="body2" color="text.secondary">{stat.label}</Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Quick Links / Recent Activity Placeholder */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3, borderRadius: 3, minHeight: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px dashed #e0e0e0', bgcolor: 'transparent' }}>
            <Typography color="text.disabled">Recent System Activity Chart (Coming Soon)</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, borderRadius: 3 }}>
            <Typography variant="h6" fontWeight="bold" mb={2}>Quick Actions</Typography>
            <Stack spacing={1}>
              <Button fullWidth variant="outlined" sx={{ justifyContent: 'flex-start' }} onClick={() => navigate("/admin/departments")}>
                Create New Department
              </Button>
              <Button fullWidth variant="outlined" sx={{ justifyContent: 'flex-start' }} color="inherit">
                Export Employee Data (CSV)
              </Button>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AdminDashboard;