import React from "react";
import Dice from "./HandIcon";

export default function HandButton({ value, onClick }) {
  return (
    <>
      <button onClick={onClick}>
        <Dice value={value}></Dice>
      </button>
    </>
  );
}
