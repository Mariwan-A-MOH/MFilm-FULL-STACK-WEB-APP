import React, { Component } from "react";
import styled from "styled-components";
import InputForm from "../InputForm/Input";
import LoginButton from "../Custom/LoginButton";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Server/firebase";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
  ChangeHandle = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  Submit = async (event) => {
    const { email, password, confirmPassword } = this.state;
    event.preventDefault();
    if (password == confirmPassword) {
      if (password.length > 7) {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("your account has been created successfully you can now log in ");
      } else {
        return alert("there should be more than 7 password charecters ");
      }
    } else {
      alert("please try to repeate the same password !");
    }
    this.setState({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };
  render() {
    const { email, name, password, confirmPassword } = this.state;
    return (
      <ConTainer className="login">
        <DivCon>
          <h1>SIGN UP</h1>
          <FormDiv onSubmit={this.Submit}>
            <ListDiv>
              <InputForm
                type="text"
                name="name"
                value={name}
                title="Name"
                onChangeValue={this.ChangeHandle}
              />
              <InputForm
                type="email"
                name="email"
                value={email}
                title="Email"
                onChangeValue={this.ChangeHandle}
              />
              <InputForm
                type="password"
                name="password"
                value={password}
                title="Password"
                onChangeValue={this.ChangeHandle}
              />
              <InputForm
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                title="confirmPassword"
                onChangeValue={this.ChangeHandle}
              />
              <LoginButton sign>Sign up</LoginButton>
            </ListDiv>
          </FormDiv>
        </DivCon>
      </ConTainer>
    );
  }
}

export default SignUp;
const ConTainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DivCon = styled.div`
  width: 40vw;
  height: 81vh;
  background: rgb(40, 48, 56);
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 30px;

  h1 {
    width: 100%;
    color: rgb(209, 229, 238);
    letter-spacing: 2px;
    border-bottom: 2px solid rgba(184, 209, 220, 0.055);
    border-radius: 20px;
    padding: 10px;
  }
`;
const FormDiv = styled.form`
  width: 100%;
  height: 78%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 50px 0px 0px 0px;
`;
const ListDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;
