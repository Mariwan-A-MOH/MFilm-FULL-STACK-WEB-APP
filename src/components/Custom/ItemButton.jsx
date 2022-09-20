import React from "react";
import styled from "styled-components";
const ItemButton = ({ children = "Watch Now" }) => {
  return <ButtonCont className="man" >{children}</ButtonCont>;
};
export default ItemButton;
const s='mn';
const ButtonCont = styled.button`

width: 70%;
  height: 100%;
  border-radius: 5px;
  
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
  color: white;
  border: none;
  cursor: pointer;
  transition: transform 1s;

  opacity: 0.80;
  background-image: linear-gradient(
    to right,
    rgb(0, 240, 1),
    rgb(0, 129, 0)
  );
  &:hover {
    transform: scale(1.05);
    opacity:0.95;
  

  }
`;




