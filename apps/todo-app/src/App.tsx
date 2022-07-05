import React from "react";
import { Button, Tooltip } from "components";
import "./App.css";

console.log(Button);
function App() {
  return (
    <div
      className="App"
      style={{ display: "flex", justifyContent: "space-around" }}
    >
      <Tooltip position="right" text="rightright " containerClassName="mt-5">
        right
      </Tooltip>

      <Tooltip position="top" text="top" containerClassName="mt-5">
        top
      </Tooltip>

      <Tooltip position="left" text="left" containerClassName="mt-5">
        left
      </Tooltip>

      <Tooltip position="bottom" text="bottom" containerClassName="mt-5">
        bottom
      </Tooltip>
    </div>
  );
}

export default App;
