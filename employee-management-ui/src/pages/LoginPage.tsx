import React from "react";
import { 
  Button, 
  TextField, 
  Box, 
  Typography, 
  Paper,
  InputAdornment,
  IconButton
} from "@mui/material";

const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <Box 
      sx={{ 
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        p: 2
      }}
    >
      <Paper 
        elevation={8}
        sx={{ 
          width: "100%",
          maxWidth: 420,
          p: 4,
          borderRadius: 3,
          boxShadow: "0 8px 32px rgba(0,0,0,0.1)"
        }}
      >
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Box 
            sx={{ 
              display: "inline-flex",
              width: 64,
              height: 64,
              borderRadius: "50%",
              backgroundColor: "#e3f2fd",
              alignItems: "center",
              justifyContent: "center",
              mb: 2,
              fontSize: "2rem"
            }}
          >
            🏢
          </Box>
          <Typography 
            variant="h4" 
            sx={{ 
              fontWeight: 700,
              color: "#1a237e",
              mb: 1
            }}
          >
            Welcome Back
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Sign in to your Employee Management account
          </Typography>
        </Box>

        <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <TextField 
            label="Email Address" 
            variant="outlined"
            type="email"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <span style={{ fontSize: "1.2rem" }}>📧</span>
                </InputAdornment>
              ),
            }}
          />
          
          <TextField 
            label="Password" 
            type={showPassword ? "text" : "password"}
            variant="outlined"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <span style={{ fontSize: "1.2rem" }}>🔒</span>
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    <span style={{ fontSize: "1.2rem" }}>
                      {showPassword ? "👁️" : "👁️‍🗨️"}
                    </span>
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Button 
            variant="contained" 
            size="large"
            fullWidth
            sx={{
              py: 1.5,
              textTransform: "none",
              fontSize: "1rem",
              fontWeight: 600,
              borderRadius: 2,
              backgroundColor: "#1976d2",
              boxShadow: "0 4px 12px rgba(25, 118, 210, 0.3)",
              "&:hover": {
                backgroundColor: "#1565c0",
                boxShadow: "0 6px 16px rgba(25, 118, 210, 0.4)",
              }
            }}
          >
            Sign In
          </Button>
        </Box>

        <Box sx={{ mt: 3, textAlign: "center" }}>
          <Typography variant="body2" color="text.secondary">
            Forgot your password? 
            <Button 
              size="small" 
              sx={{ 
                textTransform: "none",
                ml: 0.5,
                fontWeight: 500
              }}
            >
              Reset it
            </Button>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default LoginPage;