import React from "react";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface SidebarProps {
  role: "ADMIN" | "USER";
}

const Sidebar: React.FC<SidebarProps> = ({ role }) => {
  const navigate = useNavigate();

  const items = role === "ADMIN"
    ? ["Dashboard", "Departments", "Employees"]
    : ["Dashboard", "My Info"];

  return (
    <Drawer
      variant="permanent"
      sx={{ width: 240, flexShrink: 0, "& .MuiDrawer-paper": { width: 240, boxSizing: "border-box" } }}
    >
      <List>
        {items.map((text) => (
          <ListItem button key={text} onClick={() => navigate(`/${text.toLowerCase()}`)}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
