import React from "react";
import rockImg from "./assets/rock.svg";
import scissorImg from "./assets/scissor.svg";
import paperImg from "./assets/paper.svg";

const IMAGES = {
  rock: rockImg,
  scissor: scissorImg,
  paper: paperImg,
};

export default function HandIcon({ value }) {
  const src = IMAGES[value];
  return <img src={src} alt={value} />;
}
