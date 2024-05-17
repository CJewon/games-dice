import React from "react";
import rockImg from "./assets/rock.svg";
import scissorImg from "./assets/scissor.svg";
import paperImg from "./assets/paper.svg";

const IMAGES = {
  rock: rockImg,
  scissor: scissorImg,
  paper: paperImg,
};

console.log("IMAGES object:", IMAGES);

export default function HandIcon({ value }) {
  console.log("HandIcon value:", value);
  const src = IMAGES[value];
  return <img src={src} alt={value} />;
}
