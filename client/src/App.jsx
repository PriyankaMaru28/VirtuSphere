import { useState } from "react";
import Canvas from "./canvas";
import Customizer from "./pages/customizer";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <h1 className="head-text">React Application</h1>
      <canvas />
      <customizer />
      <Home />
    </div>
  );
}

export default App;
