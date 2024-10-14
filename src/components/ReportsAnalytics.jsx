import React from 'react';
import { Typography, Paper, Grid, List, ListItem, ListItemText } from '@mui/material';

function ReportsAnalytics({ trainees, payments }) {
  const generateAttendanceReport = () => {
    // This is a placeholder. In a real application, you'd have actual attendance data.
    return trainees.map(trainee => ({
      name: trainee.name,
      attendanceRate: Math.floor(Math.random() * 100) + '%'
    }));
  };

  const generatePaymentReport = () => {
    const totalCollected = payments.reduce((sum, payment) => sum + Number(payment.amount), 0);
    const outstandingPayments = payments.filter(payment => payment.status === 'unpaid').length;
    return { totalCollected, outstandingPayments };
  };

  const attendanceReport = generateAttendanceReport();
  const paymentReport = generatePaymentReport();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>Attendance Report</Typography>
          <List>
            {attendanceReport.map((record, index) => (
              <ListItem key={index}>
                <ListItemText primary={record.name} secondary={`Attendance Rate: ${record.attendanceRate}`} />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>Payment Report</Typography>
          <Typography>Total Fees Collected: ${paymentReport.totalCollected}</Typography>
          <Typography>Outstanding Payments: {paymentReport.outstandingPayments}</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default ReportsAnalytics;