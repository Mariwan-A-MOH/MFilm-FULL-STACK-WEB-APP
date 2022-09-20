import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Dis from "../../assets/dis.png";
const ItemDisplay = () => {
  const items = {
    id: 11,
    name: "The Batman",
    image:
      "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/adb49794a3877207783f1fbccad15964bdf4209c1f72b7f758f12ddd74f24c33._UY500_UX667_RI_V_TTW_.jpg",
    image_item:
      "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_.jpg",
    description:
      "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question",
  };

  return (
    <Con>
      <Backg src={items.image} />
      <Backg2 src={Dis} />
      <DivList>
        <ITEM image={items.image_item} />
        <Description>
          <h1>{items.name}</h1>
          <p>{items.description}</p>
          <ButtonDiv>WATCH NOW</ButtonDiv>
        </Description>
      </DivList>
    </Con>
  );
};
export default ItemDisplay;
const DivList = styled.div`
  display: grid;
  grid-template-columns: 200px auto;
  gap: 100px;
  width: 100vw;
  height: 300px;
  position: absolute;
  margin-left: 120px;
  top: 300px;
`;
const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  h1,
  P {
    text-align: start;
  }
  h1 {
    color: rgb(231, 236, 240);
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  p {
    border-top: 1px solid rgb(161, 178, 184);
    padding-top: 30px;
    color: rgb(161, 178, 184);
    font-size: 18px;
  }
`;

const ITEM = styled.div`
  width: 200px;
  height: 300px;

  background-image: ${(props) =>
    ` linear-gradient(
  to top,
  rgba(0, 4, 0, .3),
  rgba(255, 255, 255, 0.15)
100%,
  transparent 1000%
),url("${props.image}")`};
  margin: 2rem auto;
  overflow-x: hidden;
  overflow-y: hidden;
  width: 270px;
  height: 400px;
  left: 0px;
  border-radius: 12px;
  background-repeat: no-repeat;
  background-size: cover;
  transition: all 1.2s;
  &:hover {
    transform: scale(1.07);
  }
`;

const Backg = styled.img`
  width: 100vw;
`;
const Backg2 = styled.img`
  width: 100vw;
  position: absolute;
  top: 0px;
  width: 100vw;
  height: 100vh;
`;
const Con = styled.div`
  // background: white;

  width: 100vw;
  height: 90vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ButtonDiv = styled.button`
  margin-top: 30px;
  color: white;
  width: 16%;
  height: 40px;
  border: 2px solid rgba(0, 240, 1);

  // // border:2px solid
  border-radius: 16px;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 1.4px;
  cursor: pointer;
  transition: all 1s;
  background-image: linear-gradient(to right, rgb(0, 240, 1), rgb(0, 129, 0));
  opacity: 0.5;

  &:hover {
    opacity: 0.64;
    transform: scale(1.09);
  }
`;
