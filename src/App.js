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
  const [gameHistory, setGameHistory] = useState([]);
  const [score, setScore] = useState(0);
  const [otherScore, setOtherScore] = useState(0);
  const [bet, setBet] = useState(1);

  const handleButtonClick = (nextHand) => {
    const nextOtherHand = generateRandomHand();
    const nextHistoryItem = getResult(nextHand, nextOtherHand);
    const comparison = compareHand(nextHand, nextOtherHand);
    setHand(nextHand);
    setOtherHand(nextOtherHand);
    setGameHistory([...gameHistory, nextHistoryItem]);
    if (comparison > 0) setScore(score + bet);
    if (comparison < 0) setOtherScore(otherScore + bet);
  };

  const handleClearClick = () => {
    setHand(INITIAL_VALUE);
    setOtherHand(INITIAL_VALUE);
    setGameHistory([]);
    setScore(0);
    setOtherScore(0);
    setBet(0);
  };

  const handleBetChange = (e) => {
    const num = Number(e.target.value);
    setBet(num);
  };

  return (
    <div>
      <Button name="처음부터" onClick={handleClearClick}>
        처음부터
      </Button>
      <div>
        {score} : {otherScore}
      </div>
      <div>
        <HandIcon value={hand}></HandIcon>
        VS
        <HandIcon value={otherHand}></HandIcon>
      </div>
      <div>
        <input
          type="number"
          value={bet}
          min={1}
          max={9}
          onChange={handleBetChange}
        />
      </div>
      <p>승부 기록 : {gameHistory.join(", ")}</p>
      <div>
        <HandButton value="rock" onClick={handleButtonClick}></HandButton>
        <HandButton value="scissor" onClick={handleButtonClick}></HandButton>
        <HandButton value="paper" onClick={handleButtonClick}></HandButton>
      </div>
    </div>
  );
}

export default App;
