import React from "react";

import LeftPanel from "./components/LeftPanel";
import CenterPanel from "./components/CentralPanel";
import Header from "./components/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="flex flex-col sm:flex-row w-[100vw] overflow-x-hidden">
        <LeftPanel />
        <CenterPanel />
      </div>
    </div>
  );
}

export default App;
