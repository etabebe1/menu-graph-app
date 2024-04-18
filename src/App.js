import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Importing Components
import Home from "./pages/Home";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      {/* header component */}
      <Header />

      {/* routing component */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
