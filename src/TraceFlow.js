import React, { useCallback } from 'react';
import dagre from 'dagre';
import { ReactFlow, Controls, MiniMap, Background } from 'reactflow';
import { Container } from '@mui/material';
import CustomNode from './CustomNode';
import 'reactflow/dist/style.css';

const h = 220;
const w = 220;

function layOutGraph(nodes, edges) {
  const graph = new dagre.graphlib.Graph();

  graph.setGraph({});
  graph.setDefaultEdgeLabel(() => ({}));

  nodes.forEach(node => {
    graph.setNode(node.id, { width: w, height: h })
  });

  edges.forEach(edge => {
    graph.setEdge(edge.source, edge.target)
  });

  dagre.layout(graph);

  /* We are shifting the dagre node position (anchor=center center)
   * to the top left so it matches the React Flow node anchor point
   * (top left). 
   */
  nodes.forEach(node => {
    const dagreNode = graph.node(node.id);
    node.targetPosition = "top";
    node.sourcePosition = "bottom";
    node.position = {
      x: dagreNode.x - w / 2,
      y: dagreNode.y - h / 2
    };
  });
  return { nodes, edges };
}

const nodeTypes = {
  CustomNode: CustomNode,
};

function TraceFlow({ flow, setFlow }) {
  const { nodes, edges } = flow;
  layOutGraph(nodes, edges);

  const fetchFlow = useCallback(async (e, node) => {
    if (node.data.subgraph) {
      const response = await fetch(`trace/${node.data.subgraph}.json`);
      const data = await response.json();
      setFlow(data);
    }
  }, [setFlow]);

  return (
    <Container maxWidth="lg" style={{ width: '100%', height: 800 }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodeDoubleClick={fetchFlow}
        nodeTypes={nodeTypes}
        fitView
      >
        <MiniMap stype={{ height: 60 }} zoomable pannable />
        <Controls />
        <Background color="#aaa" gap={16} />
      </ReactFlow>
    </Container>
  );
}

export default TraceFlow;