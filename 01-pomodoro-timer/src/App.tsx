import { useState } from "react";
import "./App.css";
import gearIcon from "../STARTER/images/gear.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="App">
      <div className="outerWrapper relative flex justify-center items-center">
        <svg
          className="base-timer__svg z-50"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g className="base-timer__circle">
            <circle
              className="base-timer__path-elapsed"
              cx="50"
              cy="50"
              r="45"
            />
          </g>
        </svg>
        <div className="timerWrapper flex flex-col justify-center">
          <div id="clock">15:00</div>
          <div id="controls">
            <button id="btnStartStop">START</button>
            <button id="btnSettings" className="gearIcon my-0 mx-auto" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
