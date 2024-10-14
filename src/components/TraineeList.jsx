import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel, List, ListItem, ListItemText, Typography, Paper, Grid } from '@mui/material';

const trainingPlans = [
  "Weight Loss",
  "Muscle Gain",
  "Cardiovascular Fitness",
  "Flexibility and Mobility",
  "General Fitness"
];

const exerciseOptions = [
  "Push-ups",
  "Pull-ups",
  "Squats",
  "Lunges",
  "Plank",
  "Burpees",
  "Deadlifts",
  "Bench Press",
  "Rowing",
  "Running"
];

function TraineeList({ trainees, setTrainees, trainers }) {
  const [newTrainee, setNewTrainee] = useState({
    name: '',
    level: 'beginner',
    trainer: '',
    plan: '',
    dietPlan: '',
    exercises: [],
  });

  const handleAddTrainee = (e) => {
    e.preventDefault();
    setTrainees([...trainees, { ...newTrainee, id: Date.now() }]);
    setNewTrainee({
      name: '',
      level: 'beginner',
      trainer: '',
      plan: '',
      dietPlan: '',
      exercises: [],
    });
  };

  const handleExerciseChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewTrainee({
      ...newTrainee,
      exercises: typeof value === 'string' ? value.split(',') : value,
    });
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>Add New Trainee</Typography>
          <form onSubmit={handleAddTrainee}>
            <TextField
              fullWidth
              margin="normal"
              label="Trainee Name"
              value={newTrainee.name}
              onChange={(e) => setNewTrainee({ ...newTrainee, name: e.target.value })}
            />
            <FormControl fullWidth margin="normal">
              <InputLabel>Level</InputLabel>
              <Select
                value={newTrainee.level}
                onChange={(e) => setNewTrainee({ ...newTrainee, level: e.target.value })}
              >
                <MenuItem value="beginner">Beginner</MenuItem>
                <MenuItem value="intermediate">Intermediate</MenuItem>
                <MenuItem value="advanced">Advanced</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel>Assigned Trainer</InputLabel>
              <Select
                value={newTrainee.trainer}
                onChange={(e) => setNewTrainee({ ...newTrainee, trainer: e.target.value })}
              >
                {trainers.map((trainer) => (
                  <MenuItem key={trainer.id} value={trainer.name}>{trainer.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel>Training Plan</InputLabel>
              <Select
                value={newTrainee.plan}
                onChange={(e) => setNewTrainee({ ...newTrainee, plan: e.target.value })}
              >
                {trainingPlans.map((plan) => (
                  <MenuItem key={plan} value={plan}>{plan}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              fullWidth
              margin="normal"
              label="Diet Plan"
              multiline
              rows={4}
              value={newTrainee.dietPlan}
              onChange={(e) => setNewTrainee({ ...newTrainee, dietPlan: e.target.value })}
            />
            <FormControl fullWidth margin="normal">
              <InputLabel>Exercises</InputLabel>
              <Select
                multiple
                value={newTrainee.exercises}
                onChange={handleExerciseChange}
                renderValue={(selected) => selected.join(', ')}
              >
                {exerciseOptions.map((exercise) => (
                  <MenuItem key={exercise} value={exercise}>
                    {exercise}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
              Add Trainee
            </Button>
          </form>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>Trainees</Typography>
          <List>
            {trainees.map((trainee) => (
              <ListItem key={trainee.id}>
                <ListItemText
                  primary={trainee.name}
                  secondary={
                    <>
                      <Typography component="span" variant="body2" color="text.primary">
                        Level: {trainee.level}
                      </Typography>
                      {` — Trainer: ${trainee.trainer}`}
                      <br />
                      {`Plan: ${trainee.plan}`}
                      <br />
                      {`Diet: ${trainee.dietPlan}`}
                      <br />
                      {`Exercises: ${trainee.exercises.join(', ')}`}
                    </>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default TraineeList;