import React from "react";

// Importing home component
import Header from "../components/Header";
import Canvas from "../components/Canvas";

function Home() {
  return (
    <main className="main-container bg-colors-ai-blue h-full w-full">
      <Canvas />
    </main>
  );
}

export default Home;
