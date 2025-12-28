import { Grid, Paper, Typography } from "@mui/material";

const StatCard = ({ title, value }: { title: string; value: number }) => (
  <Paper sx={{ p: 3 }}>
    <Typography color="text.secondary" variant="subtitle2">
      {title}
    </Typography>
    <Typography variant="h4" fontWeight={600}>
      {value}
    </Typography>
  </Paper>
);

const AdminDashboard = () => {
  return (
    <>
      <Typography variant="h5" fontWeight={600} mb={3}>
        Admin Dashboard
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <StatCard title="Total Employees" value={42} />
        </Grid>
        <Grid item xs={12} md={4}>
          <StatCard title="Departments" value={6} />
        </Grid>
        <Grid item xs={12} md={4}>
          <StatCard title="Active Employees" value={39} />
        </Grid>
      </Grid>
    </>
  );
};

export default AdminDashboard;
