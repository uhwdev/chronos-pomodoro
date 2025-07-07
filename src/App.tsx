import { Container } from "./components/Container";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { CountDown } from "./components/CountDown";
import { DefaultInput } from "./components/DefaultInput";
import { Cycles } from "./components/Cycles";
import { DefaultButton } from "./components/DefaultButton";
import { Footer } from "./components/Footer";
import { Heading } from "./components/Heading";

import "./styles/theme.css";
import "./styles/global.css";
import { PlayCircleIcon } from "lucide-react";
import { useState } from "react";

export function App() {
  // Quero que todos os componenetes que usam "numero"
  // Saibam das mudanças em seu valor

  // Sempre que eu usar o useStates, não vou usar atribuição diretamente "numero += 1"  //Se o Programa for pesado para inicializar utilizar dessa forma o useState
  // const [numero, setNumero] = useState(() => {
  //   console.log("Lazy initialization");
  //   return 0;
  // });

  const [numero, setNumero] = useState(0);

  function handleClick() {
    // setNumero((prevState) => prevState + 1); Se for usar o valor anterior, utilzizar assim
    setNumero(1);
  }

  return (
    <>
      <Heading> Número: {numero}</Heading>
      <button onClick={handleClick}>Aumenta</button>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className="form" action="">
          <div className="formRow">
            <DefaultInput
              labelText={numero.toString()}
              id="meuInput"
              type="text"
              placeholder="Digite Algo"
            />
          </div>

          <div className="formRow">
            <p>Lorem ipsum dolor sit kat</p>
          </div>

          <div className="formRow">
            <Cycles />
          </div>

          <div className="formRow">
            <DefaultButton icon={<PlayCircleIcon />} />
          </div>
        </form>
      </Container>

      <Container>
        <Footer />
      </Container>
    </>
  );
}
