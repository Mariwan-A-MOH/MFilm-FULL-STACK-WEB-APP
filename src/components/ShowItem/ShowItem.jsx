import React from "react";
import styled from "styled-components";
import WatchButoon from "../Custom/WatchButton";

const ShowItem = ({ item }) => {
  const {image,name,description}=item;
  return (
    <ConDiv image={image}>
      <ListItem>
        <h1>{name}</h1>
        <p>{description}</p>
        <WatchButoon/>
      </ListItem>
     
    </ConDiv>
  );
};





const ConDiv = styled.div`
  overflow: hidden;
  background-image: ${(props) =>
    ` linear-gradient(
      to right,
      rgba(0, 4, 0, 1),
      rgba(0, 4, 0, 0.7),
      rgba(0, 0, 0, 0.4),
      rgba(255, 255, 255, 0.05),
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.15)
      
      
      100%,
      transparent 1000%
    ),url("${props.image}")`};
  border-radius: 30px;
  margin-top: -40px;
  position: relative;
  background-size: cover;
  background-repeat: norepeat;
  width: 100vw;
  height: 800px;
`;

const ListItem = styled.div`
  position: absolute;
  width:400px;
  height:auto;
  bottom: 110px;
  left: 70px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 35px;
  flex-wrap: nowrap;
  .man{
  
    // margin-top:240%;
  }
  p{
    text-align: left;
    flex:1;
    align-self:flex-start;
    letter-spacing: 3px;
  font-weight: bold;
  color:rgb(172, 172, 172)
  }
 h1{ 
  text-align: left;
  flex:1;
  align-self:flex-start;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: bold;
  color:white;
  font-size:45px
}
`;
export default ShowItem;
