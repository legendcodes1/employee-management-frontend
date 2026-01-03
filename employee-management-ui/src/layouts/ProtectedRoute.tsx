import React from "react";
import { Box } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";


const ProtectedLayout: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/");
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Navbar onLogout={handleLogout} />
      <Sidebar />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          mt: "64px",
          px: 2,              // 👈 controlled spacing
          py: 3,
          backgroundColor: "#f5f7fa",
          minHeight: "calc(100vh - 64px)",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default ProtectedLayout;
