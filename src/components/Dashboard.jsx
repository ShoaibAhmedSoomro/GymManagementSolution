import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Tabs, Tab, Box } from '@mui/material';
import TraineeList from './TraineeList';
import TrainerList from './TrainerList';
import PaymentList from './PaymentList';
import ReportsAnalytics from './ReportsAnalytics';
import WorkoutPlanManagement from './WorkoutPlanManagement';
import QRCodeAttendance from './QRCodeAttendance';
import GymManagement from './GymManagement';

function Dashboard({ user, onLogout, trainers, setTrainers, trainees, setTrainees, payments, setPayments }) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Fitness Visio - {user.username} ({user.role})
          </Typography>
          <Button color="inherit" onClick={onLogout}>Logout</Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Tabs value={activeTab} onChange={handleTabChange} centered>
          <Tab label="Trainees" />
          <Tab label="Trainers" />
          <Tab label="Payments" />
          <Tab label="Reports & Analytics" />
          <Tab label="Workout Plans" />
          <Tab label="QR Attendance" />
          <Tab label="Gym Management" />
        </Tabs>
        <Box sx={{ mt: 2 }}>
          {activeTab === 0 && <TraineeList trainees={trainees} setTrainees={setTrainees} trainers={trainers} />}
          {activeTab === 1 && <TrainerList trainers={trainers} setTrainers={setTrainers} />}
          {activeTab === 2 && <PaymentList payments={payments} setPayments={setPayments} trainees={trainees} />}
          {activeTab === 3 && <ReportsAnalytics trainees={trainees} payments={payments} />}
          {activeTab === 4 && <WorkoutPlanManagement trainees={trainees} setTrainees={setTrainees} />}
          {activeTab === 5 && <QRCodeAttendance trainees={trainees} trainers={trainers} />}
          {activeTab === 6 && <GymManagement />}
        </Box>
      </Container>
    </Box>
  );
}

export default Dashboard;