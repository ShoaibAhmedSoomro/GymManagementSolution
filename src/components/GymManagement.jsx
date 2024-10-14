import React, { useState } from 'react';
import { TextField, Button, Typography, Paper, Grid } from '@mui/material';

function GymManagement() {
  const [membershipPlan, setMembershipPlan] = useState({ name: '', duration: '', price: '' });
  const [voucherCode, setVoucherCode] = useState('');
  const [customization, setCustomization] = useState({ name: '', color: '', logo: '' });

  const handleCreateMembershipPlan = (e) => {
    e.preventDefault();
    // In a real application, you'd save this to a database
    console.log('New Membership Plan:', membershipPlan);
    setMembershipPlan({ name: '', duration: '', price: '' });
  };

  const handleGenerateVoucher = () => {
    // In a real application, this would generate a unique code
    setVoucherCode('FREE-' + Math.random().toString(36).substr(2, 8).toUpperCase());
  };

  const handleCustomize = (e) => {
    e.preventDefault();
    // In a real application, you'd apply these customizations
    console.log('Customization:', customization);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>Create Membership Plan</Typography>
          <form onSubmit={handleCreateMembershipPlan}>
            <TextField
              fullWidth
              margin="normal"
              label="Plan Name"
              value={membershipPlan.name}
              onChange={(e) => setMembershipPlan({ ...membershipPlan, name: e.target.value })}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Duration (in months)"
              type="number"
              value={membershipPlan.duration}
              onChange={(e) => setMembershipPlan({ ...membershipPlan, duration: e.target.value })}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Price"
              type="number"
              value={membershipPlan.price}
              onChange={(e) => setMembershipPlan({ ...membershipPlan, price: e.target.value })}
            />
            <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
              Create Plan
            </Button>
          </form>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>Generate Voucher</Typography>
          <Button onClick={handleGenerateVoucher} variant="contained" color="secondary" sx={{ mt: 2 }}>
            Generate Voucher
          </Button>
          {voucherCode && (
            <Typography variant="subtitle1" sx={{ mt: 2 }}>
              Voucher Code: {voucherCode}
            </Typography>
          )}
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>Customize Application</Typography>
          <form onSubmit={handleCustomize}>
            <TextField
              fullWidth
              margin="normal"
              label="Application Name"
              value={customization.name}
              onChange={(e) => setCustomization({ ...customization, name: e.target.value })}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Color Scheme"
              value={customization.color}
              onChange={(e) => setCustomization({ ...customization, color: e.target.value })}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Logo URL"
              value={customization.logo}
              onChange={(e) => setCustomization({ ...customization, logo: e.target.value })}
            />
            <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
              Apply Customization
            </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default GymManagement;