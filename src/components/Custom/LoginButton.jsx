import React from "react";
import styled from "styled-components";
import { SignWithGoogle } from "../../Server/firebase";

const LoginButton = ({ children = "sign in", sign ,Click}) => {
  return (
    <ButtonDiv className={`${sign ? "sign" : "gog"} btn` }   onClick={()=>Click?SignWithGoogle():null}>{children}</ButtonDiv>
  );
};
// SyntheticEvent onclick onfucos

export default LoginButton;
const ButtonDiv = styled.button`
  color: aliceblue;
  width: 60%;
  height: 40px;
  border: 2px solid rgb(63, 80, 86);

  // // border:2px solid
  border-radius: 16px;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 1.4px;
  cursor: pointer;
  transition: all 1s;
  &.sign {
    background-color: rgb(63, 80, 86);
    :hover {
      background-color: rgba(95, 113, 118, 0.8);
    }
  }
  &.gog {
    background: rgb(40, 48, 56);
    :hover {
      background-color: rgba(95, 113, 118, 0.25);
    }
  }
  &:hover {
    transform: scale(1.08);
  }
`;
