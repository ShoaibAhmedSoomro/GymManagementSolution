import React, { useState } from 'react';
import { Button, Typography, Paper, Grid } from '@mui/material';
import QRCode from 'qrcode.react';

function QRCodeAttendance({ trainees, trainers }) {
  const [selectedPerson, setSelectedPerson] = useState(null);

  const generateQRCode = (person) => {
    setSelectedPerson(person);
  };

  const scanQRCode = () => {
    // In a real application, this would open the camera to scan a QR code
    alert('QR Code scanned successfully!');
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>Generate QR Code</Typography>
          {trainees.map((trainee) => (
            <Button key={trainee.id} onClick={() => generateQRCode(trainee)} variant="outlined" sx={{ m: 1 }}>
              {trainee.name}
            </Button>
          ))}
          {trainers.map((trainer) => (
            <Button key={trainer.id} onClick={() => generateQRCode(trainer)} variant="outlined" sx={{ m: 1 }}>
              {trainer.name}
            </Button>
          ))}
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>QR Code</Typography>
          {selectedPerson && (
            <div>
              <QRCode value={JSON.stringify(selectedPerson)} />
              <Typography variant="subtitle1" sx={{ mt: 2 }}>{selectedPerson.name}</Typography>
            </div>
          )}
          <Button onClick={scanQRCode} variant="contained" color="primary" sx={{ mt: 2 }}>
            Scan QR Code
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default QRCodeAttendance;