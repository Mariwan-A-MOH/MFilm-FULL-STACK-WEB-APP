import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { FilmList_Selector } from "../../Redux/CrdReducer/CardSelector";
import { RemoveFilmAction } from "../../Redux/CrdReducer/CardAction";
const Item = ({ item,dis }) => {
  return (
    <ItemBack image={item.image_item ? item.image_item : item.image}>
      <List_con>
        <h1>{item.name}</h1>
        <XContainer>
          <ButtonWatch>watch</ButtonWatch>
          <AddBt onClick={()=>dis(RemoveFilmAction(item))}>X</AddBt>
        </XContainer>
      </List_con>
    </ItemBack>
  );
};
const ItemList = ({ FilmList,dispatch }) => {
  console.log(FilmList)
  return (
    <Container>
      {FilmList.length > 0 ? (
        FilmList.map((element, index) => <Item key={index} item={element} dis={dispatch} />)
      ) : (
        <Text>your list is empty yet !</Text>
      )}
    </Container>
  );
};
const MAPstateProps = createStructuredSelector({
  FilmList: FilmList_Selector,
});
export default connect(MAPstateProps)(ItemList);
const Container = styled.div`
  width: 100%;
  height: 80vh;
  border-radius: 10px;
  overflow: hidden;
  border: 2px solid rgba(177, 177, 177, 0.269);

  display: grid;
  column-gap: 10px;
  row-gap: 10px;
  grid-template-columns: auto auto auto auto auto;
  padding: 10px;
`;
const ItemBack = styled.div`
  width: 145px;
  height: 180px;
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
  margin: 0.1rem auto;
  overflow-x: hidden;
  box-shadow: 0px 5px 15px 5px rgba(177, 226, 237, 0.699);
  overflow-y: hidden;

  border-radius: 6px;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  justify-content: center;
  transition: all 2s;
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
  bottom: 12px;
  position: absolute;
  width: 90%;
  height: 50px;
  // bottom: 5px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  h1 {
    text-transform: uppercase;
    font-size: 12px;
    color: white;
  }

  &:hover {
  }
`;
const XContainer = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: SPACE-between;
  align-items: center;
`;
const ButtonWatch = styled.button`
  width: 75%;
  height: 30px;
  border-radius: 3px;

  text-transform: uppercase;

  color: white;
  border: none;
  cursor: pointer;
  transition: transform 1s;

  opacity: 0.8;
  background-image: linear-gradient(to right, rgb(0, 240, 0), rgb(0, 129, 0));
  &:hover {
    transform: scale(1.05);
    opacity: 0.95;
  }
`;
const AddBt = styled.button`
  width: 20%;
  height: 30px;
  // height: 100%;
  border-radius: 3px;

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
const Text = styled.div`
  width: 100%;
  grid-column: 1 / -1;
  text-transform: uppercase;
  margin-top: 50px;
  font-size: 30px;
  color: rgb(176, 190, 190);
  font-weight: bold;
`;
