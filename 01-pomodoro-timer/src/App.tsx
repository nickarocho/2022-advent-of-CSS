import { useState } from "react";
import "./App.css";
import gearIcon from "../STARTER/images/gear.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="App">
      <div className="timerWrapper flex flex-col justify-center">
        <div id="clock">15:00</div>
        <div id="controls">
          <button id="btnStartStop">START</button>
          <button id="btnSettings" className="gearIcon my-0 mx-auto" />
        </div>
      </div>
    </main>
  );
}

export default App;
