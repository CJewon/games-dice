import HandIcon from "./HandIcon";
import HandButton from "./HandButton";
import body from "./css/Dice.css";

function App() {
  const handleClick = (value) => console.log(value);
  return (
    <div>
      <HandButton value="rock" onClick={handleClick}></HandButton>
      <HandButton value="scissor" onClick={handleClick}></HandButton>
      <HandButton value="paper" onClick={handleClick}></HandButton>
    </div>
  );
}

export default App;
