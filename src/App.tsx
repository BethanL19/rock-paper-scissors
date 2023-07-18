import { Game } from "./rock-paper-scrissors";
import "./style.css";

function App(): JSX.Element {
  return (
    <>
      <h1>Rock, Paper, Scissors</h1>
      <div>
        <Game />
      </div>
    </>
  );
}

export default App;
