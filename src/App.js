import React, { useState, useEffect, useCallback } from 'react';
import { ThemeProvider, createTheme, Container, Divider, Typography, Grid, AppBar, Toolbar, Paper, Box, Chip } from '@mui/material';
import TaskSelector from './TaskSelector';
import InputOutput from './InputOutput';
import CodeSnippet from "./CodeSnippet";
import TraceFlow from './TraceFlow';
import PassStatus from './PassStatus';

const theme = createTheme();

const tasks = Array.from(new Array(400), (x, i) => i);

const defaultData = {
  "id": 0,
  "train_io": { "inputs": [], "outputs": [] },
  "test_io": { "inputs": [], "outputs": [] },
  "anpl": "",
  "solved": false,
  "generalizable": false,
}

const defaultFlow = {
  "nodes": [],
  "edges": [],
}

function App() {
  const [data, setData] = useState(defaultData);
  const [flow, setFlow] = useState(defaultFlow);

  useEffect(() => { fetchTask(0); }, []);

  const fetchTask = useCallback(async (tid) => {
    console.log("hello world");
    const summary_url = `task_summary/${tid}.json`;
    const flow_url = `trace/t${tid}.json`;
    try {
      const data_res = await fetch(summary_url);
      const data = await data_res.json();
      setData(data);
      if (data.solved) {
        const flow_res = await fetch(flow_url);
        const flow = await flow_res.json();
        setFlow(flow);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <TaskSelector tasks={tasks} selectedTask={data["id"]} onTaskSelect={fetchTask} />
      <Container maxWidth="lg" style={{ marginTop: '2rem' }}>

        <Grid container rowSpacing={8} columnSpacing={2}>
          <Grid item xs={6}>
            <Divider> <Chip label="Train" color="primary" variant="outlined" /> </Divider>
            <InputOutput inputMatrices={data["train_io"]["inputs"]} outputMatrices={data["train_io"]["outputs"]} />
          </Grid>
          <Grid item xs={6}>
            <Divider> <Chip label="Test" color="primary" variant="outlined" /> </Divider>
            <InputOutput inputMatrices={data["test_io"]["inputs"]} outputMatrices={data["test_io"]["outputs"]} />
            <PassStatus title={"ANPL Solved"} isPassed={data["solved"]} />
            <PassStatus title={"Generalizable"} isPassed={data["generalizable"]} />
          </Grid>
          {data["solved"] &&
            <>
              <Grid item xs={12}>
                <Divider> <Chip label="ANPL" color="primary" variant="outlined" /> </Divider>
                <CodeSnippet code={data["anpl"]} />
              </Grid>
              <Grid item xs={12}>
                <Divider> <Chip label="Flow" color="primary" variant="outlined" /> </Divider>
                <TraceFlow flow={flow} setFlow={setFlow} />
              </Grid>
              <Grid item xs={12}>
                <Divider> <Chip label="Python" color="primary" variant="outlined" /> </Divider>
                <CodeSnippet code={data["python"]} />
              </Grid>
            </>}
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
