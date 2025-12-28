import React from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const drawerWidth = 240;

const ProtectedLayout: React.FC = () => {
  const handleLogout = () => {
    console.log("Logout clicked");
    // Add your logout logic here
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Navbar onLogout={handleLogout} />
      <Sidebar />
      <Box 
        component="main" 
        sx={{ 
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          mt: "64px",
          backgroundColor: "#f5f7fa",
          minHeight: "calc(100vh - 64px)"
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default ProtectedLayout;