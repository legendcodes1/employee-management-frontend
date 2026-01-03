// import React from "react";
// import { Box } from "@mui/material";
// import Sidebar from "./Sidebar";
// import Navbar from "./Navbar";

// interface LayoutProps {
//   children: React.ReactNode;
//   onLogout: () => void;
// }

// const Layout: React.FC<LayoutProps> = ({ children, onLogout }) => {
//   const drawerWidth = 240;

//   return (
//     <Box sx={{ display: "flex", minHeight: "100vh" }}>
//       <Navbar onLogout={onLogout} />
//       <Sidebar />
//       <Box 
//         component="main" 
//         sx={{ 
//           flexGrow: 1,
//           p: 3,
//           width: { sm: `calc(100% - ${drawerWidth}px)` },
//           ml: { sm: `${drawerWidth}px` },
//           mt: "64px",
//           backgroundColor: "#f5f7fa",
//           minHeight: "calc(100vh - 64px)"
//         }}
//       >
//         {children}
//       </Box>
//     </Box>
//   );
// };

// export default Layout;