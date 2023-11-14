import React from 'react';
import { Grid } from '@mui/material';
import GridCanvas from './GridCanvas';

const InputOutput = ({ inputMatrices, outputMatrices }) => {
  console.log(inputMatrices);
  return (
    <Grid container spacing={1}>
      <Grid item xs={6}>
        <div style={{ textAlign: 'center' }}>
          <h3>Input</h3>
          {inputMatrices.map((matrix, index) => (<GridCanvas key={index} size={200} matrix={matrix} />))}
        </div>
      </Grid>
      <Grid item xs={6}>
        <div style={{ textAlign: 'center' }}>
          <h3>Output</h3>
          {outputMatrices.map((matrix, index) => (<GridCanvas key={index} size={200} matrix={matrix} />))}
        </div>
      </Grid>
    </Grid>
  );
};

export default InputOutput;