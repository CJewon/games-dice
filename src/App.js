import HandButton from "./HandButton";
import body from "./css/Dice.css";
import Button from "./Button";
import { useState } from "react";
import HandIcon from "./HandIcon";
import { compareHand, generateRandomHand } from "./Utils";

const INITIAL_VALUE = "rock";

function getResult(me, other) {
  const comparison = compareHand(me, other);
  if (comparison > 0) return "승리";
  if (comparison < 0) return "패배";
  return "무승부";
}

function App() {
  const [hand, setHand] = useState(INITIAL_VALUE);
  const [otherHand, setOtherHand] = useState(INITIAL_VALUE);

  const handleButtonClick = (nextHand) => {
    const nextOtherHand = generateRandomHand();
    setHand(nextHand);
    setOtherHand(nextOtherHand);
  };

  const handleClearClick = () => {
    setHand(INITIAL_VALUE);
    setOtherHand(INITIAL_VALUE);
  };

  return (
    <div>
      <Button name="처음부터" onClick={handleClearClick}>
        처음부터
      </Button>
      <p>{getResult(hand, otherHand)}</p>
      <div>
        <HandIcon value={hand}></HandIcon>
        VS
        <HandIcon value={otherHand}></HandIcon>
      </div>
      <HandButton value="rock" onClick={handleButtonClick}></HandButton>
      <HandButton value="scissor" onClick={handleButtonClick}></HandButton>
      <HandButton value="paper" onClick={handleButtonClick}></HandButton>
    </div>
  );
}

export default App;
