import React from "react";

import LeftPanel from "./components/LeftPanel";
import CenterPanel from "./components/CentralPanel";

function App() {
  return (
    <div className="app flex-1 flex flex-col sm:flex-row w-[100vw] overflow-x-hidden">
      <LeftPanel />
      <CenterPanel />
    </div>
  );
}

export default App;
