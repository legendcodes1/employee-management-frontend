import React from "react";
import { Box, Typography, Grid, Paper, Container } from "@mui/material";

const DashboardPage: React.FC = () => {
  const stats = [
    {
      title: "Total Departments",
      value: "6",
      color: "#1976d2",
      bgColor: "#e3f2fd",
      icon: "🏢",
    },
    {
      title: "Total Employees",
      value: "42",
      color: "#9c27b0",
      bgColor: "#f3e5f5",
      icon: "👥",
    },
    {
      title: "Active Employees",
      value: "38",
      color: "#2e7d32",
      bgColor: "#e8f5e9",
      icon: "✅",
    },
  ];

  return (
    <Container maxWidth="xl">
      <Box sx={{ mb: 4 }}>
        <Typography 
          variant="h4" 
          sx={{ 
            fontWeight: 600,
            color: "#1a237e",
            mb: 1
          }}
        >
          Dashboard Overview
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Welcome back! Here's what's happening with your organization today.
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper 
              elevation={2}
              sx={{ 
                p: 3,
                borderRadius: 2,
                height: "100%",
                background: `linear-gradient(135deg, ${stat.bgColor} 0%, #ffffff 100%)`,
                border: `1px solid ${stat.bgColor}`,
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
                }
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: 2,
                    backgroundColor: stat.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.5rem",
                    mr: 2,
                  }}
                >
                  {stat.icon}
                </Box>
                <Typography 
                  variant="subtitle2" 
                  sx={{
                    color: "#546e7a",
                    fontWeight: 500,
                    textTransform: "uppercase",
                    letterSpacing: 0.5,
                    fontSize: "0.75rem"
                  }}
                >
                  {stat.title}
                </Typography>
              </Box>
              <Typography 
                variant="h3" 
                sx={{ 
                  fontWeight: 700,
                  color: stat.color,
                  mb: 1
                }}
              >
                {stat.value}
              </Typography>
              <Box
                sx={{
                  width: 40,
                  height: 4,
                  backgroundColor: stat.color,
                  borderRadius: 2,
                }}
              />
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid item xs={12} md={6}>
          <Paper 
            elevation={2}
            sx={{ 
              p: 3,
              borderRadius: 2,
              height: 300,
              display: "flex",
              flexDirection: "column"
            }}
          >
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 600,
                color: "#1a237e",
                mb: 2
              }}
            >
              Recent Activity
            </Typography>
            <Box sx={{ 
              flexGrow: 1, 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center",
              color: "#9e9e9e"
            }}>
              <Typography variant="body2">
                Activity feed coming soon...
              </Typography>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper 
            elevation={2}
            sx={{ 
              p: 3,
              borderRadius: 2,
              height: 300,
              display: "flex",
              flexDirection: "column"
            }}
          >
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 600,
                color: "#1a237e",
                mb: 2
              }}
            >
              Department Distribution
            </Typography>
            <Box sx={{ 
              flexGrow: 1, 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center",
              color: "#9e9e9e"
            }}>
              <Typography variant="body2">
                Chart visualization coming soon...
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DashboardPage;