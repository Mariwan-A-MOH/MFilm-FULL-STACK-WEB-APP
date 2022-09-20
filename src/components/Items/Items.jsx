import React from "react";
import styled from "styled-components";
import ItemButton from "../Custom/ItemButton";
import { connect } from "react-redux";
import { AddFilmToListAction } from "../../Redux/CrdReducer/CardAction";
const Item = ({ item, dispatch }) => {
  const { image, name, image_item } = item;

  return (
    <ItemContainer image={image_item ? image_item : image}>
      <List_con className="list">
        <h1>{name}</h1>

        <X>
          <ItemButton />
          <AddButton onClick={() => dispatch(AddFilmToListAction(item))}>
            +
          </AddButton>
        </X>
      </List_con>
    </ItemContainer>
  );
};
export default connect(null)(Item);

const ItemContainer = styled.div`
  background-image: ${(props) =>
    ` linear-gradient(
    to top,
    rgba(0, 4, 0, 1),
    rgba(0, 4, 0, 0.7),
    rgba(0, 0, 0, 0.4),
    rgba(255, 255, 255, 0.05),
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.15)
  100%,
    transparent 1000%
  ),url("${props.image}")`};
  margin: 2rem auto;
  overflow-x: hidden;
  overflow-y: hidden;
  width: 250px;
  height: 380px;
  border-radius: 12px;
  background-repeat: no-repeat;
  background-size: cover;

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 1.2s;
  &:hover {
    transform: scale(1.07);
    background-image: ${(props) =>
      ` linear-gradient(
      to top,

      rgba(0, 4, 0, 1),
      rgba(0, 4, 0, 0.7),

      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.1)
      
      
      
     100%,
      transparent 100%
    ),url("${props.image}")`};
    .list {
      opacity: 1;
    }
  }
`;
const List_con = styled.h1`
  position: absolute;
  width: 80%;
  height: 30%;
  bottom: 5px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  h1 {
    text-transform: uppercase;
    font-size: 22px;
    font-weight: bold;
    color: white;
  }
`;
const X = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: SPACE-AROUND;
  align-items: center;
`;
const AddButton = styled.button`
  width: 20%;
  height: 100%;
  border-radius: 5px;

  font-weight: bold;
  color: white;
  border: none;
  cursor: pointer;
  transition: transform 1s;

  opacity: 0.8;
  background: RED;
  &:hover {
    transform: scale(1.05);
    opacity: 0.95;
  }
`;
