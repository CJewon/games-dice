import React from "react";
import Dice from "./HandIcon";

export default function HandButton({ value, onClick }) {
  const handleClick = () => onClick(value);
  return (
    <>
      <button onClick={handleClick}>
        <Dice value={value}></Dice>
      </button>
    </>
  );
}
