import React, { useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText, Typography, Paper, Grid } from '@mui/material';

function TrainerList({ trainers, setTrainers }) {
  const [newTrainer, setNewTrainer] = useState({ name: '', specialization: '' });

  const handleAddTrainer = (e) => {
    e.preventDefault();
    setTrainers([...trainers, { ...newTrainer, id: Date.now() }]);
    setNewTrainer({ name: '', specialization: '' });
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>Add New Trainer</Typography>
          <form onSubmit={handleAddTrainer}>
            <TextField
              fullWidth
              margin="normal"
              label="Trainer Name"
              value={newTrainer.name}
              onChange={(e) => setNewTrainer({ ...newTrainer, name: e.target.value })}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Specialization"
              value={newTrainer.specialization}
              onChange={(e) => setNewTrainer({ ...newTrainer, specialization: e.target.value })}
            />
            <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
              Add Trainer
            </Button>
          </form>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>Trainers</Typography>
          <List>
            {trainers.map((trainer) => (
              <ListItem key={trainer.id}>
                <ListItemText
                  primary={trainer.name}
                  secondary={`Specialization: ${trainer.specialization}`}
                />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default TrainerList;