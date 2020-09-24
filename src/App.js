import React, { useState } from "react";

function App() {
  let [count, setCount] = useState(0);
  let [showCounter, setShowCounter] = useState(true);

  return (
    <div>
      <button
        onClick={() => {
          setShowCounter(!showCounter);
        }}
      >
        {showCounter ? "Hide Counter" : "Show Counter"}
      </button>

      {
        <div style={{ display: showCounter ? "block" : "none" }}>
          {" "}
          Counter is : {count}
        </div>
      }
      <br />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <button
        className=""
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default App;
