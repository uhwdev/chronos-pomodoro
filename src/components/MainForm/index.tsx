import { PlayCircleIcon } from "lucide-react";
import { DefaultInput } from "../DefaultInput";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { useRef, useState } from "react";

export function MainForm() {
  const [taskName, setTaskName] = useState(""); // Forma não controlada de usar input, atualiza sempre que algo for mudado | Quando quer o valor em tempo real.
  const taskNameInput = useRef<HTMLInputElement>(null); // Forma controlada de usar input, só renderiza dps de enviar

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleCreateNewTask} className="form" action="">
      <div className="formRow">
        <DefaultInput
          labelText="task"
          id="meuInput"
          type="text"
          placeholder="Digite Algo"
          value={taskName} // Forma não controlada de usar input, atualiza sempre que algo for mudado
          onChange={(e) => setTaskName(e.target.value)} // Forma não controlada de usar input, atualiza sempre que algo for mudado
          ref={taskNameInput} // Forma controlada de usar input, só renderiza dps de enviar
        />
      </div>

      <div className="formRow">
        <p>Próximo Intevalo é de 25min</p>
      </div>

      <div className="formRow">
        <Cycles />
      </div>

      <div className="formRow">
        <DefaultButton icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
}
