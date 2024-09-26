import { useState } from "react";

import "./styles/app.scss";

function App() {
  return (
    <>
      <div className="productcard">
        <h2>sample</h2>
        <button>button click !</button>
        <p className="p1">Click me</p>
        <p className="p2">Click me</p>
        <p className="p3">Click me</p>
      </div>
      <div>
        <p className="string">string</p>
        <p className="Numeric">Numeric</p>
        <p className="List">List</p>
        <p className="Map">Map</p>
      </div>
    </>
  );
}

export default App;
