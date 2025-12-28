import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { NavLink } from "react-router-dom";

const drawerWidth = 240;

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          bgcolor: "#0f172a",
          color: "white",
        },
      }}
    >
      <Toolbar />
      <List>
        {[
          { label: "Dashboard", path: "/admin/dashboard" },
          { label: "Departments", path: "/admin/departments" },
          { label: "Employees", path: "/admin/employees" },
        ].map((item) => (
          <ListItemButton
            key={item.path}
            component={NavLink}
            to={item.path}
            sx={{
              "&.active": {
                bgcolor: "#1e293b",
              },
            }}
          >
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
