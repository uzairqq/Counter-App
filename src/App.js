import React, { useState } from "react";
import { Card } from "react-bootstrap";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);

  return (
    <div className="d-flex vh-100">
      <div className="d-flex w-100 justify-content-center align-self-center">
        <Card border="primary" style={{ width: "30rem" }}>
          <Card.Body>
            <Card.Title>
              <b>Counter App</b>
            </Card.Title>
            <Card.Text>
              {"Counter is :" + count}
              <br />
              <input type="text"></input>
            </Card.Text>
            <Card.Footer>
              <button
                className={"btn btn-primary"}
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
            </Card.Footer>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default App;
