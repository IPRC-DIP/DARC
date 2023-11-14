import React from 'react';
import { Box, Typography } from '@mui/material';

const PassStatus = ({ title, isPassed }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgcolor={isPassed ? 'green' : 'red'}
      color="white"
      width="100%"
    >
      <Typography variant="h6">
        {title} - {isPassed ? 'Yes' : 'No'}
      </Typography>
    </Box>
  );
};

export default PassStatus;