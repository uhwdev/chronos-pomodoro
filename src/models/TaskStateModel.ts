import type { TaskModel } from "./TaskModel";

// Estado -> Componente -> Filhos

export type TaskStateModel = {
  tasks: TaskModel[]; //Histórico, MainForm
  secondsRemaining: number; // Home, CountDown, Histórico, MainForm, Button
  formattedSecondsRemaining: string; // Título, CountDown
  activetask: TaskModel | null; // CountDown, Histórico, MainForm, Button
  currentCycle: number; //1 a 8
  config: {
    workTime: number; // MainForm
    shortBreakTime: number; // MainForm
    longBreakTime: number; // MainForm
  };
};
