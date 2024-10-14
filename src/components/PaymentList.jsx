import React, { useState, useRef } from 'react';
import { TextField, Button, List, ListItem, ListItemText, Typography, Paper, Grid, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useReactToPrint } from 'react-to-print';

function PaymentList({ payments, setPayments, trainees }) {
  const [newPayment, setNewPayment] = useState({
    traineeName: '',
    amount: '',
    month: '',
    year: '',
    status: 'unpaid'
  });

  const invoiceRef = useRef();

  const handleAddPayment = (e) => {
    e.preventDefault();
    setPayments([...payments, { ...newPayment, id: Date.now() }]);
    setNewPayment({
      traineeName: '',
      amount: '',
      month: '',
      year: '',
      status: 'unpaid'
    });
  };

  const togglePaymentStatus = (id) => {
    setPayments(payments.map(payment => 
      payment.id === id 
        ? { ...payment, status: payment.status === 'paid' ? 'unpaid' : 'paid' }
        : payment
    ));
  };

  const handlePrint = useReactToPrint({
    content: () => invoiceRef.current,
  });

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>Add New Payment</Typography>
          <form onSubmit={handleAddPayment}>
            <FormControl fullWidth margin="normal">
              <InputLabel>Trainee Name</InputLabel>
              <Select
                value={newPayment.traineeName}
                onChange={(e) => setNewPayment({ ...newPayment, traineeName: e.target.value })}
              >
                {trainees.map((trainee) => (
                  <MenuItem key={trainee.id} value={trainee.name}>{trainee.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              fullWidth
              margin="normal"
              label="Amount"
              type="number"
              value={newPayment.amount}
              onChange={(e) => setNewPayment({ ...newPayment, amount: e.target.value })}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Month"
              value={newPayment.month}
              onChange={(e) => setNewPayment({ ...newPayment, month: e.target.value })}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Year"
              type="number"
              value={newPayment.year}
              onChange={(e) => setNewPayment({ ...newPayment, year: e.target.value })}
            />
            <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
              Add Payment
            </Button>
          </form>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>Payments</Typography>
          <List>
            {payments.map((payment) => (
              <ListItem key={payment.id}>
                <ListItemText
                  primary={`${payment.traineeName} - $${payment.amount}`}
                  secondary={`${payment.month} ${payment.year}`}
                />
                <Button onClick={() => togglePaymentStatus(payment.id)} color={payment.status === 'paid' ? 'success' : 'error'} variant="contained">
                  {payment.status === 'paid' ? 'Paid' : 'Unpaid'}
                </Button>
                <Button onClick={handlePrint} color="primary" variant="outlined" sx={{ ml: 1 }}>
                  Print Invoice
                </Button>
              </ListItem>
            ))}
          </List>
        </Paper>
      </Grid>
      <div style={{ display: 'none' }}>
        <div ref={invoiceRef}>
          <Typography variant="h4" gutterBottom>Invoice</Typography>
          {payments.map((payment) => (
            <div key={payment.id}>
              <Typography variant="h6">{payment.traineeName}</Typography>
              <Typography>Amount: ${payment.amount}</Typography>
              <Typography>Month: {payment.month}</Typography>
              <Typography>Year: {payment.year}</Typography>
              <Typography>Status: {payment.status}</Typography>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </Grid>
  );
}

export default PaymentList;