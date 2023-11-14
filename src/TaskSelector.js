import React from 'react';
import { AppBar, Toolbar, Typography, Select, MenuItem } from '@mui/material';

function TaskSelector({ tasks, selectedTask, onTaskSelect }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          DARC: A Recursive Decomposition Dataset of ARC Tasks
        </Typography>
        <Select
          labelStyle={{ color: '#ff0000' }}
          sx={{
            color: "white",
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: 'rgba(228, 219, 233, 0.25)',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: 'rgba(228, 219, 233, 0.25)',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: 'rgba(228, 219, 233, 0.25)',
            },
            '.MuiSvgIcon-root ': {
              fill: "white !important",
            }
          }}
          id="task-select"
          value={selectedTask}
          onChange={async (event) => await onTaskSelect(event.target.value)}
        >
          {tasks.map((taskId) => (
            <MenuItem key={taskId} value={taskId}>
              Task {taskId}
            </MenuItem>
          ))}
        </Select>
      </Toolbar>
    </AppBar>
  );
}

export default TaskSelector;