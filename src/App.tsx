import "./styles/theme.css";
import "./styles/global.css";

import { Heading } from "./components/Heading";
import { TimerIcon } from "lucide-react";

export function App() {
  return (
    <div>
      <Heading>
        Olá Mundo
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero numquam
        culpa fugit magni assumenda repellendus a officia deserunt? Doloribus
        nam cum blanditiis facilis tempora dolorem voluptas vitae, iste ut
        explicabo.
      </p>
    </div>
  );
}
