import React from "react";
import { Box } from "@mui/material";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const UserLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Navbar />
      <Sidebar role="USER" />
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8, ml: { md: "240px" }, backgroundColor: "#fafafa", minHeight: "100vh" }}>
        {children}
      </Box>
    </Box>
  );
};

export default UserLayout;
