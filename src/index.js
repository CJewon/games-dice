import { useState } from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
const product = "MacBook";
const model = "Air";
const item = product + model;

function handleClick() {
  alert("곧 도착합니다!");
}
root.render(
  <>
    <h1>나만의 {item} 주문하기</h1>
    <button onClick={handleClick}>확인</button>
  </>
);
