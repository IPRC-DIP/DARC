import React from 'react';
import { Box } from '@mui/material';
import { Handle, Position } from 'reactflow';
import GridCanvas from './GridCanvas';

function CustomNode({ data }) {
  let content = null;
  if (data.kind === "matrix") {
    content = <GridCanvas size={200} matrix={data.val} />;
  } else {
    content = <div>{data.val}</div>;
  }
  return (
    <Box
      sx={{
        width: 220,
        height: 220,
        border: '1px solid #ccc',
        borderRadius: '4px',
        padding: '10px',
        position: 'relative',
        backgroundColor: data.subgraph ? 'lightgray' : 'white',
      }}
    >
      <Handle type="target" position={Position.Top} />
      <Box textAlign="center">
        <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>{data.name}</div>
      </Box>
      <Box display="flex" justifyContent="center">
        {content}
      </Box>
      <Handle type="source" position={Position.Bottom} />
    </Box>
  );
}

export default CustomNode;