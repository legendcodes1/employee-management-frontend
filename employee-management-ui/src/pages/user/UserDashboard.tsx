import { Grid, Card, CardContent, Button, Box, Typography,} from "@mui/material";
import { People, Apartment, ArrowForward } from "@mui/icons-material";

const UserDashboard: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" fontWeight="bold" gutterBottom>Welcome back!</Typography>
      <Typography variant="body1" color="text.secondary" mb={4}>
        Here is what's happening in your organization today.
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card sx={{ borderRadius: 3, boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
            <CardContent sx={{ p: 3 }}>
              <People color="primary" sx={{ fontSize: 40, mb: 2 }} />
              <Typography variant="h6" fontWeight="bold">Colleagues</Typography>
              <Typography variant="body2" color="text.secondary" mb={2}>
                Browse the directory to find contact information for team members.
              </Typography>
              <Button endIcon={<ArrowForward />} variant="text">View Directory</Button>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Card sx={{ borderRadius: 3, boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
            <CardContent sx={{ p: 3 }}>
              <Apartment color="primary" sx={{ fontSize: 40, mb: 2 }} />
              <Typography variant="h6" fontWeight="bold">Departments</Typography>
              <Typography variant="body2" color="text.secondary" mb={2}>
                See how the organization is structured across different teams.
              </Typography>
              <Button endIcon={<ArrowForward />} variant="text">View Departments</Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserDashboard;