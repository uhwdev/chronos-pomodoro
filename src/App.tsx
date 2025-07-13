import { Home } from "./pages/Home";

import "./styles/theme.css";
import "./styles/global.css";
import { useState } from "react";
import type { TaskStateModel } from "./models/TaskStateModel";
import { TaskContext } from "./contexts/TaskContext";

const initialState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: "00:00",
  activetask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  },
};

export function App() {
  const [state, setState] = useState(initialState);

  return (
    <TaskContext.Provider value={{ outraCoisa: 321 }}>
      <Home />;
    </TaskContext.Provider>
  );
}
