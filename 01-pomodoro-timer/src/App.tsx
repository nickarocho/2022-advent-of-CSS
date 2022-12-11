import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [initialTimeLimit, setInitialTimeLimit] = useState(12);
  const [newTimeLimit, setNewTimeLimit] = useState(["00", "00"]);
  const [timeLeft, setTimeLeft] = useState(initialTimeLimit);
  const [timer, setTimer] = useState<undefined | number>(undefined);
  const [circleDashProgress, setCircleDashProgress] = useState(283);

  useEffect(() => {
    updateDashArray();
    if (timeLeft === 0) {
      clearInterval(timer);
      setTimer(undefined);
    }
  }, [timeLeft]);

  const toggleTimer = () => {
    if (timer) {
      clearInterval(timer);
      setTimer(undefined);
      return null;
    }

    const newTimer = setInterval(() => {
      setTimeLeft((prev) => (prev -= 1));
    }, 1000);

    setTimer(newTimer);
  };

  const formatRemainingTime = (totalSeconds: number): string => {
    const minutesLeft = Math.floor(totalSeconds / 60);
    let secondsLeft = totalSeconds % 60;

    return `${minutesLeft}:${
      secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft
    }`;
  };

  const updateDashArray = () => {
    const progressInt = Math.floor((timeLeft / initialTimeLimit) * 283);
    setCircleDashProgress(progressInt);
  };

  const handleNewTimeLimit = (e: Event) => {
    console.log({ e });
    // setNewTimeLimit([...val]);
  };

  return (
    <main className="App">
      <div className="outer__wrapper relative flex justify-center items-center">
        <svg
          className="timer__svg z-10"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g className="timer__circle">
            <circle className="timer__path-elapsed" cx="50" cy="50" r="45" />
            <path
              id="timer-path-remaining"
              strokeDasharray={`${circleDashProgress} 283`}
              className="z-20 timer__path-remaining red"
              d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
            ></path>
          </g>
        </svg>
        <div className="timerWrapper flex flex-col justify-center">
          <div id="clock" className="z-20">
            {formatRemainingTime(timeLeft)}
          </div>
          <div id="controls" className="z-20">
            <button id="btn--startStop" onClick={toggleTimer}>
              {timer ? "STOP" : "START"}
            </button>
            <div className="settings__container">
              <label htmlFor="checkbox--settings" className="my-0 mx-auto" />
              <input type="checkbox" id="checkbox--settings" />
              <fieldset id="settings__timeEntry">
                <input
                  type="number"
                  min={0}
                  max={99}
                  defaultValue={"00"}
                  onChange={(e) => handleNewTimeLimit(e)}
                />
                <input
                  type="number"
                  defaultValue={"00"}
                  min={0}
                  max={60}
                  onChange={(e) => handleNewTimeLimit(e)}
                />
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
