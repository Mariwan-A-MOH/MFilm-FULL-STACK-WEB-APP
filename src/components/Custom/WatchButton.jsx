import React from "react";
import styled from "styled-components";

const WatchButoon = ({ children = "Watch" }) => {
  return <ButtonCont >{children}</ButtonCont>;
};
export default WatchButoon;
const ButtonCont = styled.button`

  width: 180px;
  height: 55px;
  border-radius: 10px;
  font-size: 20px;
  background-image: linear-gradient(
    to right,
    rgb(0, 240, 0),
    rgb(0, 129, 0),
    rgb(2, 62, 10)
  );
  box-shadow: 0px 0px 0 4px rgba(0, 255, 0, 0.397);
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: bold;
  text-shadow: 0px 2px #006511;

  color: white;
  border: none;
  cursor: pointer;
  transition: transform 1s;


  &:hover {
    transform: scale(1.2);

    background-image: linear-gradient(
      to right,
      rgb(2, 197, 2),
      rgb(0, 129, 0),
      rgb(0, 62, 0),
      rgb(2, 35, 2)
    );
  }
`;




