import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import BusinessIcon from "@mui/icons-material/Business";

interface NavbarProps {
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLogout }) => {
  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: "#1976d2",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
      }}
    >
      <Toolbar>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <BusinessIcon sx={{ fontSize: 28 }} />
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ 
              fontWeight: 600,
              letterSpacing: 0.5
            }}
          >
            Employee Management System
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Button 
          color="inherit" 
          onClick={onLogout}
          startIcon={<LogoutIcon />}
          sx={{
            textTransform: "none",
            fontWeight: 500,
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.1)"
            }
          }}
        >
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;