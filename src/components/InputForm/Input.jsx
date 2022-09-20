import React from "react";
import styled from "styled-components";

const InputForm = ({ type, value, onChangeValue, title, name, Class }) => {
  return (
    <ConDiv className={Class && "add"}>
      <Input
        type={type}
        value={value}
        onChange={onChangeValue}
        placeholder={title}
        name={name}
        required
        className={Class && "add1"}
        // className="add1"
      />
    </ConDiv>
  );
};
export default InputForm;
const ConDiv = styled.div`
  width: 100%;
  border-bottom: 1px solid rgba(166, 192, 199, 0.6);

  &.add {
    overflow: hidden;
  }
`;
const Input = styled.input`
  border: none;
  background: rgb(40, 48, 56);
  width: 100%;
  height: 50px;
  font-size: 12px;

  padding: 10px;

  color: rgb(231, 246, 246);
  letter-spacing: 1.2px;

  :hover {
    background-color: rgba(166, 192, 199, 0.02);
  }
  :focus {
    outline: none;
  }
  &.add1 {
    border-bottom: 3px solid rgb(10, 217, 44);
    background-color: rgba(218, 236, 243, 0.438);
    color: rgb(40, 48, 56);
  }
  &.add1:hover {
    background-color: rgba(218, 236, 243, 0.438);
  }
`;
