import React from "react";
import { Drawer, List, ListItemButton, ListItemText, ListItemIcon, Divider, Box } from "@mui/material";
import { Dashboard, People, Apartment } from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";

const drawerWidth = 300;

const Sidebar: React.FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  const menuItems = [
    { text: "Dashboard", icon: <Dashboard />, path: role === "ADMIN" ? "/dashboard"  : "/user/dashboard" },
    { text: "Employees", icon: <People />, path: role === "ADMIN" ? "/admin/employees" : "/user/employees" },
    { text: "Departments", icon: <Apartment />, path: role === "ADMIN" ? "/admin/departments" : "/user/departments" },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": { 
          width: drawerWidth, 
          boxSizing: "border-box",
          backgroundColor: "#f8f9fa", // Light grey background for professional look
          borderRight: "1px solid #e0e0e0"
        },
      }}
    >
      <Box sx={{ p: 3, fontWeight: 'bold', fontSize: '1.2rem', color: 'primary.main' }}>
        HR PORTAL
      </Box>
      <Divider />
      <List sx={{ px: 1 }}>
        {menuItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <ListItemButton 
              key={item.text} 
              onClick={() => navigate(item.path)}
              selected={isActive}
              sx={{
                borderRadius: 2,
                mb: 0.5,
                "&.Mui-selected": { bgcolor: "primary.light", color: "white" },
                "&.Mui-selected:hover": { bgcolor: "primary.main" },
              }}
            >
              <ListItemIcon sx={{ color: isActive ? "inherit" : "gray" }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} primaryTypographyProps={{ fontWeight: isActive ? 600 : 400 }} />
            </ListItemButton>
          );
        })}
      </List>
    </Drawer>
  );
};

export default Sidebar;
