import React from "react";
import styled from "styled-components";
import imgback from "../../assets/account2.png";
import { Link } from "react-router-dom";


const Acount = ({ Show }) => {

  const url = "https://www.crosswordarchive.org/images/avatar.jpg";
  return (
    <DinCon Show={Show}>
      <BackDIV src={imgback}></BackDIV>
      <Pro src={url} />
      <DIVLIST>
        <LinkTo to="/sign" >
          SIGN IN
        </LinkTo>
        <LinkTo to="/sign-up" >
          SIGN UP
        </LinkTo>
       
      </DIVLIST>
    </DinCon>
  );
};

export default Acount;

const DinCon = styled.div`
  box-shadow: 0px 10px 40px 10px rgba(16, 17, 19, 0.221);
  width: 250px;
  height: 400px;
  border-radius: 20px;
  position: absolute;
  top: 82px;
  right: 0;
  background-color: rgb(211, 226, 230);
  border: 4px solid rgb(187, 196, 198);

  backdrop-filter: blur(2px);
  transition: all 0.5s;
  transform: ${(props) =>
    props.Show ? `translateX(-70PX)` : `translateX(100%)`};
  padding: 15px 15px 15px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
const BackDIV = styled.img`
  position: relative;
  border-radius: 20px;
  width: 100%;
  height: 40%;
  margin-bottom: 50px;
`;
const Pro = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 100%;
  position: absolute;
  top: 25%;

  border: 3px solid rgb(236, 246, 248);
`;
const DIVLIST = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const LinkTo = styled(Link)`
  font-size: 15px;
  font-weight: bold;

  cursor: pointer;
  /* width: 100%; */
  color: rgba(100, 120, 133, 0.632);
  border-bottom: 1px solid rgba(193, 212, 216, 0.546);
  background-color: rgb(246, 248, 249);
  border-radius: 20px;
  box-shadow: 0px 7px 5px 0px rgba(171, 215, 225, 0.329);
  cursor: pointer;
  padding: 10px;
  transition: all 1s;
  text-decoration: none;
  &:hover {
    color: rgba(21, 95, 105, 0.8);
  }
`;
