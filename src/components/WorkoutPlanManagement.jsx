import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel, Typography, Paper, Grid } from '@mui/material';

function WorkoutPlanManagement({ trainees, setTrainees }) {
  const [newWorkoutPlan, setNewWorkoutPlan] = useState({
    name: '',
    description: '',
    exercises: '',
    targetLevel: 'beginner'
  });

  const [selectedTrainee, setSelectedTrainee] = useState('');

  const handleCreateWorkoutPlan = (e) => {
    e.preventDefault();
    // In a real application, you'd save this to a database
    console.log('New Workout Plan:', newWorkoutPlan);
    setNewWorkoutPlan({ name: '', description: '', exercises: '', targetLevel: 'beginner' });
  };

  const handleAssignWorkoutPlan = () => {
    if (selectedTrainee && newWorkoutPlan.name) {
      setTrainees(trainees.map(trainee => 
        trainee.name === selectedTrainee 
          ? { ...trainee, workoutPlan: newWorkoutPlan.name }
          : trainee
      ));
    }
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>Create Workout Plan</Typography>
          <form onSubmit={handleCreateWorkoutPlan}>
            <TextField
              fullWidth
              margin="normal"
              label="Plan Name"
              value={newWorkoutPlan.name}
              onChange={(e) => setNewWorkoutPlan({ ...newWorkoutPlan, name: e.target.value })}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Description"
              multiline
              rows={4}
              value={newWorkoutPlan.description}
              onChange={(e) => setNewWorkoutPlan({ ...newWorkoutPlan, description: e.target.value })}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Exercises (comma-separated)"
              value={newWorkoutPlan.exercises}
              onChange={(e) => setNewWorkoutPlan({ ...newWorkoutPlan, exercises: e.target.value })}
            />
            <FormControl fullWidth margin="normal">
              <InputLabel>Target Level</InputLabel>
              <Select
                value={newWorkoutPlan.targetLevel}
                onChange={(e) => setNewWorkoutPlan({ ...newWorkoutPlan, targetLevel: e.target.value })}
              >
                <MenuItem value="beginner">Beginner</MenuItem>
                <MenuItem value="intermediate">Intermediate</MenuItem>
                <MenuItem value="advanced">Advanced</MenuItem>
              </Select>
            </FormControl>
            <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
              Create Workout Plan
            </Button>
          </form>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>Assign Workout Plan</Typography>
          <FormControl fullWidth margin="normal">
            <InputLabel>Select Trainee</InputLabel>
            <Select
              value={selectedTrainee}
              onChange={(e) => setSelectedTrainee(e.target.value)}
            >
              {trainees.map((trainee) => (
                <MenuItem key={trainee.id} value={trainee.name}>{trainee.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button onClick={handleAssignWorkoutPlan} variant="contained" color="secondary" sx={{ mt: 2 }}>
            Assign Workout Plan
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default WorkoutPlanManagement;