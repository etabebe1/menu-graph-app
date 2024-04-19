import React, { useState, useEffect, useCallback } from "react";

import ReactFlow, {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Background,
  useNodesState,
  useEdgesState,
  getIncomers,
  getOutgoers,
  getConnectedEdges,
} from "reactflow";
import "reactflow/dist/style.css";

const initialNodes = [
  {
    id: "1",
    type: "input",
    data: { label: "Input Node" },
    position: { x: 250, y: 25 },
  },

  {
    id: "2",
    // you can also pass a React component as a label
    data: { label: "Input Node" },
    position: { x: 100, y: 125 },
  },
  {
    id: "3",
    type: "output",
    data: { label: "Output Node" },
    position: { x: 250, y: 250 },
  },
];

const initialEdges = [];

function CenterPanel() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  // delete node function
  const onNodesDelete = useCallback(
    (deleted) => {
      setEdges(
        deleted.reduce((acc, node) => {
          const incomers = getIncomers(node, nodes, edges);
          const outgoers = getOutgoers(node, nodes, edges);
          const connectedEdges = getConnectedEdges([node], edges);

          const remainingEdges = acc.filter(
            (edge) => !connectedEdges.includes(edge)
          );

          const createdEdges = incomers.flatMap(({ id: source }) =>
            outgoers.map(({ id: target }) => ({
              id: `${source}->${target}`,
              source,
              target,
            }))
          );

          return [...remainingEdges, ...createdEdges];
        }, edges)
      );
    },
    [nodes, edges]
  );

  return (
    <div className="w-full relative" style={{ height: "100vh" }}>
      <div className="bg-purple-500 w-80 h-80 rounded-full absolute left-[43%] bottom-[5%] mix-blend-multiply blur-lg opacity-30 animate-blob"></div>
      <div className="bg-yellow-500 w-80 h-80 rounded-full absolute right-[43%] bottom-[5%] mix-blend-multiply blur-lg opacity-30 animate-blob animation-delay-2000"></div>
      <div className="bg-pink-500 w-80 h-80 rounded-full absolute left-[35%] bottom-[25%]  mix-blend-multiply blur-lg opacity-30 animate-blob animation-delay-5000"></div>

      <div className="bg-purple-500 w-80 h-80 rounded-full absolute right-[45%] bottom-[50%] mix-blend-multiply blur-lg opacity-30 animate-blob"></div>
      <div className="bg-yellow-500 w-80 h-80 rounded-full absolute left-[45%] bottom-[50%] mix-blend-multiply blur-lg opacity-30 animate-blob animation-delay-2000"></div>
      <div className="bg-pink-500 w-80 h-80 rounded-full absolute right-[30%] bottom-[30%]  mix-blend-multiply blur-lg opacity-30 animate-blob animation-delay-5000"></div>

      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodesDelete={onNodesDelete}
        fitView
      ></ReactFlow>
    </div>
  );
}

export default CenterPanel;
