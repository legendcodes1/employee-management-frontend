import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { 
  Button, TextField, Box, Typography, Paper,
  InputAdornment, IconButton
} from "@mui/material";

const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/auth/login", {
        email,
        password,
      });
      const { token, role } = res.data;

      localStorage.setItem("token", token);
      localStorage.setItem("role", role);

      if (role === "ADMIN") navigate("/admin");
      else navigate("/user");
    } catch (err: any) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", p: 2 }}>
      <Paper elevation={8} sx={{ width: "100%", maxWidth: 420, p: 4, borderRadius: 3, boxShadow: "0 8px 32px rgba(0,0,0,0.1)" }}>
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Box sx={{ display: "inline-flex", width: 64, height: 64, borderRadius: "50%", backgroundColor: "#e3f2fd", alignItems: "center", justifyContent: "center", mb: 2, fontSize: "2rem" }}>
            🏢
          </Box>
          <Typography variant="h4" sx={{ fontWeight: 700, color: "#1a237e", mb: 1 }}>
            Welcome Back
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Sign in to your Employee Management account
          </Typography>
        </Box>

        <Box component="form" onSubmit={handleLogin} sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <TextField 
            label="Email Address" 
            variant="outlined"
            type="email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  📧
                </InputAdornment>
              ),
            }}
          />
          
          <TextField 
            label="Password" 
            type={showPassword ? "text" : "password"}
            variant="outlined"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              startAdornment: <InputAdornment position="start">🔒</InputAdornment>,
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                    {showPassword ? "👁️" : "👁️‍🗨️"}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          {error && <Typography color="error">{error}</Typography>}

          <Button type="submit" variant="contained" size="large" fullWidth sx={{ py: 1.5, textTransform: "none", fontSize: "1rem", fontWeight: 600, borderRadius: 2, backgroundColor: "#1976d2", "&:hover": { backgroundColor: "#1565c0" } }}>
            Sign In
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default LoginPage;
