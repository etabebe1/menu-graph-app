import React, { useState, useEffect, useCallback } from "react";

import ReactFlow, {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Background,
  MiniMap,
  Controls,
} from "reactflow";
import "reactflow/dist/style.css";

import NodeActions from "./NodeAction";

const initialNodes = [
  {
    id: "1",
    type: "input",
    data: { label: <div id={`1`}>Connect me</div> },
    position: { x: 250, y: 25 },
  },

  {
    id: "2",
    // you can also pass a React component as a label
    data: { label: <div id={`2`}>Connect me</div> },
    position: { x: 100, y: 125 },
  },
  {
    id: "3",
    type: "output",
    data: { label: <div id={`3`}>Connect me</div> },
    position: { x: 250, y: 250 },
  },
];

const initialEdges = [{ id: "e1-2", source: "1", target: "2", animated: true }];

function CenterPanel() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  const [nodeName, setNodeName] = useState("");
  const [selectedElement, setSelectedElement] = useState(null);
  const [selectedNodeId, setSelectedNodeId] = useState(null);

  // console.log(selectedElement);

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

  const handleAddNode = () => {
    if (nodeName.trim() === "") {
      alert("Please enter a node name before adding.");
      return;
    }
    const newNode = {
      id: `node-${nodes.length + 1}`, // Unique ID for the node
      data: { label: <div id={`node-${nodes.length + 1}`}>{nodeName}</div> },
      position: {
        x: Math.random() * window.innerWidth * 0.8,
        y: Math.random() * window.innerHeight * 0.8,
      },
    };
    setNodes((nds) => nds.concat(newNode));
    setNodeName(""); // Reset input after adding
  };

  // function to delete node
  const onNodeClick = (e, el) => {
    // console.log("Selected element:", element);
    setSelectedElement(el);
    setSelectedNodeId(el.id);
  };

  // Delete selected node and its edges
  const handleDeleteNode = () => {
    if (!selectedElement) {
      alert("No node selected!");
      return;
    }

    setNodes((nds) => nds.filter((node) => node.id !== selectedElement.id));
    setEdges((eds) =>
      eds.filter(
        (edge) =>
          edge.source !== selectedElement.id &&
          edge.target !== selectedElement.id
      )
    );
  };

  const handleDuplicateNode = () => {
    if (!selectedNodeId) {
      alert("No node selected!");
      return;
    }
    const nodeToDuplicate = nodes.find((node) => node.id === selectedNodeId);

    if (nodeToDuplicate) {
      const newNode = {
        ...nodeToDuplicate,
        id: `duplicate-${Math.random().toString(36).substr(2, 9)}`, // Generate a unique ID
        position: {
          ...nodeToDuplicate.position,
          x: nodeToDuplicate.position.x + 50, // Offset new node for visibility
          y: nodeToDuplicate.position.y + 50,
        },
      };

      setNodes([...nodes, newNode]); // Assuming you have a setNodes function to update state
    }
  };

  return (
    <div
      className="w-full relative bg-blue-400/30"
      style={{ height: "calc(100vh - 64px)" }}
    >
      <div className="bg-purple-500 w-80 h-80 rounded-full absolute left-[43%] bottom-[5%] mix-blend-multiply blur-lg opacity-30 animate-blob"></div>
      <div className="bg-yellow-500 w-80 h-80 rounded-full absolute right-[43%] bottom-[5%] mix-blend-multiply blur-lg opacity-30 animate-blob animation-delay-2000"></div>
      <div className="bg-pink-500 w-80 h-80 rounded-full absolute left-[35%] bottom-[25%]  mix-blend-multiply blur-lg opacity-30 animate-blob animation-delay-5000"></div>

      <div className="bg-purple-500 w-80 h-80 rounded-full absolute right-[45%] bottom-[50%] mix-blend-multiply blur-lg opacity-30 animate-blob"></div>
      <div className="bg-yellow-500 w-80 h-80 rounded-full absolute left-[45%] bottom-[50%] mix-blend-multiply blur-lg opacity-30 animate-blob animation-delay-2000"></div>
      <div className="bg-pink-500 w-80 h-80 rounded-full absolute right-[30%] bottom-[30%]  mix-blend-multiply blur-lg opacity-30 animate-blob animation-delay-5000"></div>

      <h1 className="font-semibold">2. React Flow Graph</h1>

      <div className="absolute z-50">
        <h1>Node Operations</h1>
        <div className="flex flex-col sm:flex-row justify-center sm:justify-start">
          <NodeActions
            onAdd={handleAddNode}
            onDelete={handleDeleteNode}
            onDuplicate={handleDuplicateNode}
          />
          <input
            type="text"
            value={nodeName}
            onChange={(e) => setNodeName(e.target.value)}
            placeholder="input text here..."
            className="mx-auto p-1 rounded-md border-colors-digital-gray border h-10"
          />
        </div>
      </div>

      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={onNodeClick}
        fitViewOptions={{
          padding: 0.2, // Increase padding to reduce zoom
          includeHiddenNodes: true,
          minZoom: 0.5, // Lower limit for zoom
          maxZoom: 1, // Upper limit for zoom
        }}
        fitView
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
}

export default CenterPanel;
