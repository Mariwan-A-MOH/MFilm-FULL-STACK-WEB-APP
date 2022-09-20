import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { signOut } from "firebase/auth";
import { auth } from "../../Server/firebase";
import { Current_UserSelector } from "../../Redux/UserReducer/UserSelector";
import { Current_User_Action } from "../../Redux/UserReducer/UserAction";
import { ShowProCardAction } from "../../Redux/CrdReducer/CardAction";

import imgback from "../../assets/account2.png";
import ItemList from "../ItemList/itemlist";
const Profile = ({ ProShow, CurrentUser, dispatch }) => {
  const { email, name, photo } = CurrentUser;
  const SignOut = async () => {
    await dispatch(Current_User_Action({}));
    dispatch(ShowProCardAction());
    signOut(auth);
  };
  return (
    <AcountUserDiv ProShow={ProShow}>
      <ListDiv>
        <ProAva src={imgback} />
        <ProPhoto src={photo} />
        <DIVLIST>
          <Divinfo>
            <h1>{name}</h1>
            <p>{email}</p>
          </Divinfo>
          <Nav>
            <ListNav>.</ListNav>
          </Nav>
          <Button onClick={() => SignOut()}>Logout</Button>
        </DIVLIST>
      </ListDiv>
      <DisDiv>
        <Divdisplay>{<ItemList />}</Divdisplay>
        <UserIfo>bo8uiyh</UserIfo>
      </DisDiv>
    </AcountUserDiv>
  );
};
const MapstateProps = createStructuredSelector({
  CurrentUser: Current_UserSelector,
});
export default connect(MapstateProps)(Profile);
const AcountUserDiv = styled.div`
  transition: all 0.5s;
  position: absolute;
  top: 65px;
  right: 0;
  transform: ${(props) =>
    props.ProShow ? `translateX(0PX)` : `translateX(100%)`};
  background-color: rgba(32, 41, 49, 0.292);
  backdrop-filter: blur(12px);
  width: 100%;
  height: 100vh;
  display: flex;
`;
const DisDiv = styled.div`
  background-color: rgb(235, 250, 255);
  border-left: 3px solid rgba(193, 207, 214, 0.642);
  width: 80vw;
  height: 100vh;
  display: flex;
`;
const Divdisplay = styled.div`
  width: 75%;
  height: 100%;
  padding: 50px;
  overflow: hidden;
`;
const UserIfo = styled.div`
  background: black;
  width: 25%;
  height: 100%;
`;
const ListDiv = styled.div`
  backdrop-filter: blur(2px);
  background-color: rgb(235, 250, 255);
  width: 20vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; ;
`;
const ProAva = styled.img`
  position: relative;
  border-radius: 0px;
  width: 100%;
  height: 20%;
  margin-bottom: 50px;
`;
const ProPhoto = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 100%;
  position: absolute;
  top: 12%;

  border: 3px solid rgb(236, 246, 248);
`;
const Nav = styled.div`
  width: 100%;
  height: 61%;
  margin: 15px 0;
`;
const ListNav = styled.div`
  background-color: rgba(180, 207, 214, 0.361);
  border-radius: 20px;
  height: 90%;
  margin: 20px;
`;
const DIVLIST = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;

  align-items: center;
  h1 {
    color: rgb(94, 102, 103);
    text-transform: uppercase;
    font-size: 16px;
  }
  p {
    color: rgb(128, 135, 136);
    font-size: 10px;
  }
`;
const Divinfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 10%;
  // background:rgb(94, 102, 103);
  width: 100%;
`;
const Button = styled.div`
  font-size: 15px;
  font-weight: bold;

  cursor: pointer;
  width: 80%;
  color: white;
  border-bottom: 1px solid rgba(193, 212, 216, 0.546);
  background-image: linear-gradient(to right, rgb(0, 240, 0), rgb(0, 129, 0));
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
